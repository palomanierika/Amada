document.addEventListener('DOMContentLoaded', function() {
    // Función para actualizar la barra de progreso y el porcentaje
    function actualizarProgreso(montoRecaudado, meta) {
        // Calcular el porcentaje recaudado
        var porcentaje = (montoRecaudado / meta) * 100;

        // Obtener el elemento de la barra de progreso
        var progressBar = document.getElementById('progress');

        // Actualizar el ancho de la barra de progreso
        if(progressBar) {
            progressBar.style.width = porcentaje + '%';

            // Actualizar el porcentaje mostrado
            document.getElementById('porcentaje').textContent = porcentaje.toFixed(2) + '%';
        } else {
            console.error("No se encontró el elemento con ID 'progress'.");
        }
    }

    // Variables para almacenar el monto recaudado y la meta
    var montoRecaudado = 3000;
    var meta = 25000; // Esta es la meta total

    // Llama a la función actualizarProgreso con el monto recaudado y la meta
    actualizarProgreso(montoRecaudado, meta);
});

document.addEventListener('DOMContentLoaded', function() {
    var openFormBtn = document.getElementById('openFormBtn');
    var modal = document.getElementById('modal');
    var closeButton = document.getElementsByClassName('close')[0];
    var contribucionForm = document.getElementById('contribucionForm');
    var body = document.body;

    openFormBtn.addEventListener('click', function() {
        modal.style.display = 'block';
        body.classList.add('no-scroll'); // Agregar la clase para deshabilitar el desplazamiento
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
        body.classList.remove('no-scroll'); // Quitar la clase para habilitar el desplazamiento
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            body.classList.remove('no-scroll'); // Quitar la clase para habilitar el desplazamiento si se hace clic fuera del modal
        }
    });

    contribucionForm.addEventListener('submit', function(event) {
        var comprobante = document.getElementById('comprobante');

        // Verificar si se ha seleccionado un archivo
        if (comprobante.files.length === 0) {
            event.preventDefault(); // Evitar el envío del formulario si no se ha seleccionado ningún archivo
            alert('Por favor, sube un comprobante de pago.');
        } else {
            // Mostrar mensaje de éxito y cerrar el formulario
            alert('¡Gracias por tu contribución! Tu formulario ha sido enviado.');
            modal.style.display = 'none';
            body.classList.remove('no-scroll'); // Quitar la clase para habilitar el desplazamiento
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var whatsappBtn = document.getElementById('whatsappBtn');

    whatsappBtn.addEventListener('click', function() {
        var mensaje = encodeURIComponent("Tengo una duda sobre Amada");
        var telefono = "tu_numero_de_telefono";
        var url = "https://wa.me/" + 5534447120 + "?text=" + mensaje;
        window.open(url, '_blank');
    });
});
