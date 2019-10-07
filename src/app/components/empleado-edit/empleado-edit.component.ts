import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-empleado-edit',
  templateUrl: './empleado-edit.component.html',
  styleUrls: ['./empleado-edit.component.css']
})
export class EmpleadoEditComponent implements OnInit {

  empleado: Empleado = {
    userId:1,
    id:null,
    title:'',
    body:''
  };

  constructor(private empleadoService: EmpleadosService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    this.empleadoService.getEmpleadoKey(params.id).subscribe(
      res => {
        console.log(res);
        this.empleado = res;
      },
      err => console.log(err)
      
    )
  }

  updateEmpleado(){
    this.empleadoService.updateEmpleado(this.empleado.id,this.empleado).subscribe(
      res =>{
        console.log(res);
        this.router.navigate(['/empleado'])
      },
      err => console.log(err)
      
    )
  }

}
