package br.univille.projfabsoftpetshop.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.univille.projfabsoftpetshop.entity.Pet;
import br.univille.projfabsoftpetshop.repository.PetRepository;
import br.univille.projfabsoftpetshop.service.PetService;

@Service
public class PetServiceImpl implements PetService {

    @Autowired
    private PetRepository repository;

    @Override
    public Pet save(Pet pet) {
        return repository.save(pet);
    }

    @Override
    public List<Pet> getAll() {
        return repository.findAll();
    }

    @Override
    public Pet getById(long id) {
        var retorno = repository.findById(id);
        if(retorno.isPresent())
            return retorno.get();
        return null;
    }

    @Override
    public Pet delete(long id) {
        var pet = getById(id);
        if(pet != null)
            repository.deleteById(id);
        return pet;
    }

    
}
