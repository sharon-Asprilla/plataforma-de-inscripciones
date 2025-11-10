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





