package br.univille;

import javax.print.DocFlavor.STRING;

public class Pessoa {
    private String nome; //variável; atributo; propriedade


    //Construtor (mesmo nome da classe, nao tem retorno)
    public Pessoa(String nome) {
        //this referencia a classe
        this.nome = nome;
    }
    //Dois metodos com mesma assinatura semelhante = Polimorfismo
    public Pessoa() {
        super();
    }
    //metodo
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
    //Sobreescrita de metodo (overrite)
    
    public String toString(){
        return getNome();
    }
}
