import { Cliente } from "./cliente";
import { Pet } from "./pet";
import { Servico } from "./servico";

export class Agendamento {
    id: number;
    dataHora: Date;
    status: string;
    pet: Pet;
    servico: Servico;
    cliente: Cliente;
}
