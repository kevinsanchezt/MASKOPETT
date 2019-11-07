Function validar() {
    var usuario, email, clave, confir_clave, expresion;
    usuario = document.getElementsById("usuario").value;
    email = document.getElementsById("email").value;
    clave = document.getElementsById("clave").value;
    confir_clave = document.getElementsById("confir_clave").value;

    if (usuario === "" || email === "" || clave === "" || confir_clave === "") {
        alert("Todos los campos son obligatorios");
        return false;
    } else if (usuario.length > 30) {
        alert("El nombre es muy alto");
        return false;
    } else if (email.length > 50) {
        alert("El nombre es muy alto");
        return false;
    } else if (clave.length > 8) {
        alert("El nombre es muy alto");
        return false;
    } else if (confir_clave.length > 8) {
        alert("El nombre es muy alto");
        return false;
    }
}