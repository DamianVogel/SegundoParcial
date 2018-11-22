import { Component, OnInit } from '@angular/core';
import { AltaWebService } from '../../servicios/alta-web.service';

@Component({
  selector: 'app-listaweb',
  templateUrl: './listaweb.component.html',
  styleUrls: ['./listaweb.component.css']
})
export class ListawebComponent implements OnInit {

  listado:any;

  constructor(private _web: AltaWebService) { 
    this._web.ServiceTraerWeb().subscribe( data =>{
      this.listado = JSON.parse(data._body);
    })

  }

  ngOnInit() {
  }




}
