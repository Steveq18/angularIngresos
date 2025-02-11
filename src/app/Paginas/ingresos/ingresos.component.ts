

import { Component, inject, signal } from '@angular/core';
import { FrmIngresosComponent } from '../../componentes/ingresos/frm-ingresos/frm-ingresos.component';
import { Ingresos } from '../../interfaces/ingresos';
import { ListadoIngresosComponent }  from '../../componentes/ingresos/listado-ingresos/listado-ingresos.component';
import { DbService } from '../../servicios/db.service';


@Component({
  selector: 'app-ingresos',
  standalone: true,
  imports: [FrmIngresosComponent, ListadoIngresosComponent],
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent {
  ingresos = signal<Ingresos[]>([]);

  ingresoParaEditar = signal<Ingresos|null>(null);


  ingresoServicio = inject(DbService);

 agregarIngreso(ingreso:Ingresos){
   this.ingresoServicio.agregarIngreso({...ingreso})
   this.ingresos.set(this.ingresoServicio.getIngresos());
 }
 editandolo(ingresoEditado:Ingresos){
   this.ingresoServicio.actualizarIngreso(ingresoEditado);
   this.ingresos.set(this.ingresoServicio.getIngresos());
 }
 eliminaIngreso(id:string){
   this.ingresoServicio.eliminar(id);
   this.ingresos.set(this.ingresoServicio.getIngresos());

 }
 seleccionIngreso(ingreso:Ingresos){
   this.ingresoParaEditar.set(ingreso);
 }


}
