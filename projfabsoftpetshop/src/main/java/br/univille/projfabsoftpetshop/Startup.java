package br.univille.projfabsoftpetshop;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import br.univille.projfabsoftpetshop.entity.Pagamento;
import br.univille.projfabsoftpetshop.repository.PagamentoRepository;

@Component
public class Startup {

    @Autowired
    private PagamentoRepository repository;

    @EventListener
    public void onApplicationEvent(ContextRefreshedEvent event){

        if(!repository.existsById(1L)){
            Pagamento pag1 = new Pagamento();
            pag1.setMetodo("PIX");
            repository.save(pag1);

            pag1 = new Pagamento();
            pag1.setMetodo("Cartão");
            repository.save(pag1);

        }

    }   
}
