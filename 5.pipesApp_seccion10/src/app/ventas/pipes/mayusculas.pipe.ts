import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class  MayusculasPipe implements PipeTransform{

transform(valor: string, enMayusculas: boolean = true):string {
    // if(enMayusculas){
    //     return valor.toLocaleUpperCase();
    // } else {
    //     return valor.toLocaleLowerCase();
    // }
   return (enMayusculas) ? valor.toLocaleUpperCase() : valor.toLowerCase();
}

}