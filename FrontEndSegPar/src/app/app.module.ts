import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { LoginService } from './servicios/login.service';
import { GenericoService } from './servicios/generico.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '' , component: LoginComponent}
      ,{path: 'Login' , component: LoginComponent}
      //,{path: 'Registro' , component: RegistroComponent}
      //,{path: 'Side' , component: SidenavComponent, canActivate: [VerificarJWTService]}
      //,{path: 'Reporte' , component: ReporteHighchartComponent}
      //,{path: 'SegPar' , component: UsuarioSegParComponent}
    ]),
  ],
  providers: [
      LoginService,
      GenericoService
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
