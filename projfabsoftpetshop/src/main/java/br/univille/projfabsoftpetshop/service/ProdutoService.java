package br.univille.projfabsoftpetshop.service;

import java.util.List;

import br.univille.projfabsoftpetshop.entity.Produto;

public interface ProdutoService {
    Produto save(Produto Produto);
    List<Produto> getAll();
    Produto getById(long id);
    Produto delete(long id);
}