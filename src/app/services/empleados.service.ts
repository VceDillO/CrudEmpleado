import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Empleado } from '../models/empleado';


@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  API_URI = 'https://jsonplaceholder.typicode.com'

  constructor(private http: HttpClient) { }

  getEmpleados(){
    return this.http.get(`${this.API_URI}/posts?userId=1`);
  }

  getEmpleadoKey(id:string){
    return this.http.get(`${this.API_URI}/posts/${id}`);
  }

  saveEmpleado(empleado:Empleado){
    return this.http.post(`${this.API_URI}/posts`,empleado);
  }

  deleteEmpleado(id:string){
    return this.http.delete(`${this.API_URI}/posts/${id}`);
  }

  updateEmpleado(id: string|number, upEmpleado:Empleado){
    return this.http.put(`${this.API_URI}/posts/${id}`,upEmpleado);
  }

}

