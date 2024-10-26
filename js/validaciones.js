function validateForm() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const mensajeDiv = document.getElementById("mensaje");

    let errores = [];

    if (!nombre || nombre.length > 50) {
        errores.push("Nombre invalido (maximo 50 caracteres).");
    }
    if (!/^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/.test(email)) {
        errores.push("Correo electrónico inválido.");
    }
    if (!/^\d{10}$/.test(telefono)) {
        errores.push("Teléfono inválido (10 dígitos).");
    }

    mensajeDiv.innerHTML = "";
    if (errores.length > 0) {
        errores.forEach(error => {
            const errorDiv = document.createElement("div");
            errorDiv.style.color = "red";
            errorDiv.textContent = error;
            mensajeDiv.appendChild(errorDiv);
        });
    } else {
        const successMessage = document.createElement("p");
        successMessage.textContent = `Gracias ${nombre}, te contactaremos ya mismo.`;
        mensajeDiv.appendChild(successMessage);
    }
}