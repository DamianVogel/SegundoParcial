import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-seg-par',
  templateUrl: './usuario-seg-par.component.html',
  styleUrls: ['./usuario-seg-par.component.css']
})
export class UsuarioSegParComponent implements OnInit {

  perfil:any;


  constructor(
    
    
  
    ) { 
      this.perfil = JSON.parse(localStorage.getItem('usuario'));
      this.perfil = this.perfil['datos'].tipo;
      
    }

  ngOnInit() {
  }

}
