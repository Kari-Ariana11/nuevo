// Función para validar el formulario antes de enviar
function validateForm(event) {
    event.preventDefault(); // Evitar que el formulario se envíe por defecto

    // Obtener los valores de los campos de entrada
    const email = document.getElementById("email").value;
    const contraseña = document.getElementById("contraseña").value;

    // Validar que los campos no estén vacíos
    if (email === "" || contraseña === "") {
        alert("Por favor, ingresa tanto el correo electrónico como la contraseña.");
    } else {
        // Si ambos campos están completos, redirigir al usuario
        window.location.href = "calculadora.html"; // Cambiar a la página que desees redirigir
    }
}
