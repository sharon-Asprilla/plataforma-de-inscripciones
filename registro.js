// plataforma.js

const nombreInput = document.getElementById("nombre");
const cursoSelect = document.getElementById("curso");
const registrarBtn = document.getElementById("registrarBtn");
const listaEstudiantes = document.getElementById("listaEstudiantes");

let estudiantes = [];

registrarBtn.addEventListener("click", () => {
  const nombre = nombreInput.value.trim();
  const curso = cursoSelect.value;

  if (nombre === "" || curso === "") {
    alert("Por favor completa todos los campos.");
    return;
  }

  const estudiante = {
    nombre,
    curso
  };

  estudiantes.push(estudiante);
  actualizarLista();
  nombreInput.value = "";
  cursoSelect.value = "";
});

function actualizarLista() {
  listaEstudiantes.innerHTML = "";

  estudiantes.forEach((est, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${est.nombre} - ${est.curso}`;
    listaEstudiantes.appendChild(li);
  });

  if (estudiantes.length === 0) {
    listaEstudiantes.innerHTML = "<li>No hay estudiantes registrados aún.</li>";
  }
}
