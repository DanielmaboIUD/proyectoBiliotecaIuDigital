document.addEventListener('DOMContentLoaded', () => {

    const inputBusqueda = document.getElementById('busqueda');
    const formBusqueda = document.querySelector('form[role="search"]');
    const filasTabla = document.querySelectorAll('tbody tr');

    formBusqueda.addEventListener('submit', (e) => {
        e.preventDefault();
    });

    inputBusqueda.addEventListener('input', () => {
        const textoBuscado = inputBusqueda.value.toLowerCase();
        filasTabla.forEach(fila => {
            const textoFila = fila.textContent.toLowerCase();
            if (textoFila.includes(textoBuscado)) {
                fila.style.display = ''; 
            } else {
                fila.style.display = 'none'; 
            }
        });
    });

    // Seleccionamos todos los botones dentro de la tabla
    const botonesTabla = document.querySelectorAll('tbody button');

    botonesTabla.forEach(boton => {
        boton.addEventListener('click', (e) => {
            // Buscamos la fila a la que pertenece el botón que le dio click
            const fila = e.target.closest('tr');

            // Extraemos los textos de las columnas de esa fila específica
           
            const titulo = fila.querySelectorAll('td')[1].textContent.trim();
            const autor = fila.querySelectorAll('td')[2].textContent.trim();
            const formatoTexto = fila.querySelectorAll('td')[3].textContent.trim();

            // Guardamos esta información en la memoria del navegador
            localStorage.setItem('libroTemporal_titulo', titulo);
            localStorage.setItem('libroTemporal_autor', autor);
            
            // Verificamos si es físico o digital para que coincida con el formulario
            if (formatoTexto.includes('Físico')) {
                localStorage.setItem('libroTemporal_formato', 'Físico');
            } else {
                localStorage.setItem('libroTemporal_formato', 'Digital');
            }

            // Redirigimos al usuario a la página de reservas
            window.location.href = 'reservas.html';
        });
    });
});