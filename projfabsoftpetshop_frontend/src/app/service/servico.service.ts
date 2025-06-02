import { Injectable } from '@angular/core';
import { Servico } from '../model/servico';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {
  apiURL = "http://localhost:8080/api/v1/servicos";
  constructor(private http: HttpClient) { } 

  getServicos() {
    return this.http.get<Servico[]>(this.apiURL);
  }
}
