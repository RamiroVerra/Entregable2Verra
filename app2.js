// VARIABLES
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
const productos = [
    { id: 1, nombre: "Producto-1", precio: 10 },
    { id: 2, nombre: "Producto-2", precio: 20 },
    { id: 3, nombre: "Producto-3", precio: 30 },
];

// FUNCIONES

function iniciarSimulador() {
    // Mostrar mensaje de bienvenida
    alert("Bienvenido al Simulador de Ventas");

    // Asociar evento al botón "Agregar al Carrito"
    const agregarCarritoBtn = document.getElementById("agregarCarrito");
    agregarCarritoBtn.addEventListener("click", agregarProducto);
}

function agregarProducto() {
    const idProductoInput = document.getElementById("idProducto");
    const idProducto = parseInt(idProductoInput.value);

    const productoEncontrado = productos.find(producto => producto.id === idProducto);

    if (productoEncontrado) {
        carrito.push(productoEncontrado);
        actualizarCarrito();
    } else {
        alert("El ID del producto no se encontró. Intente de nuevo");
    }
}

function actualizarCarrito() {
    // Limpiar lista de productos
    const listaProductos = document.getElementById("listaProductos");
    listaProductos.innerHTML = "";

    // Mostrar productos en el carrito
    let total = 0;
    carrito.forEach(producto => {
        const item = document.createElement("li");
        item.textContent = `${producto.nombre}: $${producto.precio}`;
        listaProductos.appendChild(item);
        total += producto.precio;
    });

    // Mostrar total
    const totalElement = document.getElementById("total");
    totalElement.textContent = `Total: $${total}`;

    // Guardar carrito en Local Storage
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function confirmarCompra() {
    // Confirmar compra
    const confirmar = confirm("¿Está seguro que estos son todos los artículos que desea llevar?");
    if (confirmar) {
        // Limpiar carrito después de confirmar compra
        localStorage.removeItem('carrito');
        carrito = [];
        actualizarCarrito();
    }
}

// Iniciar simulador al cargar la página
iniciarSimulador();
