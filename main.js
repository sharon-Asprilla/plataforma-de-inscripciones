const correo = document.getElementById("correo").value;

 const contraseña = document.getElementById("contraseña").value;






function validarLogin() {
    const correo = document.getElementById("correo").value;
    const contraseña = document.getElementById("contraseña").value;

    if (correo === "sharon@gmail.com" && contraseña === "1724") {
        alert("¡Bienvenida, usuario! ingresaste ala plataforma donde nunca sera tarde para aprender");
        window.location.href = 'ingresar.html';
    } else {
        alert("Correo o contraseña incorrectos");
    }

}

/*
function validarLogin() {
    const correo = document.getElementById("correo").value.trim();
    const contraseña = document.getElementById("contrasena").value.trim();

    

   if (correo=== correoCorrecto && contraseña === contraseñaCorrecta) {
        alert("¡Bienvenido!");
        
    } else {
        intentos--;
        if (intentos > 0) {
            alert("Datos incorrectos. Te quedan " + intentos + " intentos.");
        } else {
            alert("Usuario bloqueado por exceder los intentos.");
        }
    }
}
*/




