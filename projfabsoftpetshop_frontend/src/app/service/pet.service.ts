import { Injectable } from '@angular/core';
import { Pet } from '../model/pet';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  apiURL = "http://localhost:8080/api/v1/pets";
  constructor(private http:HttpClient) { }

  getPets() {
    return this.http.get<Pet[]>(this.apiURL);
  }
  savePet(pet:Pet){
    if(pet.id){
      return this.http.put(this.apiURL + '/' + pet.id, pet);
    }
    return this.http.post(this.apiURL,pet);
  }
  getPetById(id: any){
    return this.http.get<Pet>(this.apiURL + '/' + id);
  }
  excluirPet(id: any){
  return this.http.delete<Pet>(this.apiURL + '/' + id);
  }  
}
