import { Component } from '@angular/core';
import { Agendamento } from '../model/agendamento';
import { AgendamentoService } from '../service/agendamento.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agendamento',
  imports: [HttpClientModule,CommonModule],
  templateUrl: './agendamento.component.html',
  styleUrl: './agendamento.component.css',
  providers: [AgendamentoService]
})
export class AgendamentoComponent {
  listaAgendamentos: Agendamento[] = [];

  constructor(private agendamentoService: AgendamentoService) {}

  ngOnInit() {
    console.log("Carregando agendamentos...");
    this.agendamentoService.getAgendamentos().subscribe(agendamentos => {
      this.listaAgendamentos = agendamentos;
    });
  }
}