import { Component } from '@angular/core';
import { Pedido } from '../model/pedido';
import { PedidoService } from '../service/pedido.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pedido',
  imports: [HttpClientModule, CommonModule],
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.css',
  providers: [PedidoService]  
})
export class PedidoComponent {
  listaPedidos: Pedido[] = [];

  constructor(private pedidoService: PedidoService) {}

  ngOnInit() {
    console.log("Carregando pedidos...");
    this.pedidoService.getPedidos().subscribe(pedidos => {
      this.listaPedidos = pedidos;
    });
  }
}
