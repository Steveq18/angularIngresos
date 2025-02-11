import { CommonModule } from '@angular/common';
import { Ingresos } from './../../../interfaces/ingresos';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { DbService } from '../../../servicios/db.service';

@Component({
  selector: 'app-listado-ingresos',
  standalone: true,
  imports: [CommonModule],
  templateUrl:'./listado-ingresos.component.html',
  styleUrl: './listado-ingresos.component.css'

})


export class ListadoIngresosComponent {
  @Input() ingresos:Ingresos[]=[];
  @Output() idEliminado = new EventEmitter<string>();

  @Output() ingresoSeleccionado = new EventEmitter<Ingresos>();

  servicio = inject(DbService);

eliminar(id: string) {
this.idEliminado.emit(id);
alert("Eliminando Registro.....");
}
editar(ing:Ingresos) {
this.ingresoSeleccionado.emit(ing);
}


  @Input() Ingresos:Ingresos[]=[];




}
