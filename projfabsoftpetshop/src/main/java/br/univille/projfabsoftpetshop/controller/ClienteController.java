package br.univille.projfabsoftpetshop.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import br.univille.projfabsoftpetshop.entity.Cliente;
import br.univille.projfabsoftpetshop.service.ClienteService;

@RestController
@RequestMapping("/api/v1/clientes")
public class ClienteController {

    @Autowired
    private ClienteService service;

    public ResponseEntity<List<Cliente>> getClientes(){
        var listaClientes = service.getAll();

        return new ResponseEntity<List<Cliente>>(listaClientes, HttpStatus.OK);      
    }
}
