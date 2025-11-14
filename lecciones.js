const niveles = ["A1 - Principiante", "A2 - Básico", "B1 - Intermedio","-b2 - Intermedio alto" ,"B2 - Intermedio alto", "C1 - Avanzado", "C2 - Experto"];

    document.getElementById("buscarBtn").addEventListener("click", () => {
      const resultado = document.getElementById("resultado");
      resultado.innerHTML = "<p>Buscando niveles de inglés...</p>";


      setTimeout(() => {
        resultado.innerHTML = "<h3>Seleccione su nivel:</h3>";
        niveles.forEach(nivel => {
          const div = document.createElement("div");
          div.className = "nivel";
          div.textContent = nivel;
          div.onclick = () => alert("Has seleccionado: " + nivel);
          resultado.appendChild(div);
        });
      }, 8000);
    });
