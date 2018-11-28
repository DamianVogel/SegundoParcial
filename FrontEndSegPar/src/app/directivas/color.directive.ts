import { Directive, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  @Input() tipo: string;


  constructor(private element : ElementRef, private renderer : Renderer) { }

  ngOnInit()
  {


    switch(this.tipo)
    {
      case "masculino": this.renderer.setElementStyle( this.element.nativeElement, 'color', 'yellow');
      break;
      case "fem": this.renderer.setElementStyle( this.element.nativeElement, 'color', 'red');
      break;
      case "masc": this.renderer.setElementStyle( this.element.nativeElement, 'color', 'grey');
      break;
 
    }
  }

}
