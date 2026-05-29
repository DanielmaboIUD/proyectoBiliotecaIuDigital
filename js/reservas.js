document.addEventListener('DOMContentLoaded', () => {
    const formReserva = document.getElementById('formReserva');
    const modal = document.getElementById('modalConfirmacion');
    const mensajeModal = document.getElementById('mensajeModal');
    const btnCerrarModal = document.getElementById('btnCerrarModal');

    formReserva.addEventListener('submit', (e) => {
        e.preventDefault();

        //Capturamos los datos importantes del usuario y del material
        const nombreUsuario = document.getElementById('nombreUsuario').value;
        const tituloMaterial = document.getElementById('tituloMaterial').value;
        const formatoMaterial = document.getElementById('formatoMaterial').value;
        const fechaReserva = document.getElementById('fechaReserva').value;

        //Construimos un mensaje dinámico con HTML
        mensajeModal.innerHTML = `
            Hola <strong>${nombreUsuario}</strong>, hemos recibido tu solicitud.<br><br>
            El recurso <strong>"${tituloMaterial}"</strong> en formato <em>${formatoMaterial}</em> ha sido reservado para la fecha <strong>${fechaReserva}</strong>.<br><br>
            Te enviaremos los detalles a tu correo institucional.
        `;

        //Mostramos el modal
        modal.showModal();
    });

    btnCerrarModal.addEventListener('click', () => {
        modal.close();
        formReserva.reset();
    });
});