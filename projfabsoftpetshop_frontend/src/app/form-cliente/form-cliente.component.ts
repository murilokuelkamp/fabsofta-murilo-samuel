import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Pet } from '../model/pet';
import { PetService } from '../service/pet.service';

@Component({
  selector: 'app-form-cliente',
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './form-cliente.component.html',
  styleUrl: './form-cliente.component.css',
  providers: [ClienteService, Router, PetService]
})
export class FormClienteComponent {
    cliente: Cliente = new Cliente();

    public listaPets: Pet[] = [];

    constructor(
      private clienteService:ClienteService,
      private router:Router,
      private petService: PetService,
      private activeRouter: ActivatedRoute
    ){
      const id = this.activeRouter.snapshot.paramMap.get('id');
      
      this.petService.getPets().subscribe(pet => {
        this.listaPets = pet;
      });

      if(id){
        this.clienteService.getClienteById(id).subscribe(cliente => {
          this.cliente = cliente;
        });
      }
    }

    salvar(){
      this.clienteService.saveCliente(this.cliente)
        .subscribe(clientes => {
            this.router.navigate(['clientes']);
        });
    }
    compararPet(obj1: Pet, obj2: Pet): boolean {
      return obj1 && obj2 ? obj1.id === obj2.id : obj1 === obj2;
    }
}