//Descuento buen fin.
//18% de descuento.

let precio= prompt("Ingresa el precio que deseas aplicarle el 18%");
const porce= 100;
let descuento = (parseInt (precio) / parseInt (porce) * 18); //porcerntaje
precioFinal= (precio-descuento);
alert("El precio del producto era de: " + precio +"  El precio de final aplicando un descuento del 18% es de: " + precioFinal);

//10% de descuento.

let precio2= prompt("Ingresa el precio que deseas aplicarle el 10%");
let descuento2 = (parseInt (precio2) / parseInt (porce) * 10); //porcerntaje
precioFinal2= (precio2-descuento2);
alert("El precio del producto era de: " + precio2 +"  El precio de final aplicando un descuento del 10% es de: " + precioFinal2);