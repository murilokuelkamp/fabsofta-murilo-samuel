package br.univille.projfabsoftpetshop.Service;

import java.util.List;

import br.univille.projfabsoftpetshop.entity.Cliente;

public interface ClienteService {
    Cliente save(Cliente cliente);
    List<Cliente> getAll();
    Cliente getByID(long id);
    Cliente delete(long id);
}
