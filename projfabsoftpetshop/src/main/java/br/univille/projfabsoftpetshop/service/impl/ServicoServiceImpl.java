package br.univille.projfabsoftpetshop.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.univille.projfabsoftpetshop.entity.Servico;
import br.univille.projfabsoftpetshop.repository.ServicoRepository;
import br.univille.projfabsoftpetshop.service.ServicoService;

@Service
public class ServicoServiceImpl implements ServicoService {

    @Autowired
    private ServicoRepository repository;

    @Override
    public Servico save(Servico servico) {
        return repository.save(servico);
    }

    @Override
    public List<Servico> getAll() {
        return repository.findAll();
    }

    @Override
    public Servico getById(long id) {
        var retorno = repository.findById(id);
        if(retorno.isPresent())
            return retorno.get();
        return null;
    }

    @Override
    public Servico delete(long id) {
        var servico = getById(id);
        if(servico != null)
            repository.deleteById(id);
        return servico;
    }
}
