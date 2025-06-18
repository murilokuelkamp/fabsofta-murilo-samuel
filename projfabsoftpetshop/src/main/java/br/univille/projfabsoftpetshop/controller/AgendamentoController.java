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
import br.univille.projfabsoftpetshop.entity.Agendamento;
import br.univille.projfabsoftpetshop.service.AgendamentoService;

@RestController
@RequestMapping("/api/v1/agendamentos")
public class AgendamentoController {

    @Autowired
    private AgendamentoService service;

    @GetMapping
    public ResponseEntity<List<Agendamento>> getAgendamento() {
        var listaAgendamento = service.getAll();

        return new ResponseEntity<List<Agendamento>>(listaAgendamento, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Agendamento> getAgendamentoId(@PathVariable Long id){
        var agendamento = service.getById(id);

        return new ResponseEntity<Agendamento>(agendamento, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Agendamento> postAgendamento(@RequestBody Agendamento agendamento) {
        if (agendamento == null) {
            return ResponseEntity.badRequest().build();
        }
        if (agendamento.getId() == 0) {
            service.save(agendamento);
            return new ResponseEntity<Agendamento>(agendamento, HttpStatus.OK);
        }
        return ResponseEntity.badRequest().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Agendamento> putAgendamento(@PathVariable long id,
            @RequestBody Agendamento agendamento) {
        if (id <= 0 || agendamento == null) {
            return ResponseEntity.badRequest().build();
        }
        var agendamentoAntigo = service.getById(id);
        if (agendamentoAntigo == null) {
            return ResponseEntity.notFound().build();
        }

        agendamentoAntigo.setDataHora(agendamento.getDataHora());
        agendamentoAntigo.setStatus(agendamento.getStatus());
        agendamentoAntigo.setPets(agendamento.getPets());
        agendamentoAntigo.getServico().clear();
        agendamentoAntigo.getServico().addAll(agendamento.getServico());
        agendamentoAntigo.setCliente(agendamento.getCliente());

        service.save(agendamentoAntigo);
        return new ResponseEntity<Agendamento>(agendamentoAntigo, HttpStatus.OK);
    }

        @DeleteMapping("/{id}")
    public ResponseEntity<Agendamento> deleteAgendamento(@PathVariable long id){
        if(id <= 0){
            return ResponseEntity.badRequest().build();
        }
        var agendamentoExcluir = service.getById(id);
        if(agendamentoExcluir == null){
            return ResponseEntity.notFound().build();
        }

        service.delete(id);
        return new ResponseEntity<Agendamento>(agendamentoExcluir, HttpStatus.OK);
    }
}

