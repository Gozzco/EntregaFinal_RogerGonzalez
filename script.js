//DOM
const contenidoTienda = document.getElementById("cont__productos");
const irAlCarrito = document.getElementById("irAlCarrito");
const modalContainer = document.getElementById("cont_modal");
const contadorCarrito = document.getElementById("contadorCarrito");
const avisoRegistro = document.getElementById("avisoRegistro");

//Array carrito

let carritoDeCompra = JSON.parse (localStorage.getItem("carritoDeCompra")) || [];


//Construcción de cards 

const getProductos = async () => {

  const response = await fetch ("data.json");
  const data = await response.json();

  data.forEach((producto) => {

    //Destructuración

    const {imagenProd, nombreProducto, precio, disponibilidad} = producto;

    let card = document.createElement("div");
    contenidoTienda.className = "card";
    card.innerHTML = `
      <img class = "imagen" src="${imagenProd}">
      <h3 class = "nombre">${nombreProducto}</h3>
      <p class = "precio">$${precio}</p>
      <p class = "disponibilidad"> ${disponibilidad ? "Disponible" : "Agotado"} </p>
    `;
  
    contenidoTienda.append(card);

  
  //Construcción botón comprar
  
    let comprar = document.createElement ("button")
    comprar.innerText = "Comprar";
    comprar.className = "comprar";
  
    card.append(comprar);
  
  //Funcionalidades del botón comprar
  
    comprar.addEventListener("click", () => {
  
      const repeat = carritoDeCompra.some ((repeatProduct) => repeatProduct.id === producto.id);
  
      if (repeat){
        carritoDeCompra.map((prod) => {
          if (prod.id === producto.id) {
            prod.cantidad++;
          }
        });
      }else{

        const productoInventario = data.find ((p) => p.id === producto.id);

        if (productoInventario && productoInventario.disponibilidad > 0) {

          carritoDeCompra.push({
            id:producto.id,
            imagenProd:producto.imagenProd,
            nombreProducto:producto.nombreProducto,
            precio:producto.precio,
            cantidad:producto.disponibilidad,
          });

          Toastify({
            text: `Se agregó la ${producto.nombreProducto} a tu carrito`,
            gravity: "bottom",
            duration: 2000,
            style: {background: "linear-gradient(to right, #ffb200, #ffb200)"},
          }).showToast();
          
        } else {

          Toastify({
            text: `La ${producto.nombreProducto} no se encuentra disponible`,
            gravity: "bottom",
            duration: 3000,
            style: {background: "linear-gradient(to right, #2b2929, #2b2929)"},
          }).showToast();
          
        }
      }
  
      counterCarrito ();
      saveLocal ();
  
    });
    
  });  

};

getProductos();

//Funcionalidades del carrito

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


//Condicionales del carrito (usando operador ternario)

  carritoDeCompra.length === 0

  ? (() => {

    const mensajeCarritoVacio = document.createElement("p");
    mensajeCarritoVacio.innerText = "Tu carrito está vacío";
    modalContainer.append (mensajeCarritoVacio);
    mensajeCarritoVacio.className = "mensajeCarritoVacio";
    contenidoCarrito.style.display = "none";
    
  }) ()

    : carritoDeCompra.forEach ((producto) => {

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


//Total de la compra

  const total = carritoDeCompra.reduce ((acum, elem) => acum + elem.precio * elem.cantidad, 0);

  const totalCompra = document.createElement ("div");
  totalCompra.className = "total";
  totalCompra.innerHTML = `Total: $${total}`;

  modalContainer.append(totalCompra);

//Botón de finalizar compra

  const botonFinal = document.createElement ("h4")
  botonFinal.innerText = "Finalizar tu compra";
  botonFinal.className = "botonFinal";

  modalContainer.append(botonFinal);

  botonFinal.addEventListener("click", finalizarCompra);

};

irAlCarrito.addEventListener ("click", carritoFeatures);

//Aviso asincrónico

const mostrarAvisoRegistro = () => {
  avisoRegistro.innerText = "¡Regístrate ahora para recibir actualizaciones y ofertas especiales!";
  avisoRegistro.style.display = "block";
  avisoRegistro.className = "avisoRegistro"
};

const tiempoEspera = 10000;

setTimeout(mostrarAvisoRegistro, tiempoEspera);



//Funciones 

const eliminarItem = () => {
  const IdFound = carritoDeCompra.find((element) => element.id);

  carritoDeCompra = carritoDeCompra.filter ((carritoId) => {
      return carritoId !== IdFound;
  });

  saveLocal ();
  counterCarrito ();
  carritoFeatures ();
  
}


const counterCarrito = () => {
  contadorCarrito.style.display = "block";
  const carritoTamanio = carritoDeCompra.reduce((total, producto) => total + producto.cantidad, 0);
  localStorage.setItem ("carritoTamanio", JSON.stringify(carritoTamanio));
  contadorCarrito.innerText = JSON.parse(localStorage.getItem("carritoTamanio"));
};


const saveLocal = () => {
  localStorage.setItem("carritoDeCompra", JSON.stringify(carritoDeCompra));
};


const finalizarCompra = () => {

  swal({
      text: 'Indicanos tu mail para finalizar la compra".',
      content: "input",
      button: {
        text: "Enviar",
        closeModal: false,
      },
  })  

  .then(results => {

    swal("Gracias por comprar en Needo!", "Te enviaremos el detalle de tu compra al mail registrado", "success", {
    button: "OK!", }

  );

  carritoDeCompra = [];
  saveLocal();
  counterCarrito();
  })
};





 
