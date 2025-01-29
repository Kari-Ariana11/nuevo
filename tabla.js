function agregarFila() {
    // Crear nueva fila
    let fila = document.createElement("tr");

    // Crear celdas
    let celda1 = document.createElement("td");
    let celda2 = document.createElement("td");
    let celda3 = document.createElement("td");

    // Añadir contenido a las celdas
    celda1.textContent = "Juan";
    celda2.textContent = "30";
    celda3.textContent = "Madrid";

    // Agregar las celdas a la fila
    fila.appendChild(celda1);
    fila.appendChild(celda2);
    fila.appendChild(celda3);

    // Añadir la fila a la tabla
    document.getElementById("miTabla").getElementsByTagName("tbody")[0].appendChild(fila);
}
