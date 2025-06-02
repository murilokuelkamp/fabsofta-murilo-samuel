export class Cliente {
    id: number;
    nome: string;
    endereco: string;
    telefone: string;
    email: string;
    dataNascimento: Date;
    pets: [
        {
        id: number;
        nome: string;
        especie: string;
        raca: string;
        idade: number;
        }
    ]
}

