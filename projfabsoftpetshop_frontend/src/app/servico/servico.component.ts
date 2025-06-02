import { Component } from '@angular/core';
import { Servico } from '../model/servico';
import { ServicoService } from '../service/servico.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servico',
  imports: [HttpClientModule, CommonModule],
  templateUrl: './servico.component.html',
  styleUrl: './servico.component.css',
  providers: [ServicoService]
})
export class ServicoComponent {

      public listaServicos: Servico[] = [];
      constructor(private servicoService: ServicoService) {}

    ngOnInit(): void {
      this.servicoService.getServicos().subscribe(resposta => {
        this.listaServicos = resposta;
      });
    }
}
