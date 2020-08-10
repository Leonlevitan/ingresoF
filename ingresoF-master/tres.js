/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar() {
	let sexotitular;
	let lugar;
	let temporada;
	let cantpersonas=0;
	let lugarmaselegido;
	let sexotitularmaspasaj;
	let seguir;
	let maxpasajeros=0;
	let bariloche=0;
	let cataratas=0;
	let salta=0;
	let flag=0;
	let cont=0;
	let personasinvierno=0;
	let promedio;
	do {

		sexotitular = prompt("Ingrese el sexo del titular.");

		while (!(sexotitular == "f" || sexotitular == "m")){

			sexotitular = prompt("Error.Ingrese el sexo del titular.");
		} 
		lugar=prompt("Ingrese lugar donde quiere viajar: bariloche, cataratas o salta.");
		
		while(!(lugar=="bariloche"|| lugar=="cataratas"|| lugar=="salta")){
		
		lugar=prompt("Error. Ingrese lugar donde quiere viajar: bariloche, cataratas o salta.");
	}
	temporada=prompt("Ingrese temporada en la que quiere viajar.");

	while(!(temporada=="otoño" || temporada=="verano" || temporada=="primavera" || temporada =="invierno" )){
	
		temporada=prompt("Error. Ingrese temporada en la que quiere viajar.");
	}
cantpersonas= parseInt(prompt("Ingrese la cantidad de personas que viajan"));

while(!(cantpersonas>0)){

	cantpersonas= parseInt(prompt("Error. Ingrese la cantidad de personas que viajan"));

}
switch(lugar)
{

case "bariloche":
	bariloche++;
	break;
	case "cataratas":
		cataratas++;
		break;
		case "salta":
			salta++;
			break;

}
if(flag==0 || maxpasajeros < cantpersonas){
flag++;
sexotitularmaspasaj=sexotitular;
maxpasajeros=cantpersonas;

}
if(temporada=="invierno"){
cont++;
personasinvierno+=cantpersonas;
}

seguir=prompt("quieres seguir ?");

} while (seguir == "s");


if(bariloche > cataratas && bariloche > salta){
	
	lugarmaselegido="bariloche";
	
}else if(cataratas>bariloche && cataratas > salta){
	
	lugarmaselegido="cataratas";
}
else{
	
	lugarmaselegido="salta";
	
}

promedio= personasinvierno / cont;
console.log("El sexo del titular que mas pasajeros lleva es: " +sexotitularmaspasaj);
console.log("El lugar mas elegido es: " +lugarmaselegido);
console.log("El promedio de pasajeros que viajan en invierno es: " +promedio );





}