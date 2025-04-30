package br.univille.projfabsoftpetshop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import br.univille.projfabsoftpetshop.entity.Servico;

@Repository
public interface ServicoRepository extends JpaRepository<Servico,Long> {

}
