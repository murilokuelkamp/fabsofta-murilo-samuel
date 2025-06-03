import { Routes } from '@angular/router';
import { PetComponent } from './pet/pet.component';
import { ProdutoComponent } from './produto/produto.component';
import { ServicoComponent } from './servico/servico.component';
import { ClienteComponent } from './cliente/cliente.component';
import { PedidoComponent } from './pedido/pedido.component';
import { AgendamentoComponent } from './agendamento/agendamento.component';

export const routes: Routes = [
    {path: 'pets', component: PetComponent},
    {path: 'produtos', component: ProdutoComponent},
    {path: 'servicos', component: ServicoComponent},
    {path: 'clientes', component: ClienteComponent},
    {path: 'pedidos', component: PedidoComponent},
    {path: 'agendamentos', component: AgendamentoComponent}
];
