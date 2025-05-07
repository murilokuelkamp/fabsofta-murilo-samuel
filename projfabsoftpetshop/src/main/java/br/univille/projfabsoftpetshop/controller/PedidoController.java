package br.univille.projfabsoftpetshop.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import br.univille.projfabsoftpetshop.entity.Pedido;
import br.univille.projfabsoftpetshop.service.PedidoService;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/v1/pedido")
public class PedidoController {

    @Autowired
    private PedidoService service;

    @GetMapping
    public ResponseEntity<List<Pedido>> getPedido() {
        var listaPedido = service.getAll();

        return new ResponseEntity<List<Pedido>>(listaPedido, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Pedido> postPedido(@RequestBody Pedido pedido) {
        if (pedido == null) {
            return ResponseEntity.badRequest().build();
        }
        if (pedido.getId() == 0) {
            service.save(pedido);
            return new ResponseEntity<Pedido>(pedido, HttpStatus.OK);
        }
        return ResponseEntity.badRequest().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Pedido> putPedido(@PathVariable long id, @RequestBody Pedido pedido) {
        if (id <= 0 || pedido == null) {
            return ResponseEntity.badRequest().build();
        }
        var pedidoAntigo = service.getById(id);
        if (pedidoAntigo == null) {
            return ResponseEntity.notFound().build();
        }

        pedidoAntigo.setTotal(pedido.getTotal());
        pedidoAntigo.setStatus(pedido.getStatus());
        pedidoAntigo.setCliente(pedido.getCliente());
        pedidoAntigo.getProdutos().clear();
        pedidoAntigo.getProdutos().addAll(pedido.getProdutos());
        pedidoAntigo.setPagamento(pedido.getPagamento());

        service.save(pedidoAntigo);
        return new ResponseEntity<Pedido>(pedidoAntigo, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Pedido> deletePedido(@PathVariable long id) {
        if (id <= 0) {
            return ResponseEntity.badRequest().build();
        }
        var pedidoExcluir = service.getById(id);
        if (pedidoExcluir == null) {
            return ResponseEntity.notFound().build();
        }

        service.delete(id);
        return new ResponseEntity<Pedido>(pedidoExcluir, HttpStatus.OK);
    }
}
