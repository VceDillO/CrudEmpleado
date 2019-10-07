import { Component, OnInit } from '@angular/core';

import { EmpleadosService } from '../../services/empleados.service';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {

  empleado: any = [];

  constructor(private empleadosService:EmpleadosService) { }

  getEmpleados(){
    this.empleadosService.getEmpleados().subscribe(
      res => {
        this.empleado = res;
      },
      err => console.log(err)
    );
  }

  ngOnInit() {
    this.getEmpleados();
  }

  deleteEmpleado(id: string){
    this.empleadosService.deleteEmpleado(id).subscribe(
      res =>{
        console.log(res);
        this.getEmpleados();
      } 
    ),
    err => console.log(err)
  }

  editEmpleado(id: string){
    console.log(id);
    
  }

}
