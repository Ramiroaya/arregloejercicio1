let btnEnviar1 = <HTMLButtonElement>document.getElementById("btnEnviar1");

btnEnviar1.addEventListener("click", () => {
  let tamañoArreglo = Number(prompt("Ingrese el tamaño del arreglo"));
  let num: number[] = new Array(tamañoArreglo);
  let indice: number;

  for (indice = 0; indice < tamañoArreglo; indice++) {
    num[indice] = Number(prompt("Ingrese el valor del indice" + indice));
    console.log("El numero en el indice " + indice + "  es:  " + num[indice]);
  }
});
