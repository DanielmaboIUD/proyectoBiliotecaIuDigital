document.addEventListener('DOMContentLoaded', () => {
    const formReserva = document.getElementById('formReserva');
    const modal = document.getElementById('modalConfirmacion');
    const mensajeModal = document.getElementById('mensajeModal');
    const btnCerrarModal = document.getElementById('btnCerrarModal');

    // Revisamos si hay datos guardados en la memoria del navegador
    const tituloGuardado = localStorage.getItem('libroTemporal_titulo');
    const autorGuardado = localStorage.getItem('libroTemporal_autor');
    const formatoGuardado = localStorage.getItem('libroTemporal_formato');

    // Si encontramos un título guardado, llenamos las cajas de texto
    if (tituloGuardado) {
        document.getElementById('tituloMaterial').value = tituloGuardado;
        document.getElementById('autorMaterial').value = autorGuardado;
        document.getElementById('formatoMaterial').value = formatoGuardado;

        // Limpiamos la memoria para que si entra a reservas desde el menú después, 
        // el formulario esté vacío
        localStorage.removeItem('libroTemporal_titulo');
        localStorage.removeItem('libroTemporal_autor');
        localStorage.removeItem('libroTemporal_formato');
    }

    formReserva.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombreUsuario = document.getElementById('nombreUsuario').value;
        const tituloMaterial = document.getElementById('tituloMaterial').value;
        const formatoMaterial = document.getElementById('formatoMaterial').value;
        const fechaReserva = document.getElementById('fechaReserva').value;

        mensajeModal.innerHTML = `
            Hola <strong>${nombreUsuario}</strong>, hemos recibido tu solicitud.<br><br>
            El recurso <strong>"${tituloMaterial}"</strong> en formato <em>${formatoMaterial}</em> ha sido reservado para la fecha <strong>${fechaReserva}</strong>.<br><br>
            Te enviaremos los detalles a tu correo institucional.
        `;

        modal.showModal();
    });

    btnCerrarModal.addEventListener('click', () => {
        modal.close();
        formReserva.reset(); 
    });
});