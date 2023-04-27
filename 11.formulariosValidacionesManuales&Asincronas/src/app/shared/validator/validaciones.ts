import { FormControl } from "@angular/forms";

export const nomApePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


// Para transformar el metodo a una funcion lo hacemos con export y poder usarlo en otros componentes
// el igual y funcion de flecha
export const usernameValidator = (control: FormControl) =>{
  const valor: string = control.value?.trim().toLowerCase();
  if(valor === 'pepino'){
    return {
      validacionIncorrecta: true,
    }
  }
  // Cuando devolvemos null en una validación significa que ha ido bien
  return null;
  console.log(valor);
  
}
// TODO esto es mejor hacerlo como un servicio, ver archivo validator.service.ts