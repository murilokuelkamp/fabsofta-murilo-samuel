package br.univille.projfabsoftpetshop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.univille.projfabsoftpetshop.entity.Agendamento;

@Repository
public interface AgendamentoRepository 
        extends JpaRepository<Agendamento,Long>{
        
}
