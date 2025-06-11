import { Component } from '@angular/core';
import { Pet } from '../model/pet';
import { PetService } from '../service/pet.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-pet',
  imports: [HttpClientModule, CommonModule],
  templateUrl: './pet.component.html',
  styleUrl: './pet.component.css',
  providers: [PetService, Router]
})
export class PetComponent {
  listaPets: Pet[] = [];

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
}