import { Component } from '@angular/core';
import { Agendamento } from '../model/agendamento';
import { AgendamentoService } from '../service/agendamento.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-form-agendamento',
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './form-agendamento.component.html',
  styleUrl: './form-agendamento.component.css',
  providers: [AgendamentoService, Router]
})
export class FormAgendamentoComponent {
    agendamento: Agendamento = new Agendamento();

    constructor(
      private agendamentoService: AgendamentoService,
      private router: Router,
      private activeRouter: ActivatedRoute
    ){
      const id = this.activeRouter.snapshot.paramMap.get('id');

      if (id) {
        this.agendamentoService.getAgendamentoById(id).subscribe(agendamento => {
          this.agendamento = agendamento;
        });
        
      }
    }

    salvar(){
      this.agendamentoService.saveAgendamento(this.agendamento)
        .subscribe(agendamentos => {
            this.router.navigate(['agendamentos']);
        });
    }
}