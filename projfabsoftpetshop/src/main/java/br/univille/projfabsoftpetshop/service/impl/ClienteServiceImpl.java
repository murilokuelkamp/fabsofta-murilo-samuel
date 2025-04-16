package br.univille.projfabsoftpetshop.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.univille.projfabsoftpetshop.service.ClienteService;
import br.univille.projfabsoftpetshop.entity.Cliente;
import br.univille.projfabsoftpetshop.repository.ClienteRepository;

@Service
public class ClienteServiceImpl implements ClienteService {

    @Autowired
    private ClienteRepository repository;

    @Override
    public Cliente save(Cliente cliente) {
        return repository.save(cliente);
    }

    @Override
    public List<Cliente> getAll() {
        return repository.findAll();
    }

    @Override
    public Cliente getById(long id) {
        var retorno = repository.findById(id);
        if(retorno.isPresent())
            return retorno.get();
        return null;
    }

    @Override
    public Cliente delete(long id) {
        var cliente = getById(id);
        if(cliente != null)
            repository.deleteById(id);
        return cliente;
    }

}
