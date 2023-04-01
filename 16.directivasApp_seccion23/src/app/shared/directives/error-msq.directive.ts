import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsqDirective implements OnInit, OnChanges{

  
  private _color: string = 'red';
  htmlElement: ElementRef<HTMLElement>;

  @Input() set color(valor: string) {

    this.htmlElement.nativeElement.style.color = valor;
    this._color = valor;
  }

  @Input() mensaje: string = 'Este campo es necesario'

  constructor(private el: ElementRef<HTMLElement>) {

    this.htmlElement = el;
   }
  ngOnChanges(changes: SimpleChanges): void {
    
    
  }

  ngOnInit(): void {
    this.setColor();
    this.cambiarMensaje();
  }

  setColor():void{
    this.htmlElement.nativeElement.style.color = this.color;
    this.htmlElement.nativeElement.className = 'form-text';
  }

  cambiarMensaje(){
    this.htmlElement.nativeElement.innerText = this.mensaje;
  }

}
