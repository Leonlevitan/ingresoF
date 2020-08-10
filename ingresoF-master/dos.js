/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar() {
  let marca;
  let precio;
  let peso;
  let tipo;
  let pesototal = 0;
  let liqcaro = 0;
  let solbarato = 0;
  let seguir;
  let marcaliqcaro="no se ingreso producto liquido";
  let marcasolbarato="no se ingreso producto solido";
  let flagliq=0;
  let flagsol=0;
  do {

    marca = prompt("Ingrese marca del producto");
    while (!(isNaN(marca))) {

      marca = prompt("Error. Ingrese marca del producto");
    }
    precio = parseInt(prompt("Ingrese el precio"));
    while (!(precio > 0)) {

      precio = parseInt(prompt("Error.Ingrese el precio"));

    }
    peso = parseFloat(prompt("Ingrese el peso del producto"));
    while (!(peso > 0)) {
      peso = parseFloat(prompt("Error. Ingrese el peso del producto"));
    }
    tipo = prompt("Ingrese el tipo de producto: solido o liquido.");
    while (!(tipo == "solido" || tipo == "liquido")) {

      tipo = prompt("Error. Ingrese el tipo de producto: solido o liquido.");

    }

    switch (tipo) {

      case "liquido":

        if (flagliq==0 || liqcaro < precio) {

          marcaliqcaro = marca;
          liqcaro = precio;
        flagliq++
        }
        break;

      case "solido":
        if (flagsol==0 || solbarato > precio) {

          marcasolbarato = marca;
          solbarato = precio;
        flagsol++;
        }
        break;

    }








    pesototal += peso;

    seguir = prompt("Quiere seguir comprando ?");
  } while (seguir == "s");


  console.log("El peso total de la compra es: " + pesototal);
  console.log("Marca mas costosa de los liquidos: " + marcaliqcaro);
  console.log("Marca mas barata de los solidos: " + marcasolbarato);



}
