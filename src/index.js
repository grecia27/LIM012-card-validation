import validator from './validator.js';

//declaración
const resultado = document.getElementById('resultados');
const submit = document. getElementById('submit');
const respuesta = documento. getElementById('respuesta');
const mensaje = document.getElementById('mensaje');
const messagefinal = document. getElementById('messagefinal');

//  datos del formulario
/*se llama al evento :
formula: elemento_que_escucha.addEventListener('evento', funcion_a_ejecutar);*/

/*boton de enviar el formulario*/
submit.addEventListener('click', () => {
  const numcreditcard= document.getElementById('numcreditcard')
  const creditCardNumberFinal = numcreditcard.value;
  if (!creditCardNumberFinal) {
    alert('Ingresar Número de Tarjeta');
    return
  } else if (creditCardNumberFinal.length < 16) {
    alert('Completar números');
    return;
  }

  //ocultar pag 2
  const contenedor2 = document.getElementById('messagefinal');
  const messagefinal = document.getElementById('contenedor2');
  contenedor2.style.display = 'none';

  //# de tc oculto
  const cardValid = validator.isValid('creditCardNumberFinal');
  const NumberOculto = validator.maskify('creditCardNumberFinal');
  const hiddenCard = document.getElementById('hiddenCard');
  const message = document.getElementById('message');

  if (cardValid === true) {
    hiddenCard.innerText = '${NumberOculto}';
    message.innerText = 'Tarjeta valida';
    btnRestart.value = 'Verificar otra tarjeta';
  } else {
    hiddenCard.innerText = '${NumberOculto}';
    message.innerText = 'No es válido, por favor verifique';
    respuesta.value = 'Verificar nuevamente';
  }
});
console.log(cardValid);
