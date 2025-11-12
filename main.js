const correo = document.getElementById("correo").value;

 const contraseña = document.getElementById("contraseña").value;

 





function validarLogin() {
    const correo = document.getElementById("correo").value;
    const contraseña = document.getElementById("contraseña").value;

    if (correo === "sharon@gmail.com" && contraseña === "1724") {
        alert("bienvenido a sayuniverse!! tenemos plan premium para ti, donde puesdes disfrutar de muchos beneficios, recuerda en invertir siempre para tu mayor aprendizaje donde puedes tener conexion directa interactuando con los profesores en una conversacion nativa  y fluida, no te pierdas de esta gran oportunidad");
        window.location.href = 'ingresar.html';
    } else {
        alert("Correo o contraseña incorrectos");
    }

}







