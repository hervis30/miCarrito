const carroCurso = new CarritoCurso();
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.getElementById('vaciar-carrito')

cargarEventos();

function cargarEventos() {
    cursos.addEventListener('click', (e) => { carroCurso.comprarCurso(e) });
    vaciarCarrito.addEventListener('click', (e) => { carroCurso.vaciarCarrito(e) });
}