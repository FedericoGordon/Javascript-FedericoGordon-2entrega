function SaludoNombre() {
    alert("Bienvenidos a Gravedad showroom \nVenta de equipos de sonido e iluminacion");
    let nombre = prompt("Para continuar ingrese su nombre");
    console.log(nombre);
    while (nombre === "") {
        alert("Por favor, ingrese un nombre para continuar")
        nombre = prompt("ingrese su nombre")
    }
    alert("Bienvenido " + nombre);
    return nombre;
    console.log(nombre);
}

function Seguir() {
    let respuesta = prompt("Por el momento solo tenemos stock en consolas de audio \nDesea continuar? \nIngrese si para ver los productos en stock");
    const aceptar = "si";
    if (respuesta !== aceptar) {
        alert("muchas gracias por su visita!");
    } else {
        Filtro();
    }
}

class Producto {
    constructor(codigo, marca, modelo, canales, precio) {
        this.codigo = codigo;
        this.marca = marca;
        this.modelo = modelo;
        this.canales = canales;
        this.precio = precio;
    }
}

const yamaha2 = new Producto(1, "Yamaha", "mg06", 2, 89900);
const yamaha6 = new Producto(2, "Yamaha", "mg12", 6, 295000);
const yamaha16 = new Producto(3, "Yamaha", "mg20", 16, 439000);
const behringer1 = new Producto(4, "Behringer", "Xenix 502", 1, 48100);
const behringer2 = new Producto(5, "Behringer", "Xenix 802", 2, 73900);
const behringer6 = new Producto(6, "Behringer", "Xenix 1222", 6, 223400);
const behringer32 = new Producto(7, "Behringer", "Sx 3242fx", 32, 621400);
const behringer24 = new Producto(8, "Behringer", "Sx 2442fx", 24, 512900);
const apogee6 = new Producto(9, "Apogee", "Alive", 6, 46500);
const onax12 = new Producto(10, "Onax pro", "Hs12", 12, 84990);
const onax8 = new Producto(11, "Onax pro", "Mix 8", 8, 62400);
const soundcraft22 = new Producto(12, "Soundcraft", "Signatura 22", 22, 489600);
const phonic16 = new Producto(13, "Phonic", "Helixboard", 16, 513400);
const phonic32 = new Producto(14, "Phonic", "Am 3242fx", 32, 584200);
const allen32 = new Producto(15, "Allen&heath", "Zed 436", 32, 1648390);


let Productos = [yamaha2, yamaha6, yamaha16, behringer1, behringer2, behringer6, behringer24, behringer32, apogee6, onax8, onax12, soundcraft22, phonic16, phonic32, allen32];

function PrecioMinimo() {
    let preguntaMinino = parseInt(prompt("Cuanto es lo maximo que desea pagar?"))
    const PreguntaMinimoPrecio = Productos.filter(producto => producto.precio > preguntaMinino);
    console.log(PreguntaMinimoPrecio);
    PreguntaMinimoPrecio.forEach(elementos => {
        alert("Codigo: " + elementos.codigo + "\nMarca: " + elementos.marca + "\nModelo: " + elementos.modelo + "\nCanales: " + elementos.canales + "\nPrecio $" + elementos.precio);
    })
}

function PrecioMaximo() {
    let preguntaMaximo = parseInt(prompt("Cuanto desea gastar?"))
    const PreguntaMaximoPrecio = Productos.filter(producto => producto.precio < preguntaMaximo);
    console.log(PreguntaMaximoPrecio);
    PreguntaMaximoPrecio.forEach(elementos => {
        alert("Codigo: " + elementos.codigo + "\nMarca: " + elementos.marca + "\nModelo: " + elementos.modelo + "\nCanales: " + elementos.canales + "\nPrecio $" + elementos.precio);
    })
}

function CanalesMinimo() {
    let canalesMinimos = parseInt(prompt("Cuantos canales como minimo necesita?"));
    const PreguntaCanalesMinimos = Productos.filter(producto => producto.canales >= canalesMinimos);
    console.log(PreguntaCanalesMinimos);
    PreguntaCanalesMinimos.forEach(elementos => {
        alert("Codigo: " + elementos.codigo + "\nMarca: " + elementos.marca + "\nModelo: " + elementos.modelo + "\nCanales: " + elementos.canales + "\nPrecio $" + elementos.precio);
    })
}

function Filtro() {
    const filtro = parseInt(prompt(" Filtrar productos por:\n1) Ingresar precio minimo\n2) Ingresar precio maximo\n3) Ingresar cantidad de canales minimos\n4) Ver todos\n (ingrese el numero para elegir una categoria)"));
    if (filtro === 1) {
        PrecioMinimo();
    } else if (filtro === 2) {
        PrecioMaximo();
    } else if (filtro === 3) {
        CanalesMinimo();
    } else if (filtro === 4) {
        Productos.forEach(elementos => {
            alert("Codigo: " + elementos.codigo + "\nMarca: " + elementos.marca + "\nModelo: " + elementos.modelo + "\nCanales: " + elementos.canales + "\nPrecio $" + elementos.precio);
        })
    }
}

function ElegirProd() {
    let pregCodigo = parseInt(prompt("Ingrese el codigo elegido \nEn caso de querer abandonar el sitio ingrese otro valor"));
    if (pregCodigo >= 1 && pregCodigo <= Productos.length) {
        const busqueda = Productos.find(producto => producto.codigo === pregCodigo);
        console.log(pregCodigo)
        return busqueda;
    } else {
        alert("Muchas gracias por su visita");
    }
}

function calculoCuota(deuda, porcentaje, numeroCuotas){
    let valorCuota = ((deuda * porcentaje ) / numeroCuotas );
        console.log(valorCuota);
        alert("usted deberia pagar " + numeroCuotas + " cuotas de $" + valorCuota);
        alert("Muchas gracias");
}

function PagoTarjeta() {
    let numeroCuotas = parseFloat(prompt("en cuantas cuotas quieres realizar la compra?"))
    console.log(numeroCuotas)
    if (numeroCuotas <= 6) {
        alert("el interes en " + numeroCuotas + " cuotas es de 50%");
        calculoCuota(compra.precio, 1.5, numeroCuotas);
    }
    if (numeroCuotas > 6 && numeroCuotas <= 12) {
        alert("el interes en " + numeroCuotas + " cuotas es de 70%");
        calculoCuota(compra.precio, 1.7, numeroCuotas);
    }
    if (numeroCuotas > 12 && numeroCuotas <= 18) {
        alert("el interes en " + numeroCuotas + " cuotas es de 99%");
        calculoCuota(compra.precio, 1.99, numeroCuotas);
    }
}

function FormaDePago() {
    alert("Usted eligio " + compra.marca + " " + compra.modelo + " y sale $ " + compra.precio);
    let formaPago = parseInt(prompt("Como desea abonar el monto de $ " + compra.precio + " ? \n1) Efectivo \n2)Tarjeta de credito (1 a 6 cuotas 50% interes----- 7 a 12 cuotas 70% interes-----13 a 18 cuotas 99% interes) "));
    if (formaPago === 1) {
        let efectivo = alert("Su pago en efectivo sera de $" + compra.precio + "\nMuchas gracias por su compra")
    } else if (formaPago === 2) {
        PagoTarjeta();
    }


}


    SaludoNombre();
    Seguir(); 

let compra = ElegirProd();
console.log(compra);
FormaDePago();