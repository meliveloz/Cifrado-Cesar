## Pseudocódigo problema código Cesar.
+ Usuario elige 1 cifrar, 2 decifrar 


##### Función cipher
+ DO prompt ingresar frase
- WHILE inpunt  = "" o  parseint input
+ Crear function cipher (phrase)
+ Declarar var result="" 
+ PARA i=0 recorrer extensión de phrase de uno en uno
	- Hacer variable "numberletter" igual a formula (x-65+33)%26+65
	- Remplazar x = phrase.charCodeAt(i)
	- aplicar string.fromcharcodeat a variable numberLetter y guardar en letter.
	- result será igual a result más letter 
+ retornar result
+ Llamar función cipher (input).

##### Función decipher
+ DO prompt ingresar frase
- WHILE inpunt  = "" o  parseint inputDecipher
+ Crear function decipher (phrase)
+ Declarar var result="" 
+ PARA i=0 recorrer extensión de phrase de uno en uno
	- Hacer variable "originNumber" igual a formula (x-65-7+52)%26+65
	- Remplazar x = phrase.charCodeAt(i)
	- aplicar string.fromcharcodeat a variable originNumber y guardar en originLetter.
	- result será igual a result + originLetter
+ retornar result
+ Llamar función decipher (inputDecipher).




#### Link Diagrama de flujo
[Enlace diagrama de flujo](https://go.gliffy.com/go/share/shjm2l86omaedlo3s9wo)