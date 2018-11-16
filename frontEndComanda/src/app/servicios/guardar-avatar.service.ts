import { Injectable } from '@angular/core';
import { GenericoService} from '../servicios/generico.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardarAvatarService {

  constructor(public _generico: GenericoService) { }

  public GuardarAvatarService(avatar):Observable<any> {

    let datos = JSON.parse(localStorage.getItem('usuario'));
    
    let id = datos.datos.idEmpleado;
    let token = datos.token; 

    

    //let datosEnvia = new Object();
    let datosEnvia = new Array();
    datosEnvia = [{'id':id},{'avatar':avatar},{'token':token}];

    console.log(datosEnvia);

    return this._generico.httpPostHeader("Sesion/CambiarAvatar",datosEnvia) 
    .pipe(data =>{return data;}); 

  }







}
