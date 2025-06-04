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
    return this.http.post(this.apiURL,pet);
  }
}
