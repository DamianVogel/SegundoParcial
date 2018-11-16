import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-seg-par',
  templateUrl: './usuario-seg-par.component.html',
  styleUrls: ['./usuario-seg-par.component.css']
})
export class UsuarioSegParComponent implements OnInit {

  usuario:string;

  constructor() { }

  ngOnInit() {
  
    this.usuario = JSON.parse(localStorage.getItem('usuario'));

  }





}
