package br.univille.projfabsoftpetshop.service;

import java.util.List;

import br.univille.projfabsoftpetshop.entity.Pet;

public interface PetService{
    Pet save(Pet pet);
    List<Pet> getAll();
    Pet getById(long id);
    Pet delete(long id);
}
