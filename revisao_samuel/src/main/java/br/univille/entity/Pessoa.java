package br.univille.entity;

public class Pessoa {
    //variável; atributo; propriedade
    private long id;
    private String nome;
    private String endereco;

    private Cidade cidade;
    
    
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getEndereco() {
        return endereco;
    }
    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }
    //Construtor (mesmo nome da classe, nao tem retorno)
    public Pessoa(String nome) {
        //this referencia a classe
        this.nome = nome;
    }
    //Dois metodos com mesma assinatura semelhante = Polimorfismo
    public Pessoa() {
        super();
    }
    //método
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
    public Cidade getCidade() {
        return cidade;
    }
    public void setCidade(Cidade cidade) {
        this.cidade = cidade;
    }
}
