import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpleadoListComponent } from './components/empleado-list/empleado-list.component';
import { EmpleadoFormComponent } from './components/empleado-form/empleado-form.component';
import { EmpleadoEditComponent } from './components/empleado-edit/empleado-edit.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/empleado',
    pathMatch:'full'
  },
  {
    path:'empleado',
    component: EmpleadoListComponent
  },
  {
    path:'empleado/add',
    component:EmpleadoFormComponent
  },
  {
    path: 'empleado/edit/:id',
    component:EmpleadoEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
