document.addEventListener('DOMContentLoaded', () => {
    //Seleccionamos los elementos de la vista
    const inputBusqueda = document.getElementById('busqueda');
    const formBusqueda = document.querySelector('form[role="search"]');
    const filasTabla = document.querySelectorAll('tbody tr');

    //Evitamos que el formulario recargue la página si el usuario presiona Enter
    formBusqueda.addEventListener('submit', (e) => {
        e.preventDefault();
    });

    //Evento que se dispara cada vez que el usuario escribe algo
    inputBusqueda.addEventListener('input', () => {
        const textoBuscado = inputBusqueda.value.toLowerCase();

        //Recorremos cada fila de la tabla y obtenemos todo el texto dentro de la fila actual
        filasTabla.forEach(fila => {
            // 
            const textoFila = fila.textContent.toLowerCase();

            // Si el texto de la fila incluye lo que escribimos, la mostramos, si no la ocultamos.
            if (textoFila.includes(textoBuscado)) {
                fila.style.display = '';
            } else {
                fila.style.display = 'none';
            }
        });
    });
});