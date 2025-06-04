import { Component } from '@angular/core';
import { Pet } from '../model/pet';
import { PetService } from '../service/pet.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pet',
  imports: [HttpClientModule, CommonModule, RouterLink],
  templateUrl: './pet.component.html',
  styleUrl: './pet.component.css',
  providers: [PetService]
})
export class PetComponent {
  listaPets: Pet[] = [];

  constructor(private petService: PetService) {}

  ngOnInit() {
    console.log("Carregando pets...");
    this.petService.getPets().subscribe(pets => {
      this.listaPets = pets;
    });
  }
}