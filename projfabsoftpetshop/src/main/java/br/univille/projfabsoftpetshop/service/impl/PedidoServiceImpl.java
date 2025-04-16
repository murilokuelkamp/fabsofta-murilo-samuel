package br.univille.projfabsoftpetshop.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.univille.projfabsoftpetshop.entity.Pedido;
import br.univille.projfabsoftpetshop.repository.PedidoRepository;
import br.univille.projfabsoftpetshop.service.PedidoService;

@Service
public class PedidoServiceImpl implements PedidoService {

    @Autowired
    private PedidoRepository repository;
    
    @Override
    public Pedido save(Pedido pedido) {
        return repository.save(pedido);
    }

    @Override
    public List<Pedido> getAll() {
        return repository.findAll();
    }

    @Override
    public Pedido getById(long id) {
        var retorno = repository.findById(id);
        if(retorno.isPresent())
            return retorno.get();
        return null;
    }

    @Override
    public Pedido delete(long id) {
        var cliente = getById(id);
        if(cliente != null)
            repository.deleteById(id);
        return cliente;
    }

}
