

//_____________________________________FUNCIÓN PARA CIFRAR__________________________________________________________
  

  var cipher=function(phrase){ //el parámetro de mi funcón va a ser la frase que me entregue el usuario.
  phrase=phrase.toUpperCase(); //convierto la frase a mayúscula .

  var result=""; //voy a guardar mi nuevo string en esta variable vacia.

for (var i=0;i<phrase.length;i++){ //aplico un for que recorra la frase del usuario

  var numberLetter=(phrase.charCodeAt(i)-65+33)%26+65; // charCodeAt me dará el número de mi letra en ASCII por cada iteración, 
  //con este numero puedo aplicar la fórmula.
  //mi variable numberLetter entregará el numero en ASCII de mi letra que se encontrará en la posición 33.

  var letter=String.fromCharCode(numberLetter); //al numero que me devuelve mi variable "numberLetter",
  // aplico el String.fromCharCode para saber la letra a la que se refiere.

  result+=letter; //finalmente voy agregardo a mi variable result la letra por cada iteración de mi for.

}
return result; //le dejo saber a mi usuario su nuevo mensaje cifrado a traves de un mensaje en la página.
}

//_________________________________FUNCIÓN PARA DECIFRAR_____________________________________________________________

  var decipher=function(phrase){                      
  phrase=phrase.toUpperCase();
  
  var result="";

for(var i=0;i<phrase.length;i++){

  var originNumber=(phrase.charCodeAt(i)-65-7+52)%26+65; //misma función anterior, pero nos devolvemos para encontrar nuestra letra original

  var originLetter=String.fromCharCode(originNumber);

    result+=originLetter;

}
return result;
}

//_______________________________________PROMPT USUARIOS_____________________________________________________________


var choose=prompt("Ingrese 1 para codificar/Ingrese 2 para decifrar");
if (choose ==="1"){

do{ 
var input=prompt("Ingrese la frase a codificar");} /* esto quiere decir que se ejecutará el prompt
MIENTRAS el input se encuentre vacio o el input sean numeros*/
while (input==="" || parseInt(input) ) 
  
 document.write("Su frase codificada es "+ cipher(input));}
else {
  do{ 

var inputDecipher=prompt("Ingrese la frase a decifrar");} /* esto quiere decir que se ejecutará el prompt
MIENTRAS el input se encuentre vacio o el input sean numeros*/
while (inputDecipher==="" || parseInt(inputDecipher) )
  document.write("Su frase decifrada es " + decipher(inputDecipher));

}










