const carro = new Carrito();
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.getElementById('vaciar-carrito')

cargarEventos();

function cargarEventos() {
    cursos.addEventListener('click', (e) => { carro.comprarCurso(e) });
    vaciarCarrito.addEventListener('click', (e) => { carro.vaciarCarrito(e) });
}