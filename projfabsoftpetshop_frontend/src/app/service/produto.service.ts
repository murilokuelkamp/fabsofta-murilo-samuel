import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
    apiURL = "http://localhost:8080/api/v1/produtos";
  constructor(private http:HttpClient) { }

  getProdutos() {
    return this.http.get<Produto[]>(this.apiURL);
  }
  saveProduto(produto: Produto) {
    if(produto.id){
      return this.http.put(this.apiURL + '/' + produto.id, produto);
    }
    return this.http.post(this.apiURL, produto);
  }
  getProdutoById(id: any) {
    return this.http.get<Produto>(this.apiURL + '/' + id);
  }
  excluirProduto(id: any){
  return this.http.delete<Produto>(this.apiURL + '/' + id);
  }
}
