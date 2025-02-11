import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Igastos } from '../../../../interfaces/igastos';
import { CommonModule } from '@angular/common';
import { FrmGastosComponent } from '../../../../Paginas/gastos/gastos.component';


@Component({
  selector: 'app-listado-gastos',
  imports: [CommonModule,],
  standalone:true,
  templateUrl: './listado-gastos.component.html',
  styleUrl: './listado-gastos.component.css'
})

  export class ListadoGastosComponent {
    @Input() gastos:Igastos[]=[];
    @Output() idEliminado = new EventEmitter<string>();

    @Output() gastoSeleccionado = new EventEmitter<Igastos>();



  eliminar(id: string) {
  this.idEliminado.emit(id);
  alert("Eliminando Registro.....");
  }
  editar(ing:Igastos) {
  this.gastoSeleccionado.emit(ing);
  }


    @Input() Ingresos:Igastos[]=[];


  }




