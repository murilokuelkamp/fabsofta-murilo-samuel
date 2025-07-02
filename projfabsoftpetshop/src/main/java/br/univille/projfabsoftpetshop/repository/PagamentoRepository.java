package br.univille.projfabsoftpetshop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.univille.projfabsoftpetshop.entity.Pagamento;

@Repository
public interface PagamentoRepository extends JpaRepository<Pagamento,Long> {
    
}
