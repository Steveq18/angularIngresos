import { Routes } from '@angular/router';
import { IngresosComponent } from './Paginas/ingresos/ingresos.component';
import { FrmGastosComponent} from './Paginas/gastos/gastos.component';
import { InformesComponent } from './Paginas/informes/informes.component';

export const routes: Routes = [
  {path:'Ingresos', component: IngresosComponent},
  {path:'Gastos', component: FrmGastosComponent},
  {path:'Informes', component:InformesComponent},
  { path: '', redirectTo: '/Gastos', pathMatch: 'full' },
];


