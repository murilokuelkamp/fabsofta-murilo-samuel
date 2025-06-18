import { Component, ElementRef, ViewChild } from '@angular/core';
import { Servico } from '../model/servico';
import { ServicoService } from '../service/servico.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';


@Component({
  selector: 'app-servico',
  imports: [HttpClientModule, CommonModule],
  templateUrl: './servico.component.html',
  styleUrl: './servico.component.css',
  providers: [ServicoService, Router]
})
export class ServicoComponent {

      public listaServicos: Servico[] = [];

      @ViewChild('myModal') modalElement!: ElementRef;
      private modal!: bootstrap.Modal;

      private servicoSelecionado!: Servico;

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
    alterar(servico:Servico){
      this.router.navigate(['servicos/alterar', servico.id]);
    }
    abrirConfirmacao(servico:Servico) {
      this.servicoSelecionado = servico;
      this.modal = new bootstrap.Modal(this.modalElement.nativeElement);
      this.modal.show();
    }
    fecharConfirmacao() {
      this.modal.hide();
    }
    confirmarExclusao() {
      this.servicoService.excluirServico(this.servicoSelecionado.id).subscribe(
          () => {
              this.fecharConfirmacao();
              this.servicoService.getServicos().subscribe(
                servicos => {
                  this.listaServicos = servicos;
                }
              );
          },
          error => {
              console.error('Erro ao excluir serviço:', error);
          }
      );
  }
}
