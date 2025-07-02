import { Cliente } from "./cliente";
import { Produto } from "./produto";
import { Pagamento } from "./pagamento";

export class Pedido {
    id: number;
    total: number;
    status: string;
    cliente: Cliente;
    produto: Produto;
    pagamento: Pagamento;
}
