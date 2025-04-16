package br.univille.projfabsoftpetshop.service;

import java.util.List;

import br.univille.projfabsoftpetshop.entity.Pedido;

public interface PedidoService {
    Pedido save(Pedido pedido);
    List<Pedido> getAll();
    Pedido getById(long id);
    Pedido delete(long id);
}
