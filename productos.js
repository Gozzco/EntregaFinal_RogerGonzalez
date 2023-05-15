/*función constructora*/

function Producto (id, nombreProducto, material, precio, disponibilidad, imagenProd) {
    this.id = id;
    this.nombreProducto = nombreProducto;
    this.material = material;
    this.precio = precio;
    this.disponibilidad = disponibilidad;
    this.imagenProd = imagenProd
    }

let sillaFalcon = new Producto (1, "Silla Falcon", "Madera", 12000, true, "/assets/needoarticulosilla1.jpg");
let sillaZulia = new Producto (2, "Silla Zulia", "Madera", 11300, false, "/assets/needoarticulosilla2.jpg");
let sillaBarinas = new Producto (3, "Silla Barinas", "Metal", 13600, true, "/assets/needoarticulosilla3.jpg");
let sillaAragua = new Producto (4, "Silla Aragua", "Madera", 15400, true, "/assets/needoarticulosilla4.jpg");
let sillaLara = new Producto (5, "Silla Lara", "Metal", 13599, true, "/assets/needoarticulosilla5.jpg");
let sillaBkf = new Producto (6, "Silla BKF", "Metal", 35000, true, "/assets/needoarticulosilla6.jpg");
let sillaEames = new Producto (7, "Silla Eames", "Metal", 13999, false, "/assets/needoarticulosilla7.jpg");
let sillaSucre = new Producto (8, "Silla Sucre", "Madera", 14750, true, "/assets/needoarticulosilla8.jpg");
let sillaMerida = new Producto (9, "Silla Merida", "Madera", 17800, true, "/assets/needoarticulosilla9.jpg");
let sillaTachira = new Producto (10, "Silla Tachira", "Madera", 13450, false, "/assets/needoarticulosilla10.jpg");
let sillaCaracas = new Producto (11, "Silla Caracas", "Madera", 19500, false, "/assets/needoarticulosilla11.jpg");
let sillaNuevaEsparta = new Producto (12, "Silla Nueva Esparta", "Madera", 14900, true, "/assets/needoarticulosilla12.jpg");
let sillaGuyana = new Producto (13, "Silla Guyana", "Madera", 21500, false, "/assets/needoarticulosilla13.jpeg");
let sillaSanCristobal = new Producto (14, "Silla San Cristobal", "Madera", 19500, true, "/assets/needoarticulosilla14.jpg");
let sillaMonagas = new Producto (14, "Silla Monagas", "Madera", 26500, true, "/assets/needoarticulosilla15.jpg");

console.log(sillaFalcon.imagenProd);

const catalogo = [
    sillaFalcon, 
    sillaZulia,
    sillaBarinas,
    sillaAragua,
    sillaLara,
    sillaBkf,
    sillaEames,
    sillaSucre,
    sillaMerida,
    sillaTachira,
    sillaCaracas,
    sillaNuevaEsparta,
    sillaGuyana,
    sillaSanCristobal,
    sillaMonagas,
];