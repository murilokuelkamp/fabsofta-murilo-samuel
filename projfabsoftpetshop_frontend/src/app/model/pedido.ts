import { Cliente } from "./cliente";
import { Produto } from "./produto";

export class Pedido {
    id: number;
    total: number;
    status: string;
    cliente: Cliente;
    produtos: Produto [];
    pagamento: string;
}
