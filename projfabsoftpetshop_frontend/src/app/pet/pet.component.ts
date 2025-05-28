import { Component } from '@angular/core';
import { Pet } from '../model/pet';
import { PetService } from '../service/pet.service';

@Component({
  selector: 'app-pet',
  imports: [],
  templateUrl: './pet.component.html',
  styleUrl: './pet.component.css'
})
export class PetComponent {

      public listaPets: Pet[] = [];
      constructor(private petService: PetService) {}

    ngOnInit(): void {  
      this.petService.getPets().subscribe( resposta => {
        this.listaPets = resposta;
      })
    }
}