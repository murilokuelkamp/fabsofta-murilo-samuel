import { Injectable } from '@angular/core';
import { Agendamento } from '../model/agendamento';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {
  apiURL = "http://localhost:8080/api/v1/agendamentos";
  
  constructor(private http:HttpClient) { }

  getAgendamentos(){
    return this.http.get<Agendamento[]>(this.apiURL);
  }
  saveAgendamento(agendamento: Agendamento){
    return this.http.post<Agendamento>(this.apiURL, agendamento);
  }

}