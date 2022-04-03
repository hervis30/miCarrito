class Carrito {
    comprarCurso(e) {
        e.preventDefault();
        if (e.target.classList.contains('agregar-carrito')) {
            const curso = e.target.parentElement.parentElement;
            this.leerDatosCurso(curso);
            //console.log(curso);
        }
    }
    leerDatosCurso(curso) {
        const infoCurso = {
            imagen: curso.querySelector('img').src,
            nombreCurso: curso.querySelector('h4').textContent,
            precio: curso.querySelector('.precio span').textContent,
            id: curso.querySelector('a').getAttribute('data-id'),
            cantidad: 2
        }
        this.insertarCurso(infoCurso);
    }
    insertarCurso(curso) {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>   <img src="${curso.imagen}" width=100></td>
        <td>${curso.nombreCurso}</td>
        <td>${curso.precio}</td>
        <td>${curso.cantidad}</td>
        `;
        listaCursos.appendChild(row);
    }

    vaciarCarrito(e) {
        e.preventDefault();
        while (listaCursos.firstChild) {
            listaCursos.removeChild(listaCursos.firstChild);
        }
        return false;
    }
}