import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Zapato } from '../../clases/zapato';

import { AltaZapatoService } from '../../servicios/alta-zapato.service';


@Component({
  selector: 'app-alta-zapato',
  templateUrl: './alta-zapato.component.html',
  styleUrls: ['./alta-zapato.component.css']
})
export class AltaZapatoComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  datacallback: string;

  constructor(
      private formBuilder: FormBuilder,
     
      private router: Router,
      private _web: AltaZapatoService
     
      ) {}

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          codMod: ['', Validators.required],
          nombre: ['', Validators.required],
          fecing: ['', Validators.required],
          local: ['', Validators.required],
          precio: ['', Validators.required],
          genero: ['', Validators.required]
      
      
      
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
     
      // let idusuario: any = JSON.parse(localStorage.getItem('usuario'));
      // idusuario = idusuario['datos'].id;

      //console.log(idusuario);

      let datosLogin = new Zapato(
                                    this.f.codMod.value,
                                    this.f.nombre.value, 
                                    this.f.fecing.value,
                                    this.f.local.value,
                                    this.f.precio.value,
                                    this.f.genero.value

                                   );

      console.log(datosLogin);

      this._web.ServiceAltaZapato(datosLogin).subscribe( data =>{
          console.log(data._body);        
      
      
      
      });

  }
}
