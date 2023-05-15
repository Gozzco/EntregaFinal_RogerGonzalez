const contenidoTienda = document.getElementById("cont__productos");
const irAlCarrito = document.getElementById("irAlCarrito");
const modalContainer = document.getElementById("cont_modal");

//Array vacío --------------------------

let carritoDeCompra = [];


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

    carritoDeCompra.push({
      id:producto.id,
      imagenProd:producto.imagenProd,
      nombreProducto:producto.nombreProducto,
      precio:producto.precio,
    });

    console.log(carritoDeCompra)

  })
  
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

  const botonModal = document.createElement("h1");
  botonModal.innerText = "X";
  botonModal.className = "botonCierre";

  botonModal.addEventListener("click", () => {

    modalContainer.style.display = "none";

  });

  modalContainer.append(botonModal);

  carritoDeCompra.forEach ((producto) => {

    let contenidoCarrito = document.createElement ("div");
    contenidoCarrito.className = "contenidoModal";
    contenidoCarrito.innerHTML = `
    <img class = "imagenCarr" src="${producto.imagenProd}">
    <h3 class = "nombreCarr">${producto.nombreProducto}</h3>
    <p class = "precio">$${producto.precio}</p>
  `;

    modalContainer.append(contenidoCarrito);

    let eliminar = document.createElement("span");
    eliminar.innerText = "✖"
    eliminar.className = "eliminador"
    contenidoCarrito.append(eliminar);

    eliminar.addEventListener("click", eliminarItem);



  });


  const total = carritoDeCompra.reduce ((acum, elem) => acum + elem.precio, 0);

  const totalCompra = document.createElement ("div");
  totalCompra.className = "total";
  totalCompra.innerHTML = `Total: $${total}`;

  modalContainer.append(totalCompra);

};



irAlCarrito.addEventListener ("click", carritoFeatures)

//Funciones ------------------------

const eliminarItem = () => {
  
  const IdFound = carritoDeCompra.find((element) => element.id);

  carritoDeCompra = carritoDeCompra.filter ((carritoId) => {
      return carritoId !== IdFound;
  });

  carritoFeatures ();

}
 
