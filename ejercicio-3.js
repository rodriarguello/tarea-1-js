console.log("");
console.log("*****************************");
console.log("Ejercicio 3");
console.log("*****************************");


class Carrito{
    montoTotal;
    productos =[];
    constructor(montoTotal,nombreProducto,precioProducto=0,unidadesProducto=0){
        this.montoTotal = montoTotal;
        let productoInicial = new Producto(nombreProducto.toUpperCase());
        this.productos.push(productoInicial);
    }

    agregarProducto(nombre,precio,unidades){
        
        const arrayValidacion = this.productos.filter(el => el.nombre === nombre.toUpperCase());
        
        if(arrayValidacion.length != 0) {
            
            const productoExistente = arrayValidacion[0];
            
            return console.log(`Ya existe el producto "${productoExistente.nombre}" con ${productoExistente.unidades} unidades.`);
        } 
            
        
        this.montoTotal += precio*unidades;
        const nuevoProducto = new Producto(nombre.toUpperCase(),precio,unidades);
        this.productos.push(nuevoProducto);
    }
}

class Producto{
    
    nombre;
    precio;
    unidades;
    constructor(nombre,precio=0,unidades=0){
        this.nombre = nombre;
        this.precio = precio;
        this.unidades = unidades;
    }
}

let carrito = new Carrito(10,'Leche');




console.log(carrito);

carrito.agregarProducto("Azucar",5,2);

console.log(carrito);

carrito.agregarProducto("Azucar",5,2);

console.log(carrito);


