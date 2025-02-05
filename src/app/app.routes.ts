import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CadastroComponent } from './cadastro/cadastro.component';

export const routes: Routes = [
  { path: 'inicio', component: MainComponent },
  { path: 'produto/:id', component: ProductDetailsComponent },
  { path: 'cadastro', component: CadastroComponent }, 
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
];
