package br.univille.projfabsoftpetshop.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import br.univille.projfabsoftpetshop.entity.Pet;
import br.univille.projfabsoftpetshop.service.PetService;

@RestController
@RequestMapping("/api/v4/pet")
public class PetController {

    @Autowired
    private PetService service;

    @GetMapping
    public ResponseEntity<List<Pet>> getPet(){
        var listaPet = service.getAll();

        return new ResponseEntity<List<Pet>>(listaPet, HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<Pet> postPet(@RequestBody Pet pet){
        if(pet == null){
            return ResponseEntity.badRequest().build();
        }
        if (pet.getId() == 0){
            service.save(pet);
            return new ResponseEntity<Pet>(pet, HttpStatus.OK);
        }
        return ResponseEntity.badRequest().build();
    }
    @PutMapping("/{id}")
    public ResponseEntity<Pet> putPet(@PathVariable long id, @RequestBody Pet pet){
        if(id <= 0 || pet == null){
            return ResponseEntity.badRequest().build();
        }
        var petAntigo = service.getById(id);
        if(petAntigo == null){
            return ResponseEntity.notFound().build();
        }

        petAntigo.setNome(pet.getNome());
        petAntigo.setEspecie(pet.getEspecie());
        petAntigo.setRaca(pet.getRaca());
        petAntigo.setIdade(pet.getIdade());

        service.save(petAntigo);
        return new ResponseEntity<Pet>(petAntigo, HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Pet> deletePet(@PathVariable long id){
        if(id <= 0){
            return ResponseEntity.badRequest().build();
        }
        var petExcluir = service.getById(id);
        if(petExcluir == null){
            return ResponseEntity.notFound().build();
        }

        service.delete(id);
        return new ResponseEntity<Pet>(petExcluir, HttpStatus.OK);
    }
}
