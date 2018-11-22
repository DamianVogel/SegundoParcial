import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {Servicio} from '../../clases/servicio'; 
import { LoginService } from 'src/app/servicios/login.service';
import { AltaWebService } from '../../servicios/alta-web.service';



@Component({
  selector: 'app-alta-servicio-web',
  templateUrl: './alta-servicio-web.component.html',
  styleUrls: ['./alta-servicio-web.component.css']
})
export class AltaServicioWebComponent implements OnInit {

      loginForm: FormGroup;
      loading = false;
      submitted = false;
      returnUrl: string;
      datacallback: string;
  
      constructor(
          private formBuilder: FormBuilder,
          //private route: ActivatedRoute,
          private router: Router,
          private _web: AltaWebService
          //private authenticationService: AuthenticationService,
          //private alertService: AlertService
          ) {}
  
      ngOnInit() {
          this.loginForm = this.formBuilder.group({
              webname: ['', Validators.required],
              megas: ['', Validators.required]
          });

      }
  
      get f() { return this.loginForm.controls; }
  
      onSubmit() {
          this.submitted = true;
          this.loading = true;
          
          // stop here if form is invalid
          if (this.loginForm.invalid) {
              return;
          }
         
          let idusuario: any = JSON.parse(localStorage.getItem('usuario'));
          idusuario = idusuario['datos'].id;

          //console.log(idusuario);

          let datosLogin = new Servicio(idusuario,this.f.webname.value, this.f.megas.value);
  
          console.log(datosLogin);
  
          this._web.ServiceAltaWeb(datosLogin).subscribe( data =>{
              console.log(data._body);        
          });
  
  }
}
  