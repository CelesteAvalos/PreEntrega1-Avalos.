//pagos de sueldos para PreEntega

// simulador de pagos de sueldos

let nombreUser;
let nombreEmpleado;
let valorHora;
let cantidadHora;
let total = 0; 
let recibo;
let opcion;

function saludar() {
    alert ("Hola Bienvenido al Sector de pagos!")
}

function totalRecibo (total, cantidadHora, valorHora) {
     return total + cantidadHora * valorHora
}
saludar ();

alert(`Pagos a trabajadores!!!`);
nombreUser = prompt("Nombre De Encargado");


do {
     // va el nombre del empleado y valor horario
     nombreEmpleado = prompt("ingrese el nombre del Empleado");
     valorHora = Number(prompt("ingrese el valor de la hora trabajada"));

     while (valorHora < 0) {
        valorHora = Number(prompt(`Precio invalido, ingrese otro`));
     }

     cantidadHora = parseInt(prompt("Ingrese cantidad de horas trabajadas"));

     while (cantidadHora <= 0) {
        cantidadHora = parseInt(prompt(`Cantidad invalida, ingrese otra`));
     }
     recibo = recibo + `nombre del empleado: ${nombreEmpleado} \n valor de la hora: $${valorHora} 
     \n cantidad de horas: ${cantidadHora} \n subtotal: $${cantidadHora * valorHora} \n\n`
     total = total + cantidadHora * valorHora;

     opcion = prompt("agregar otro Empleado?");

} while(opcion == `si`);

alert(`${recibo} El total de sueldo a liquidar ${nombreUser} es de: $${total}`);

totalRecibo (total, cantidadHora, valorHora);


alert("Adios\n\n\n hasta la proxima semana\n\n")