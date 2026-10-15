const formulario = document.getElementById("formEstudiante");
const tabla = document.getElementById("tablaEstudiantes");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const edad = document.getElementById("edad").value;

  if (!nombre || !apellido || !correo || Number(edad) < 1) {
    alert("Complete correctamente todos los campos.");
    return;
  }

  const fila = document.createElement("tr");

  [nombre, apellido, correo, edad].forEach(function (dato) {
    const celda = document.createElement("td");
    celda.textContent = dato;
    fila.appendChild(celda);
  });

  const celdaAcciones = document.createElement("td");
  const botonEliminar = document.createElement("button");

  botonEliminar.textContent = "Eliminar";
  botonEliminar.type = "button";

  botonEliminar.addEventListener("click", function () {
    fila.remove();
  });

  celdaAcciones.appendChild(botonEliminar);
  fila.appendChild(celdaAcciones);
  tabla.appendChild(fila);

  formulario.reset();
  alert("Estudiante registrado correctamente.");
});
