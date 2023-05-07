console.log("");
console.log("*****************************");
console.log("Ejercicio 2");
console.log("*****************************");


//Recorriendo los 2 array con for y comparando uno por uno

function elementosEnComun(array1, array2){
    const nuevoArray = [];
    
    for (let i = 0; i < array1.length; i++) {
        
        for (let j = 0; j < array2.length; j++) {
            if(array1[i] == array2[j]){
                if(nuevoArray.includes(array2[j])){
                    continue;
                }
                nuevoArray.push(array2[j]);
            }
        }
    }

    return nuevoArray;
}

//Usando el metodo Filter

function elementosEnComunFilter(array1,array2){

    const nuevoArray = array1.filter(el => array2.includes(el));

    const nuevoSet = new Set(nuevoArray);

    const arraySinDuplicados = [...nuevoSet];
    
    return arraySinDuplicados;
}


let primerArray = ['rojo', 'azul', 'amarillo'];

let segundoArray = ['blanco', 'negro', 'rojo'] ;

let nuevoArray = elementosEnComun(primerArray,segundoArray);

let nuevoArrayFilter = elementosEnComunFilter(primerArray,segundoArray);


console.log("Usando función 'elementosEnComun'");
console.log(nuevoArray);


console.log("Usando función 'elementosEnComunFilter'");
console.log(nuevoArrayFilter);


primerArray = [4, 3, true, 'manzana'];

segundoArray = ['pera', 3, false, true, 3, true];

nuevoArray = elementosEnComun(primerArray,segundoArray);

nuevoArrayFilter = elementosEnComunFilter(primerArray,segundoArray);

console.log("Usando función 'elementosEnComun'");
console.log(nuevoArray);


console.log("Usando función 'elementosEnComunFilter'");
console.log(nuevoArrayFilter);