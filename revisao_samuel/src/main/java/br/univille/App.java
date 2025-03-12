package br.univille;

public class App {
    public static void main(String[] args) throws Exception {
        //System.out.println("Hello, World!");
        //Instancia = New

        Pessoa mariazinha = new Pessoa("mariazinha");
        Pessoa zezinho = new Pessoa();
        zezinho.setNome("Zezinho");

        System.out.println(mariazinha);
        System.out.println(zezinho);

    }
}
