import { Component } from '@angular/core';
import { Pedido } from '../model/pedido';
import { PedidoService } from '../service/pedido.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-form-pedido',
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './form-pedido.component.html',
  styleUrl: './form-pedido.component.css',
  providers: [PedidoService, Router]
})
export class FormPedidoComponent {
    pedido: Pedido = new Pedido();

    constructor(
      private pedidoService:PedidoService,
      private router:Router,
      private activeRouter: ActivatedRoute
    ){
      const id = this.activeRouter.snapshot.paramMap.get('id');

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
}