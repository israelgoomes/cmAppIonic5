import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  textTomachineWrite(param, componente) {
    let textoArray = [];
    textoArray = param.split('');
    textoArray.forEach((letra, i) => {
      if (letra == '*') {
        letra = '<br>';
      }
      setTimeout(() => {
        componente.innerHTML += letra;
      }, 75 * i);
    });
  }

  iniciais(param): string {
  let split = [];
  split = param.toString().split(' ');
  if (split.length > 1) {
    return this.iniciais =
      split[0].split('')[0].toUpperCase() +
      split[1].split('')[0].toUpperCase();
  } 
    return this.iniciais = split[0].split('')[0];
}

populaColor(){
  return [ "black",
  "black",
  "black",
  "black",
  "blue",
  "black",
  "black",
  "black",
  "blue",
  "black",
  "blue"]
}

populaColorOption(){
  return ["blue", "orange", "white", "purple", "pink", "green"]
}

}
