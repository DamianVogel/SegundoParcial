import { Injectable } from '@angular/core';
import { GenericoService} from '../servicios/generico.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AltaWebService {

  constructor(public _generico: GenericoService) { }

  public ServiceAltaWeb(datosLogin):Observable<any> {
    
    console.log("Altaweb" + datosLogin);
    
    return this._generico.httpPost("Sesion/AltaWeb",datosLogin)
        .pipe(data =>{return data;}); 

  }






}
