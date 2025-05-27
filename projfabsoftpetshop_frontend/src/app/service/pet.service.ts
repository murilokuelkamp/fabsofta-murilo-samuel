import { Injectable } from '@angular/core';
import { Pet } from '../model/pet';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetService {
    apiURL = "http://localhost:8080/api/v1/pet";
  constructor(private http:HttpClient) { }

  getPets() {
    return this.http.get<Pet[]>(this.apiURL);
  }
}
