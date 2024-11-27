import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
  { path: 'inicio', component: MainComponent },
  { path: 'produto/:id', component: ProductDetailsComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }, // A rota padrão
];
