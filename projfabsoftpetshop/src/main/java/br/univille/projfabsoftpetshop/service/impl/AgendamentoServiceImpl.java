package br.univille.projfabsoftpetshop.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.univille.projfabsoftpetshop.entity.Agendamento;
import br.univille.projfabsoftpetshop.repository.AgendamentoRepository;
import br.univille.projfabsoftpetshop.service.AgendamentoService;

@Service
public class AgendamentoServiceImpl implements AgendamentoService {

    @Autowired
    private AgendamentoRepository repository;

    @Override
    public Agendamento save(Agendamento agendamento) {
        return repository.save(agendamento);
    }

    @Override
    public List<Agendamento> getAll() {
        return repository.findAll();
    }

    @Override
    public Agendamento getById(long id) {
        var retorno = repository.findById(id);
        if(retorno.isPresent())
        return retorno.get();
        return null;
    }

    @Override
    public Agendamento delete(long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'delete'");
    }

}
