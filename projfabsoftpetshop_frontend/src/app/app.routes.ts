import { Routes } from '@angular/router';
import { PetComponent } from './pet/pet.component';
import { FormPetComponent } from './form-pet/form-pet.component';
import { ProdutoComponent } from './produto/produto.component';
import { FormProdutoComponent } from './form-produto/form-produto.component';
import { ServicoComponent } from './servico/servico.component';
import { FormServicoComponent } from './form-servico/form-servico.component';
import { ClienteComponent } from './cliente/cliente.component';
import { FormClienteComponent } from './form-cliente/form-cliente.component';
import { PedidoComponent } from './pedido/pedido.component';
import { FormPedidoComponent } from './form-pedido/form-pedido.component';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { FormAgendamentoComponent } from './form-agendamento/form-agendamento.component';


export const routes: Routes = [
    {path: 'pets', component: PetComponent},
    {path: 'pets/novo', component: FormPetComponent},
    {path: 'pets/alterar/:id', component: FormPetComponent},
    {path: 'produtos', component: ProdutoComponent},
    {path: 'produtos/novo', component: FormProdutoComponent},
    {path: 'produtos/alterar/:id', component: FormProdutoComponent},
    {path: 'servicos', component: ServicoComponent},
    {path: 'servicos/novo', component: FormServicoComponent},
    {path: 'servicos/alterar/:id', component: FormServicoComponent},
    {path: 'clientes', component: ClienteComponent},
    {path: 'clientes/novo', component: FormClienteComponent},
    {path: 'clientes/alterar/:id', component: FormClienteComponent},
    {path: 'pedidos', component: PedidoComponent},
    {path: 'pedidos/novo', component: FormPedidoComponent},
    {path: 'pedidos/alterar/:id', component: FormPedidoComponent},
    {path: 'agendamentos', component: AgendamentoComponent},
    {path: 'agendamentos/novo', component: FormAgendamentoComponent},
    {path: 'agendamentos/alterar/:id', component: FormAgendamentoComponent}
];
