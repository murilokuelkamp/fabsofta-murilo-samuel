import { Component } from '@angular/core';
import { Servico } from '../model/servico';
import { ServicoService } from '../service/servico.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servico',
  imports: [HttpClientModule, CommonModule],
  templateUrl: './servico.component.html',
  styleUrl: './servico.component.css',
  providers: [ServicoService, Router]
})
export class ServicoComponent {

      public listaServicos: Servico[] = [];
      constructor(
        private servicoService: ServicoService, 
        private router: Router) {}

    ngOnInit(): void {
      this.servicoService.getServicos().subscribe(resposta => {
        this.listaServicos = resposta;
      });
    }
    novo() {
      this.router.navigate(['servicos/novo']);
    }
}
