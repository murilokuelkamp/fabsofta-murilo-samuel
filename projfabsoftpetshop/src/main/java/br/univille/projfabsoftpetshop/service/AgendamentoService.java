package br.univille.projfabsoftpetshop.Service;

import java.util.List;

import br.univille.projfabsoftpetshop.entity.Agendamento;

public interface AgendamentoService {
    Agendamento save(Agendamento agendamento);
    List<Agendamento> getAll();
    Agendamento getById(long id);
    Agendamento delete(long id);

}
