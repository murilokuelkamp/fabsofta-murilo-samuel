import { Component } from '@angular/core';
import { Pet } from '../model/pet';
import { PetService } from '../service/pet.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pet',
  imports: [HttpClientModule, CommonModule],
  templateUrl: './pet.component.html',
  styleUrl: './pet.component.css',
  providers: [PetService]
})
export class PetComponent {

      public listaPets: Pet[] = [];
      constructor(private petService:PetService) {}

    ngOnInit(): void {  
      this.petService.getPets().subscribe( resposta => {
        this.listaPets = resposta;
      });
    }
}