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
import br.univille.projfabsoftpetshop.entity.Servico;
import br.univille.projfabsoftpetshop.service.ServicoService;

@RestController
@RequestMapping("/api/v6/servico")
public class ServicoController {

    @Autowired
    private ServicoService service;

    @GetMapping
    public ResponseEntity<List<Servico>> getServico() {
        var listaServico = service.getAll();

        return new ResponseEntity<List<Servico>>(listaServico, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Servico> postServico(@RequestBody Servico servico) {
        if (servico == null) {
            return ResponseEntity.badRequest().build();
        }
        if (servico.getId() == 0) {
            service.save(servico);
            return new ResponseEntity<Servico>(servico, HttpStatus.OK);
        }
        return ResponseEntity.badRequest().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Servico> putServico(@PathVariable long id, @RequestBody Servico servico) {
        if (id <= 0 || servico == null) {
            return ResponseEntity.badRequest().build();
        }
        var servicoAntigo = service.getById(id);
        if (servicoAntigo == null) {
            return ResponseEntity.notFound().build();
        }

        servicoAntigo.setTipo(servico.getTipo());
        servicoAntigo.setDescricao(servico.getDescricao());
        servicoAntigo.setPreco(servico.getPreco());

        service.save(servicoAntigo);
        return new ResponseEntity<Servico>(servicoAntigo, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Servico> deleteServico(@PathVariable long id) {
        if (id <= 0) {
            return ResponseEntity.badRequest().build();
        }
        var servicoExcluir = service.getById(id);
        if (servicoExcluir == null) {
            return ResponseEntity.notFound().build();
        }

        service.delete(id);
        return new ResponseEntity<Servico>(servicoExcluir, HttpStatus.OK);
    }
}
