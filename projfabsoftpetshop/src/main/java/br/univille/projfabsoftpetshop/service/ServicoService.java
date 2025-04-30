package br.univille.projfabsoftpetshop.service;

import java.util.List;

import br.univille.projfabsoftpetshop.entity.Servico;

public interface ServicoService {
    Servico save(Servico Servico);
    List<Servico> getAll();
    Servico getById(long id);
    Servico delete(long id);
}
