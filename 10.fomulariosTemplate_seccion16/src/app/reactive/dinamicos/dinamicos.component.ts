import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {


  get favoritosArray() {
    return this.miFormulario.get('favoritos') as FormArray;
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }


  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Death Strange', Validators.required]
    ], Validators.required)
  })

  nuevoFavorito: FormControl = this.fb.control('', Validators.required);
  campoEsValido(campo: string) {
    return this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls.nombre.touched
  }

  agregarFavorito() {
    if (this.nuevoFavorito.invalid) {
      return;
    }

    //Se puede hacer de las dos formas de las dos siguientes lineas
    // this.favoritosArray.push(new FormControl(this.nuevoFavorito.value, Validators.required))
    this.favoritosArray.push(this.fb.control(this.nuevoFavorito.value, Validators.required))

    this.nuevoFavorito.reset();
  }

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset();

  }

  borrar(i : number){
    this.favoritosArray.removeAt(i);
  }
}
