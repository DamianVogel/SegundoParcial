import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mostrarmb'
})
export class MostrarmbPipe implements PipeTransform {

  transform(megas: any, args?: any): any {
    return megas + 'MB';
  }

}
