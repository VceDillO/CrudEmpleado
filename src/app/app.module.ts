import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { EmpleadoFormComponent } from './components/empleado-form/empleado-form.component';
import { EmpleadoListComponent } from './components/empleado-list/empleado-list.component';
import { EmpleadoEditComponent } from './components/empleado-edit/empleado-edit.component';

import { EmpleadosService } from './services/empleados.service'


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    EmpleadoFormComponent,
    EmpleadoListComponent,
    EmpleadoEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    EmpleadosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
