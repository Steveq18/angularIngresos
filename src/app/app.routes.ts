import { Routes } from '@angular/router';
import { IngresosComponent } from './Paginas/ingresos/ingresos.component';
import { GastosComponent } from './Paginas/gastos/gastos.component';

export const routes: Routes = [
  {path:'Ingresos', component: IngresosComponent},
  {path:'Gastos', component: GastosComponent}
];
