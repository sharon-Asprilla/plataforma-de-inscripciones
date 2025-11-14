

const nombreInput = document.getElementById("correo");
const cursoSelect = document.getElementById("curso");
const registrarBtn = document.getElementById("registrarBtn");
const listaEstudiantes = document.getElementById("listaEstudiantes");
const boton = document.getElementById("cancelar");

boton.style.backgroundColor = "red";


let estudiantes = [];

registrarBtn.addEventListener("click", () => {
  const correo = nombreInput.value.trim();
  const curso = cursoSelect.value.trim();

  if (correo === "" || curso === "") {
    alert("Por favor completa todos los campos.");
    return;
  }

 
  const isNameDuplicate = estudiantes.some(est => est.correo.toLowerCase() === correo.toLowerCase());
  if (isNameDuplicate) {
    alert(`El estudiante con el nombre "${correo}" ya está registrado.`);
    return;
  }

  
  const isCourseDuplicate = estudiantes.some(est => est.curso === curso);
  if (isCourseDuplicate) {
    alert(`El curso "${curso}" ya ha sido registrado por otro estudiante, porfavor cambia el correo`);
    return;
  }

  const estudiante = {
    correo,
    curso
  };

  estudiantes.push(estudiante);
  actualizarLista();
  correoInput.value = "";
  cursoSelect.value = "";
});

function actualizarLista() {
  listaEstudiantes.innerHTML = "";

  estudiantes.forEach((est, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${est.correo} - ${est.curso}`;
    listaEstudiantes.appendChild(li);
  });

  if (estudiantes.length === 0) {
    listaEstudiantes.innerHTML = "<li>No hay estudiantes registrados aún</li>";
  }
}
