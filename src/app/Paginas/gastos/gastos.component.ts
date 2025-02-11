import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { Igastos } from '../../interfaces/igastos';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-frm-gastos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './frm-gastos.component.html',
  styleUrls: ['./frm-gastos.component.css']
})
export class FrmGastosComponent implements OnChanges {
  @Input() GastosParaEditar: Igastos | null = null;
  @Output() GastosAgregado = new EventEmitter<Igastos>();
  @Output() editame = new EventEmitter<Igastos>();

  nuevoGasto: Igastos = {
    id: '',
    fecha: '',
    nombre: '',
    monto: 0,
    GastosId: '',
    descripcion: ''
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['GastosParaEditar'] && this.GastosParaEditar) {
      this.nuevoGasto = { ...this.GastosParaEditar };
    }
  }

  agregarGasto() {
    if (this.nuevoGasto.id === '') {
      this.GastosAgregado.emit({ ...this.nuevoGasto });
      alert('GASTO AGREGADO');
    } else {
      this.editame.emit({ ...this.nuevoGasto });
      this.GastosParaEditar = null;
    }
    this.limpiar();
  }

  limpiar() {
    this.nuevoGasto = { id: '', fecha: '', nombre: '', monto: 0, GastosId: '', descripcion: '' };
  }
}
