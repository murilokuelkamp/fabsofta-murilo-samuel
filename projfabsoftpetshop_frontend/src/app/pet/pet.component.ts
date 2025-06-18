import { Component, ElementRef, ViewChild } from '@angular/core';
import { Pet } from '../model/pet';
import { PetService } from '../service/pet.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap'; 

@Component({
  selector: 'app-pet',
  imports: [HttpClientModule, CommonModule],
  templateUrl: './pet.component.html',
  styleUrl: './pet.component.css',
  providers: [PetService, Router]
})
export class PetComponent {
  listaPets: Pet[] = [];

  @ViewChild('myModal') modalElement!: ElementRef;
  private modal!: bootstrap.Modal;

  private petSelecionado!: Pet;

  constructor(
    private petService: PetService,
    private router: Router
  ) {}

  ngOnInit() {
    console.log("Carregando pets...");
    this.petService.getPets().subscribe(pets => {
      this.listaPets = pets;
    });
  }
  novo(){
    this.router.navigate(['pets/novo']);
  }
  alterar(pet:Pet){
    this.router.navigate(['pets/alterar', pet.id]);
  }
  abrirConfirmacao(pet: Pet) {
    this.petSelecionado = pet;
    this.modal = new bootstrap.Modal(this.modalElement.nativeElement);
    this.modal.show();
  }
  fecharConfirmacao() {
    this.modal.hide();
  }
  confirmarExclusao() {
    this.petService.excluirPet(this.petSelecionado.id).subscribe(
      () => {
        this.fecharConfirmacao();
        this.petService.getPets().subscribe(
          pets => {
            this.listaPets = pets;
          }
        );
      },
      error => {
        console.error('Erro ao excluir pet:', error);
      }
    );
  }
}