

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Igastos } from '../../../interfaces/igastos';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-frm-gastos',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './frm-ingresos.component.html',
  styleUrl: './frm-ingresos.component.css'
})
export class FrmGastosComponent {
  @Input() gastoParaEditar:Igastos|null = null;

  @Output() ingresoAgregado = new EventEmitter<Igastos>();
  @Output() editame = new EventEmitter<Igastos>();



  ingresos:Igastos[]=[];

  nuevoingreso:Igastos={
    id: "", nombre: "", fecha: "", monto: 0,
    GastosId: '',
    descripcion: ''
  };
  nuevogasto: any;
  GastoAgregado: any;
  GastosParaEditar: null | undefined;
  gastos: any;
  gasto: any;

  ngOnChanges(){
    if(this.gastoParaEditar){
      this.nuevoingreso = {...this.gastoParaEditar};
    }
  }

  agregaGasto(){
    if(this.nuevogasto.id==""){
      this.GastoAgregado.emit({...this.nuevogasto});
      alert("GASTO AGREGADO");
    }else{
      this.editame.emit({...this.nuevogasto});
      this.GastosParaEditar =null;
    }
      this.limpiar();
  }

  limpiar(){
    this.nuevogasto.id="";
    this.nuevogasto.nombre="";
    this.nuevogasto.fecha="";
    this.nuevogasto.monto=0;
  }
  editar(id:string):void{
    const aux = this.gasto.find((item: { id: string; })=>item.id==id);
    if(aux){
      this.nuevogasto={...aux};
    }
  }
  eliminar(id:string){
    this.gastos = this.gastos.filter((item: { id: string; })=>item.id!==id);

  }
}
