import { Routes } from '@angular/router';
import { PetComponent } from './pet/pet.component';
import { ProdutoComponent } from './produto/produto.component';

export const routes: Routes = [
    {path: 'pets', component: PetComponent},
    {path: 'produtos', component: ProdutoComponent}
];
