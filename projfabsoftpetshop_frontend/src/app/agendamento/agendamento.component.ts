import { Component, ElementRef, ViewChild } from '@angular/core';
import { Agendamento } from '../model/agendamento';
import { AgendamentoService } from '../service/agendamento.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap'; 

@Component({
  selector: 'app-agendamento',
  imports: [HttpClientModule,CommonModule],
  templateUrl: './agendamento.component.html',
  styleUrl: './agendamento.component.css',
  providers: [AgendamentoService, Router]
})
export class AgendamentoComponent {
  listaAgendamentos: Agendamento[] = [];

  @ViewChild('myModal') modalElement!: ElementRef;
  private modal!: bootstrap.Modal;

  private agendamentoSelecionado!: Agendamento;

  constructor(
    private agendamentoService: AgendamentoService,
    private router: Router) {}

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
  abrirConfirmacao(agendamento: Agendamento) {
    this.agendamentoSelecionado = agendamento;
    this.modal = new bootstrap.Modal(this.modalElement.nativeElement);
    this.modal.show();
  }
  fecharConfirmacao() {
    this.modal.hide();
  }
  confirmarExclusao() {
    this.agendamentoService.excluirAgendamento(this.agendamentoSelecionado.id).subscribe(
      () => {
        this.fecharConfirmacao();
        this.agendamentoService.getAgendamentos().subscribe(
          agendamentos => {
            this.listaAgendamentos = agendamentos;
          }
        );
      },
      error => {
        console.error('Erro ao excluir agendamento:', error);
      }
    );
  }
}