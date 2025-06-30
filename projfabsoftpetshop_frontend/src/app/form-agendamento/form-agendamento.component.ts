import { Component } from '@angular/core';
import { Agendamento } from '../model/agendamento';
import { AgendamentoService } from '../service/agendamento.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Pet } from '../model/pet';
import { PetService } from '../service/pet.service';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';
import { Servico } from '../model/servico';
import { ServicoService } from '../service/servico.service';

@Component({
  selector: 'app-form-agendamento',
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './form-agendamento.component.html',
  styleUrl: './form-agendamento.component.css',
  providers: [AgendamentoService, Router, PetService, ClienteService, ServicoService]
})
export class FormAgendamentoComponent {
    agendamento: Agendamento = new Agendamento();

    public listaPets: Pet[] = [];
    public listaClientes: Cliente[] = [];
    public listaServicos: Servico[] = [];    

    constructor(
      private agendamentoService: AgendamentoService,
      private petService: PetService,
      private clienteService: ClienteService,
      private servicoService: ServicoService,
      private router: Router,
      private activeRouter: ActivatedRoute
    ){
      const id = this.activeRouter.snapshot.paramMap.get('id');

      this.petService.getPets().subscribe(pets => {
        this.listaPets = pets;
      });

      this.clienteService.getClientes().subscribe(clientes => {
        this.listaClientes = clientes;
      });

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
    compararPets(obj1: Pet, obj2: Pet): boolean {
      return obj1 && obj2 ? obj1.id === obj2.id : obj1 === obj2;
    }
    compararClientes(obj1: Cliente, obj2: Cliente): boolean {
      return obj1 && obj2 ? obj1.id === obj2.id : obj1 === obj2;
    }
    compararServicos(obj1: Servico, obj2: Servico): boolean {
      return obj1 && obj2 ? obj1.id === obj2.id : obj1 === obj2;
    }
}