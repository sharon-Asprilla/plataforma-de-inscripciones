

const nombreInput = document.getElementById("nombre");
const cursoSelect = document.getElementById("curso");
const registrarBtn = document.getElementById("registrarBtn");
const listaEstudiantes = document.getElementById("listaEstudiantes");
const boton = document.getElementById("cancelar");

boton.style.backgroundColor = "red";


let estudiantes = [];

registrarBtn.addEventListener("click", () => {
  const nombre = nombreInput.value.trim();
  const curso = cursoSelect.value;

  if (nombre === "" || curso === "") {
    alert("Por favor completa todos los campos.");
    return;
  }

  // Validación para evitar nombres de estudiantes duplicados
  const isNameDuplicate = estudiantes.some(est => est.nombre.toLowerCase() === nombre.toLowerCase());
  if (isNameDuplicate) {
    alert(`El estudiante con el nombre "${nombre}" ya está registrado.`);
    return;
  }

  
  const isCourseDuplicate = estudiantes.some(est => est.curso === curso);
  if (isCourseDuplicate) {
    alert(`El curso "${curso}" ya ha sido registrado por otro estudiante.`);
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
    listaEstudiantes.innerHTML = "<li>No hay estudiantes registrados aún</li>";
  }
}
