import { Component } from '@angular/core';
import { Agendamento } from '../model/agendamento';
import { AgendamentoService } from '../service/agendamento.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agendamento',
  imports: [HttpClientModule,CommonModule],
  templateUrl: './agendamento.component.html',
  styleUrl: './agendamento.component.css',
  providers: [AgendamentoService, Router]
})
export class AgendamentoComponent {
  listaAgendamentos: Agendamento[] = [];

  constructor(private agendamentoService: AgendamentoService, private router: Router) {}

  ngOnInit() {
    console.log("Carregando agendamentos...");
    this.agendamentoService.getAgendamentos().subscribe(agendamentos => {
      this.listaAgendamentos = agendamentos;
    });
  }
  novo(){
    this.router.navigate(['agendamentos/novo']);
  }
  alterar(agendamento: Agendamento){
    this.router.navigate(['agendamentos/alterar', agendamento.id]);
  }
}