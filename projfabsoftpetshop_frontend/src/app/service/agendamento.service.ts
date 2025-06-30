import { Injectable } from '@angular/core';
import { Agendamento } from '../model/agendamento';
import { Servico } from '../model/servico';
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
    if(agendamento.id){
      return this.http.put(this.apiURL + '/' + agendamento.id, agendamento);
    } 
    return this.http.post(this.apiURL, agendamento);
  }
  getAgendamentoById(id: any){
    return this.http.get<Agendamento>(this.apiURL + '/' + id);
  }
  excluirAgendamento(id: any){
  return this.http.delete<Agendamento>(this.apiURL + '/' + id);
  }  
}