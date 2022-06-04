let nombre = prompt("ingrese su nombre");
let opc;
console.log("Bienvenido ", nombre);

while (opc != 6) {
    
    alert ("ingrese \n 1. Bananos \n 2 Peras \n 3 Manzanas \n 4 Uvas \n 5 Papayas \n 6 Salir");
    opc = parseInt(prompt("Ingrese su opcion"));

    switch(opc){
    
        case 1:
        let cantidadb = prompt("Cuantos bananos desea: ");
        let costob = parseFloat(prompt("Ingrese su costo"));
        let totalb = costob * cantidadb;
        console.log("Bananos \n","Su costo en unidad son de" , costob , "\n La cantidad de bananos en unidad es de: ", cantidadb ,  "\n su costo es de " ,totalb);
        break;
    
        case 2:
        let cantidadp = prompt("Cuantas peras desea: ");
        let costop = parseFloat(prompt("Ingrese su costo"));
        let totalp = costop * cantidadp;
        console.log("Peras \n","Su costo en unidad son de" , costop , "\n La cantidad de peras en unidad es de: ", cantidadp ,  "\n su costo es de " ,totalp);
        break;

        case 3:
        let cantidadm = prompt("Cuantas manzanas desea: ");
        let costom = parseFloat(prompt("Ingrese su costo"));
        let totalm = costom *cantidadm;
        console.log("Manzanas \n", "Su costo en unidad son de" , costom , "\n La cantidad de manzanas en unidad es de: ", cantidadm ,  "\n su costo es de " ,totalm);

        case 4:
        let cantidadu = prompt("Cuantas uvas desea: ");
        let costou = parseFloat(prompt("Ingrese su costo"));
        let totalu = costou * cantidadu;
        console.log("Uvas \n","Su costo en unidad son de", costou, "\n La cantidad de uvas en unidad es de: ",  cantidadu , "\n su costo es de ", totalu);
        break;

        case 5:
        let cantidadpa = prompt("Cuantas papayas desea: ");
        let costopa = parseFloat(prompt("Ingrese su costo"));
        let totalpa = costopa * cantidadpa;
        console.log("Papayas \n", "Su costos en unidad son de", costopa, "\n La cantidad de papayas en unidad es de: ", cantidadpa, "\n su costo es de ", totalpa);
        break;

        case 6:
        console.log("Se acabo");
        break;

        default:
        console.log("Opcion no valida por favor digite lo establecido en el tablero");
        break
    }
} 
