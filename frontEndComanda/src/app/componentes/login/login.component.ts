import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {Usuario} from '../../clases/usuario'; 
import { LoginService } from 'src/app/servicios/login.service';

//import { AlertService, AuthenticationService } from '../_services';

@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    datacallback: string;

    constructor(
        private formBuilder: FormBuilder,
        //private route: ActivatedRoute,
        private router: Router,
        private _login: LoginService
        //private authenticationService: AuthenticationService,
        //private alertService: AlertService
        ) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // reset login status
        //this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;
        this.loading = true;
        
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
       
        let datosLogin = new Usuario(this.f.username.value, this.f.password.value);

        



        this._login.ServiceLogin(datosLogin).subscribe( data =>{
            
            console.log(data._body);
            
            
            if(data._body)
            {
                localStorage.setItem('usuario',data._body);
            //console.log(data._body);
            //localStorage.setItem('token', data._body.token);
            
                this.router.navigate(['/SegPar']); 
            }
            else{
                alert("El usuario no existe");
                this.submitted = false;
                this.loading = false;
            }


        })

        /*
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
        */
      }


    Registrar(){
        this.router.navigateByUrl("/Registro");

    }

    LoginProf(){

        //let datosLogin = new Usuario('pro', '1234');

        this.loginForm = this.formBuilder.group({
            username: ['pro', Validators.required],
            password: ['1234', Validators.required]
        });

        /*
        this._login.ServiceLogin(datosLogin).subscribe( data =>{            
            
            localStorage.setItem('usuario',data._body);
            //console.log(data._body);
            //localStorage.setItem('token', data._body.token);            
            this.router.navigate(['/SegPar']); 

        });
        */
    }

    LoginNor(){

        let datosLogin = new Usuario('normal', '1234');

        this.loginForm = this.formBuilder.group({
            username: ['normal', Validators.required],
            password: ['1234', Validators.required]
        });

        /*
        this._login.ServiceLogin(datosLogin).subscribe( data =>{            
            
            localStorage.setItem('usuario',data._body);
            //console.log(data._body);
            //localStorage.setItem('token', data._body.token);            
            this.router.navigate(['/SegPar']); 

        });
        */
    }

    LoginFree(){

        let datosLogin = new Usuario('gratis', '1234');

        this.loginForm = this.formBuilder.group({
            username: ['gratis', Validators.required],
            password: ['1234', Validators.required]
        });

        /*
        this._login.ServiceLogin(datosLogin).subscribe( data =>{            
            
            localStorage.setItem('usuario',data._body);
            //console.log(data._body);
            //localStorage.setItem('token', data._body.token);            
            this.router.navigate(['/SegPar']); 

        });
        */
    }


}
