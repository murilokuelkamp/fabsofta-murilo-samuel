package br.univille;

import br.univille.entity.Cidade;
import br.univille.entity.Pessoa;
import br.univille.entity.Pokemon;

public class App {
    public static void main(String[] args) throws Exception {
        //System.out.println("Hello, World!");
        //Instancia = New
        Cidade jlle = new Cidade();
        jlle.setNome("Joinville");
        jlle.setEstado("Santa Catarina");

        Pokemon pikachu = new Pokemon("pikachu");
        Pokemon charizard = new Pokemon("charizard");
        Pokemon torchic = new Pokemon("torchic");

        Pessoa mariazinha = new Pessoa("mariazinha");
        Pessoa zezinho = new Pessoa();
        zezinho.setNome("Zezinho");
        zezinho.setCidade(jlle);
        zezinho.getListaPokemon().add(pikachu);
        zezinho.getListaPokemon().add(charizard);
        zezinho.getListaPokemon().add(torchic);

        for(Pokemon umPokemon : zezinho.getListaPokemon()){
            System.out.println(umPokemon);
        }

        System.out.println(mariazinha);
        System.out.println(zezinho);

    }
}
