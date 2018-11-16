import { Injectable } from '@angular/core';
import { GenericoService} from '../servicios/generico.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public _generico: GenericoService) { }

  public ServiceLogin(datosLogin):Observable<any> {
    //console.log("entro LoginService" + datosLogin);
    
    return this._generico.httpPost("SegundoParcial/",datosLogin)
        .pipe(data =>{return data;}); 

  }








}
