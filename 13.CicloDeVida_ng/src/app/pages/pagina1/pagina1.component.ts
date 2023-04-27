import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit, OnChanges,
  DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  nombre: string = "Pepito";
  segundos: number = 0;
  timerSubscription!: Subscription;

  constructor() {
    console.log("constructor pag1");
  }

  ngDoCheck(): void {
    console.log("ngDoCheck - Se ejecuta antes de los cambios")
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit -")
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked - Se ejecuta cuando se hacen los cambios y se verifica ")
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
    this.timerSubscription.unsubscribe();
    console.log("timer limpiado");
    

  }

  ngOnInit(): void {
    console.log("ngOninit pag 1");
    this.timerSubscription = interval(1000).subscribe(i => { 
      console.log(i);
      this.segundos = i;
    }
    )

  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  guardar() {
    console.log("guardar");

  }

}
