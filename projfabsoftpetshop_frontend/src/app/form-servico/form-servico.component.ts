import { Component } from '@angular/core';
import { Servico } from '../model/servico';
import { ServicoService } from '../service/servico.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-servico',
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './form-servico.component.html',
  styleUrl: './form-servico.component.css',
  providers: [ServicoService, Router]
})
export class FormServicoComponent {
    servico: Servico = new Servico();

    constructor(
      private servicoService:ServicoService,
      private router:Router
    ){}

    salvar(){
      this.servicoService.saveServico(this.servico)
        .subscribe(servicos => {
            this.router.navigate(['servicos']);
        });
    }
}
