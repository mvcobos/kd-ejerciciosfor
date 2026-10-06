
function generarTablas(){
    let contenedor = document.getElementById("contenido");
    let texto = document.getElementById("txtNumerito").value.trim();
    let insignia = document.getElementById("insignia");
    let titulo = document.getElementById("titulo");
    let mensajeError = document.getElementById("mensajeError");
    let contenido = "";

    // Validación: la caja no debe estar vacía
    if(texto == ""){
        mensajeError.innerHTML = "Escribe un número antes de generar la tabla.";
        return;
    }

    // Conversión explícita del texto a número
    let numero = Number(texto);

    // Validación: debe ser un número entero válido
    if(isNaN(numero) || !Number.isInteger(numero)){
        mensajeError.innerHTML = "El valor ingresado no es un número entero válido.";
        return;
    }

    mensajeError.innerHTML = "";
    insignia.innerHTML = numero;
    titulo.innerHTML = "Tabla del " + numero;
    for(let i = 1; i <= 10; i++){
        contenido += "<tr><td>" + i + "</td><td>" + numero + " x " + i + "</td><td><span class='resultado'>" + numero * i + "</span></td></tr>";
    }
    contenedor.innerHTML = contenido;
}
