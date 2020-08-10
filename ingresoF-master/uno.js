/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar() {
	let nombre;
	let edad;
	let sexo;
	let peso;
	let totalmujeres = 0;
	let edadpromedio;
	let maxpeso = 0;
	let contedad = 0;
	let flag = 0;
	let nombrehpeso;

	for (i = 1; i <= 5; i++) {

		nombre = prompt("ingrese nombre del paciente");
		while (!(isNaN(nombre))) {

			nombre = prompt("Error. ingrese nombre del paciente");

		}
		edad = parseInt(prompt("Ingrese la edad del paciente"));
		while (!(edad >= 0)) {

			edad = parseInt(prompt("Error.Ingrese la edad del paciente"));

		}
		sexo = prompt("Ingrese sexo del paciente");
		while (!(sexo == "f" || sexo == "m")) {

			sexo = prompt("Error. Ingrese sexo del paciente");
		}
		peso = parseInt(prompt("Ingrese el peso del paciente"));
		while (!(peso > 0)) {

			peso = parseInt(prompt("Error. Ingrese el peso del paciente"));
		}

		switch (sexo) {

			case "f":
				totalmujeres++;

				break;
			case "m":

				if (flag == 0 || maxpeso < peso) {
					flag++;
					nombrehpeso = nombre;
                   maxpeso=peso;
				}


		}


		contedad += edad;





	}

	edadpromedio = contedad / 5;

	console.log(`Total sexo femenino: ${totalmujeres}`);

	if (!(flag == 0)) {

		console.log(`Hombre con mas peso: ${nombrehpeso} con ${maxpeso}kg `);

	}
	console.log("El promedio total de edad es de: " + edadpromedio);
}
