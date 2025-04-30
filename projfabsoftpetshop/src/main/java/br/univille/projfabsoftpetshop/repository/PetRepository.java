package br.univille.projfabsoftpetshop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import br.univille.projfabsoftpetshop.entity.Pet;

@Repository
public interface PetRepository extends JpaRepository<Pet,Long>{

}
