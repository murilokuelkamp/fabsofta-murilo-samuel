package br.univille.projfabsoftpetshop.Service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.univille.projfabsoftpetshop.Service.ClienteService;
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
    public Cliente getByID(long id) {
        var retorno = repository.findById(id);
        if(retorno.isPresent())
            return retorno.get();
        return null;
    }

    @Override
    public Cliente delete(long id) {
        var cliente = getByID(id);
        if(cliente != null)
            repository.deleteById(id);
        return cliente;
    }

}
