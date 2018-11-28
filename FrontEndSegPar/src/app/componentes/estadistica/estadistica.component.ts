import { Component, OnInit } from '@angular/core';
import { AltaZapatoService } from '../../servicios/alta-zapato.service';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styleUrls: ['./estadistica.component.css']
})
export class EstadisticaComponent implements OnInit {

  locales: Array<any> = [1,2];
  listado:any;
  local1:any;

  constructor(private _web: AltaZapatoService) { 
    this._web.ServiceTraerZapatos().subscribe( data =>{
      this.listado = JSON.parse(data._body);
      console.log(this.listado);

    
      
    
    })
  }

  ngOnInit() {
  }

  ProdDif(){}

  ProdRep(){}

  ProdLocal(){
    this.listado.filter(zapatos => zapatos.localVta == 1);

    console.log(this.listado);

  }







}
