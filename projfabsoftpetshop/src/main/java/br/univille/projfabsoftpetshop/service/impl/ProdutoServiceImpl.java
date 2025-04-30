package br.univille.projfabsoftpetshop.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.univille.projfabsoftpetshop.entity.Produto;
import br.univille.projfabsoftpetshop.repository.ProdutoRepository;
import br.univille.projfabsoftpetshop.service.ProdutoService;

@Service
public class ProdutoServiceImpl implements ProdutoService {
    
    @Autowired
    private ProdutoRepository repository;

    @Override
    public Produto save(Produto produto) {
        return repository.save(produto);
    }

    @Override
    public List<Produto> getAll() {
        return repository.findAll();
    }

    @Override
    public Produto getById(long id) {
        var retorno = repository.findById(id);
        if(retorno.isPresent())
            return retorno.get();
        return null;
    }

    @Override
    public Produto delete(long id) {
        var produto = getById(id);
        if(produto != null)
            repository.deleteById(id);
        return produto;
    }
}
