import { Injectable } from '@angular/core';
import { GenericoService} from '../servicios/generico.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AltaZapatoService {

  constructor(public _generico: GenericoService) { }



  public ServiceAltaZapato(datosLogin):Observable<any> {
    
    console.log("Service Alta Zapato y los datos son: " + datosLogin);
    
    return this._generico.httpPost("Sesion/ZapatoAlta",datosLogin)
        .pipe(data =>{return data;}); 

  }

  public ServiceTraerZapatos():Observable<any>{

    return this._generico.httpGet("Sesion/TodosZapatos")
    .pipe(data =>{return data;}); 

  }








}
