import { Component, OnInit } from '@angular/core';
import { AltaZapatoService } from '../../servicios/alta-zapato.service';

@Component({
  selector: 'app-lista-zapatos',
  templateUrl: './lista-zapatos.component.html',
  styleUrls: ['./lista-zapatos.component.css']
})
export class ListaZapatosComponent implements OnInit {

  listado:any;

  constructor(private _web: AltaZapatoService) { 
    this._web.ServiceTraerZapatos().subscribe( data =>{
      this.listado = JSON.parse(data._body);
    })


  }


  ngOnInit() {
  }

}
