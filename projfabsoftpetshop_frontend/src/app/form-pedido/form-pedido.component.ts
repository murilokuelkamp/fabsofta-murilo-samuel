import { Component } from '@angular/core';
import { Pedido } from '../model/pedido';
import { PedidoService } from '../service/pedido.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';
import { Produto } from '../model/produto';
import { ProdutoService } from '../service/produto.service';


@Component({
  selector: 'app-form-pedido',
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './form-pedido.component.html',
  styleUrl: './form-pedido.component.css',
  providers: [PedidoService, Router, ClienteService, ProdutoService]
})
export class FormPedidoComponent {
    pedido: Pedido = new Pedido();

    public listaClientes: Cliente[] = [];
    public listaProdutos: Produto[] = [];

    constructor(
      private pedidoService:PedidoService,
      private clienteService: ClienteService,
      private produtoService: ProdutoService,
      private router:Router,
      private activeRouter: ActivatedRoute
    ){
      const id = this.activeRouter.snapshot.paramMap.get('id');

      this.clienteService.getClientes().subscribe(cliente =>{
          this.listaClientes = cliente;
      });
      
      this.produtoService.getProdutos().subscribe(produto => {
          this.listaProdutos = produto;
      });

      if(id){
        this.pedidoService.getPedidoById(id).subscribe(pedido => {
          this.pedido = pedido;
        });

      }
    }

    salvar(){
      this.pedidoService.savePedido(this.pedido)
        .subscribe(pedidos => {
            this.router.navigate(['pedidos']);
        });
    }
    compararProduto(obj1: Produto, obj2: Produto): boolean {
      return obj1 && obj2 ? obj1.id === obj2.id : obj1 === obj2;
    }
    compararCliente(obj1: Cliente, obj2: Cliente): boolean {
      return obj1 && obj2 ? obj1.id === obj2.id : obj1 === obj2;
    }
}