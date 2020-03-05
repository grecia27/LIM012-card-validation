const validator = {
  isValid: (creditCardNumberFinal) => {
    /*para transformar el array (split)*/
  const cardNumber = creditCardNumberFinal.split('').reverse();
  for (let i = 0; i < cardNumber.length; i++) {
      if (i % 2 == 1) { // ==igual que
          cardNumber[i] = cardNumber[i] * 2; //multiplicado*2
      }
  }
  /*join(''), para que los regrese sin nada entre los # */
  /*La función parseInt ()   analiza un argumento de cadena 
  y devuelve un número entero*/
  let newCard = cardNumber.join('').split('');
  let counter = 0;
  for (let i = 0; i < newCard.length; i++) {
      counter += parseInt(newCard[i]);
  }
  if (counter % 10 == 0) {
      return true;
  } else {
      return false;
  }
},
//poner * a los números//
maskify: (creditCardNumberFinal) => {
  /*para transformar el array (split)*/
  const cardNumber = creditCardNumberFinal.split('');
  for (let i = 0; i < cardNumber.length - 4; i++) {
      cardNumber[i] = '#';
  }
  return cardNumber.join('')
}}
export default validator;