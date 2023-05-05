console.log("");
console.log("*****************************");
console.log("Ejercicio 1");
console.log("*****************************");


function piramide(numero){
    
    if(isNaN(numero)) return console.log("Debe ingresar un numero");
    
    if (numero<1) return console.log("El número debe ser mayor a 0");
    
    let cadena="";

    for (let i = 1; i <= numero; i++) {
        cadena += i;
        console.log(cadena); 
    }
}

piramide(3);
piramide(6);

