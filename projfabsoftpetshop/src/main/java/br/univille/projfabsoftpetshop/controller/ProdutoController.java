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
import br.univille.projfabsoftpetshop.entity.Produto;
import br.univille.projfabsoftpetshop.service.ProdutoService;

@RestController
@RequestMapping("/api/v5/produto")
public class ProdutoController {

    @Autowired
    private ProdutoService service;

    @GetMapping
    public ResponseEntity<List<Produto>> getPedido(){
        var listaProduto = service.getAll();

        return new ResponseEntity<List<Produto>>(listaProduto, HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<Produto> postProduto(@RequestBody Produto produto){
        if(produto == null){
          return ResponseEntity.badRequest().build();
        }
        if(produto.getId() == 0){
            service.save(produto);
            return new ResponseEntity<Produto>(produto, HttpStatus.OK);
        }
        return ResponseEntity.badRequest().build();
    }
    @PutMapping("/{id}")
    public ResponseEntity<Produto> putProduto(@PathVariable long id, @RequestBody Produto produto){
        if(id <= 0 || produto == null){
            return ResponseEntity.badRequest().build();
        }
        var produtoAntigo = service.getById(id);
        if(produtoAntigo == null){
            return ResponseEntity.notFound().build();
        }             

        produtoAntigo.setNome(produto.getNome());
        produtoAntigo.setDescricao(produtoAntigo.getDescricao());
        produtoAntigo.setQuantidade(produtoAntigo.getQuantidade());
        produtoAntigo.setPreco(produtoAntigo.getPreco());

        service.save(produtoAntigo);
        return new ResponseEntity<Produto>(produtoAntigo, HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Produto> deleteProduto(@PathVariable long id){
        if(id <= 0){
            return ResponseEntity.badRequest().build();
        }
        var produtoExcluir = service.getById(id);
        if(produtoExcluir == null){
            return ResponseEntity.notFound().build();
        }

        service.delete(id);
        return new ResponseEntity<Produto>(produtoExcluir, HttpStatus.OK);
    }
}
