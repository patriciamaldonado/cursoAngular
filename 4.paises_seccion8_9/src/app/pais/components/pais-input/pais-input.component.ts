import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

 @Input() placeholder: string = ''; 
  
  //Subject es como un observable
  debouncer: Subject<string> = new EventEmitter();

  termino: string = '';
 
  constructor() { }
  
 

  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(300))// despues de 300 milesimas de segundo hace el subscribe
    .subscribe(valor => {
      console.log("debouncer", valor);
      this.onDebounce.emit(valor);
      
    })
  }

  buscar(){
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(){
   this.debouncer.next(this.termino);

    
    
  }

}
