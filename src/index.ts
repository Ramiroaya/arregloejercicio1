let btnEnviar1 = <HTMLButtonElement>document.getElementById("btnEnviar1");

btnEnviar1.addEventListener("click", () => {
  let num: number[] = Array(7);
  num[0]=20;
  num[1]=14;
  num[2]=8;
  num[3]=0;
  num[4]=5;
  num[5]=19;
  num[6]=24;
  
  let indice: number;

  for (indice = 0; indice < num.length; indice++) {
     console.log("El numero en el indice " + indice + "  es:  " + num[indice]);
  }
});
