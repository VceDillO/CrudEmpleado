import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empleado-form',
  templateUrl: './empleado-form.component.html',
  styleUrls: ['./empleado-form.component.css']
})
export class EmpleadoFormComponent implements OnInit {

  empleado: Empleado = {
    userId:1,
    id:null,
    title:'',
    body:''
  };

  constructor(private empleadoService: EmpleadosService, private router: Router) { }

  ngOnInit() {
  }

  saveNewEmpleado(){
    this.empleadoService.saveEmpleado(this.empleado).subscribe(
      res =>{
        console.log(res);
        this.router.navigate(['/empleado']);
      },
      err => console.log(err)
      
    )
  }

}
