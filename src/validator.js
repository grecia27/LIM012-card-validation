const numerotarjeta2 = ("4137894711755904");
let reverse = Array.from(numerotarjeta2); //array.from= crea una nueva instancia de Array
// me separa en digitos los numeros en string (pone comas a cada elemento del str)
console.log(reverse);
// paso los digitos str a digitos numeros
let finalreverse = []; // array vacio para crear mi nuevo array
// recorro los elementos de mi array para que sean transformados en numeros
for (let i = 0; i < reverse.length; i++) {
      finalreverse.push(parseInt(reverse[i]));
      // a cada valor de i lo transformo en numero, y lo pongo a finalreverse
      console.log(finalreverse);
      }
//se reversa el #
let reverse2 = finalreverse.reverse();
   console.log(reverse2) ; // [4095571174987314]

//  ubico los numeros en posicion par
  for (let i = 0 ; i < reverse2.length; i += 2) {
  console.log(reverse2);
//se multiplan por 2
    let doubleNum = reverse2[i] * 2;
}