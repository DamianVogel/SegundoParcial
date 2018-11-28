import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroLocal'
})
export class FiltroLocalPipe implements PipeTransform {

  transform(zapatos: Array<any>, local?: any): any {
    if(local)
    {
      return zapatos.filter(zapato => zapato.localVenta == local);
    }
    else
    {
      return zapatos;
    }
   
  }

}
