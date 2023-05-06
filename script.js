

/*función constructora*/

function Producto (id, nombreProducto, material, precio, disponibilidad) {
  this.id = id;
    this.nombreProducto = nombreProducto;
    this.material = material;
    this.precio = precio;
    this.disponibilidad = disponibilidad;
    }

let sillaFalcon = new Producto (1, "Silla Falcon", "Madera", 12000, true);
let sillaZulia = new Producto (2, "Silla Zulia", "Madera", 11300, false);
let sillaBarinas = new Producto (3, "Silla Barinas", "Metal", 13600, true);
let sillaAragua = new Producto (4, "Silla Aragua", "Madera", 15400, true);
let sillaLara = new Producto (5, "Silla Lara", "Metal", 13599, true);
let sillaBkf = new Producto (6, "Silla BKF", "Metal", 35000, true);
let sillaEames = new Producto (7, "Silla Eames", "Metal", 13999, false);
let sillaSucre = new Producto (8, "Silla Sucre", "Madera", 14750, true);
let sillaMerida = new Producto (9, "Silla Merida", "Madera", 17800, true);
let sillaTachira = new Producto (10, "Silla Tachira", "Madera", 13450, false);
let sillaCaracas = new Producto (11, "Silla Caracas", "Madera", 19500, false);
let sillaNuevaEsparta = new Producto (12, "Silla Nueva Esparta", "Madera", 14900, true);

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
    sillaNuevaEsparta
];

const carritoDeCompra = [];


const comprar = document.querySelectorAll(".comprar")

comprar.addEventListener("click",hacerClick) 


hacerClick(){
  carritoDeCompra.push({
    comprar.parentElement.querySelector'.nombreProducto'
  })

  console.log(carritoDeCompra)
}







/*function agregarProducto() {
    const seleccionado = document.getElementById("selectProductos").value;
  
    const productoAgregado = catalogo.find(Producto => Producto.nombreProducto === seleccionado);
  
    if (productoAgregado.disponibilidad) {
      productosSeleccionados.push(productoAgregado);
      alert("El producto " + productoAgregado.nombreProducto + " ha sido agregado al carrito.");
      document.getElementById("selectProductos").value = "";
    } else {
      alert("Lo sentimos, el producto " + productoAgregado.nombreProducto + " no está disponible en este momento.");
    }
}

const botonAgregar = document.getElementById("btnAgregar");
botonAgregar.addEventListener("click", agregarProducto);



function terminarCompra() {
    
    if (productosSeleccionados.length > 0) {
      let total = 0;
      let mensaje = "Usted seleccionó:\n";
  
      productosSeleccionados.forEach(function(producto) {
        mensaje += "- " + producto.nombreProducto + " (" + producto.material + "): $" + producto.precio + " + IVA\n";
        total += producto.precio;
      });
  
      mensaje += "\nTotal con IVA: $" + (total * 1.21);
  
      alert(mensaje);
  
      console.log(productosSeleccionados);
    } else {
      alert("Debe seleccionar al menos uno de los productos disponibles.");
    }
  }

const botonTerminar = document.getElementById("btnTerminar");
botonTerminar.addEventListener("click", terminarCompra);*/


