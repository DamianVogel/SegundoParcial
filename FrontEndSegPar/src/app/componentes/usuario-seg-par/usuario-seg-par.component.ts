import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-seg-par',
  templateUrl: './usuario-seg-par.component.html',
  styleUrls: ['./usuario-seg-par.component.css']
})
export class UsuarioSegParComponent implements OnInit {

  perfil:any;


  constructor(
      public router: Router
    
  
    ) { 
      this.perfil = JSON.parse(localStorage.getItem('usuario'));
      this.perfil = this.perfil['datos'].tipo;

    }

  ngOnInit() {
  }


  Alta(opcion){
    switch(opcion){
      case 'estadistica':
        this.router.navigate(['Estadistica']);
      break;

      case 'base':
        this.router.navigate(['AltaBase']);
      break;

      case 'almacenamiento':
        this.router.navigate(['AltaAlmacenamiento']);
      break;
    
      case 'servicioweb':
        this.router.navigate(['AltaServicioWeb']);
      break;
    
    
    }




  }

}
