import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MachineTextService {

  constructor() { }

  textTomachineWrite(param, componente) {
    let textoArray = [];
    textoArray = param.split("");
    textoArray.forEach((letra, i) => {
      console.log("letra", letra);
      if (letra == "*") {
        letra = "<br>";
      }
      setTimeout(() => {
        componente.innerHTML += letra;
      }, 75 * i);
    });
  }
}
