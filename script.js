// Esperamos a que el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('btnInteractivo');
    const mensaje = document.getElementById('mensajeOculto');

    boton.addEventListener('click', () => {
        // Alternamos las clases para mostrar u ocultar el mensaje
        if (mensaje.classList.contains('oculto')) {
            mensaje.classList.remove('oculto');
            mensaje.classList.add('visible');
            boton.textContent = 'Ocultar mensaje';
        } else {
            mensaje.classList.remove('visible');
            mensaje.classList.add('oculto');
            boton.textContent = 'Haz clic aquí';
        }
    });
});
