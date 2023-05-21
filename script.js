const contenidoTienda = document.getElementById("cont__productos");
const irAlCarrito = document.getElementById("irAlCarrito");
const modalContainer = document.getElementById("cont_modal");
const contadorCarrito = document.getElementById("contadorCarrito");

//Array vacío --------------------------

let carritoDeCompra = JSON.parse (localStorage.getItem("carritoDeCompra")) || [];


//Construcción de cards -----------------

catalogo.forEach((producto) => {
  
  let card = document.createElement("div");
  contenidoTienda.className = "card";
  card.innerHTML = `
    <img class = "imagen" src="${producto.imagenProd}">
    <h3 class = "nombre">${producto.nombreProducto}</h3>
    <p class = "precio">$${producto.precio}</p>
  `;

  contenidoTienda.append(card);

  let comprar = document.createElement ("button")
  comprar.innerText = "Comprar";
  comprar.className = "comprar";

  card.append(comprar);

  comprar.addEventListener("click", () => {

    const repeat = carritoDeCompra.some ((repeatProduct) => repeatProduct.id === producto.id);

    if (repeat){
      carritoDeCompra.map((prod) => {
        if (prod.id === producto.id) {
          prod.cantidad++;
        }
      });
    }else{
      carritoDeCompra.push({
        id:producto.id,
        imagenProd:producto.imagenProd,
        nombreProducto:producto.nombreProducto,
        precio:producto.precio,
        cantidad:producto.disponibilidad,
      });
    }

    counterCarrito ();
    saveLocal ();

    Toastify({
      text: `Se agregó la ${producto.nombreProducto} a tu carrito`,
      gravity: "bottom",
      duration: 2000,
      style: {background: "linear-gradient(to right, #ffb200, #ffb200)"},
    }).showToast();

  });
  
});


//Funcionalidades del carrito -----------

const carritoFeatures = () => {

  modalContainer.innerHTML = "";

  modalContainer.style.display = "flex";  

  const modalCarrito = document.createElement ("div");
  modalCarrito.className = "modalCarrito";
  modalCarrito.innerHTML = `
  <h1 class="titulo_modal">Tu Carrito<h1/>
  `;

  modalContainer.append(modalCarrito);

  const botonModal = document.createElement("h4");
  botonModal.innerText = "X";
  botonModal.className = "botonCierre";

  document.addEventListener("click", (botonModal) => {

    if (botonModal.target != botonModal && modalContainer.contains(botonModal.target)) {modalContainer.style.display = "none"};
    
  });

  modalContainer.append(botonModal);
  console.log(carritoDeCompra)

  if (carritoDeCompra.length === 0) {

    const mensajeCarritoVacio = document.createElement("p");
    mensajeCarritoVacio.innerText = "Tu carrito está vacío";
    modalContainer.append (mensajeCarritoVacio);
    mensajeCarritoVacio.className = "mensajeCarritoVacio";
    contenidoCarrito.style.display = "none";
    
  } else {

    carritoDeCompra.forEach ((producto) => {

      let contenidoCarrito = document.createElement ("div");
      contenidoCarrito.className = "contenidoModal";
      contenidoCarrito.innerHTML = `
      <img class = "imagenCarr" src="${producto.imagenProd}">
      <h3 class = "nombreCarr">${producto.nombreProducto}</h3>
      <p class = "precio">$${producto.precio}</p>
      <span class="restar"> - </span>
      <p> ${producto.cantidad}</p>
      <span class="sumar"> + </span>
      <p> Total: ${producto.cantidad * producto.precio}
    `;
  
      modalContainer.append(contenidoCarrito);
  
      let restar = contenidoCarrito.querySelector(".restar");
  
      restar.addEventListener("click", () => {
        if (producto.cantidad !== 1) {
          producto.cantidad--;
        }
        saveLocal();
        carritoFeatures();
      });
  
      let sumar = contenidoCarrito.querySelector(".sumar");
  
      sumar.addEventListener("click", () => {
        producto.cantidad++;
        saveLocal();
        carritoFeatures();
      });
  
      let eliminar = document.createElement("span");
      eliminar.innerText = "🗑";
      eliminar.className = "eliminador";
      contenidoCarrito.append(eliminar);
  
      eliminar.addEventListener("click", eliminarItem);
  
    });
    
  }

  const total = carritoDeCompra.reduce ((acum, elem) => acum + elem.precio * elem.cantidad, 0);

  const totalCompra = document.createElement ("div");
  totalCompra.className = "total";
  totalCompra.innerHTML = `Total: $${total}`;

  modalContainer.append(totalCompra);

  const botonFinal = document.createElement ("h4")
  botonFinal.innerText = "Finalizar tu compra";
  botonFinal.className = "botonFinal";

  modalContainer.append(botonFinal);

  botonFinal.addEventListener("click", finalizarCompra);

};

irAlCarrito.addEventListener ("click", carritoFeatures);

//Funciones ------------------------

const eliminarItem = () => {
  
  const IdFound = carritoDeCompra.find((element) => element.id);

  carritoDeCompra = carritoDeCompra.filter ((carritoId) => {
      return carritoId !== IdFound;
  });

  saveLocal ();
  carritoFeatures ();
  counterCarrito ();

}

const counterCarrito = () => {
  
  contadorCarrito.style.display = "block";
  const carritoTamanio = carritoDeCompra.length;
  localStorage.setItem ("carritoTamanio", JSON.stringify(carritoTamanio));
  contadorCarrito.innerText = JSON.parse(localStorage.getItem("carritoTamanio"));

};

const saveLocal = () => {
  localStorage.setItem("carritoDeCompra", JSON.stringify(carritoDeCompra));
};

const finalizarCompra = () => {

  swal("Gracias por comprar en Needo!", "Te enviaremos el detalle de tu compra al mail registrado", "success", {
    button: "OK!",
  });

  carritoDeCompra = [];
  saveLocal();
  counterCarrito();

}




 
