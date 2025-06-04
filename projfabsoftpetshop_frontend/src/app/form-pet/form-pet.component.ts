import { Component } from '@angular/core';
import { Pet } from '../model/pet';
import { PetService } from '../service/pet.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-pet',
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './form-pet.component.html',
  styleUrl: './form-pet.component.css',
  providers: [PetService, Router]
})
export class FormPetComponent {
  pet:Pet = new Pet();

  constructor(
    private petService:PetService,
    private router:Router
  ){}

  salvar(){
    this.petService.savePet(this.pet)
    .subscribe(pets => {
      this.router.navigate(['pets']);
    });
  }
}
