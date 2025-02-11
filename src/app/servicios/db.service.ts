
import { Injectable, signal } from '@angular/core';
import { Ingresos } from '../interfaces/ingresos';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private static ingresos = signal<Ingresos[]>([]);


  constructor() { }
  getIngresos():Ingresos[]{
    return DbService.ingresos();
  }

  agregarIngreso(ingreso:Ingresos){
    const id = DbService.ingresos().length ? (Math.max(...DbService.ingresos().map(i=> parseInt(i.id)))+1).toString():"1";
    const aux = {...ingreso,id};
    const aux2 = [...DbService.ingresos(),aux];
    DbService.ingresos.set(aux2);
  }

  eliminar(id:string){
    const aux = DbService.ingresos().filter(i=>i.id!==id);
    DbService.ingresos.set(aux);
  }
  actualizarIngreso(ingreso:Ingresos){
    const aux = DbService.ingresos().map((ing)=>ing.id==ingreso.id ? ingreso : ing);
    DbService.ingresos.set(aux);
  }


}


