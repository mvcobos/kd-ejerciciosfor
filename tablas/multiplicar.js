
function generarTablas(){
    let contenedor = document.getElementById("contenido");
    let numero = document.getElementById("txtNumero").value;
    let insignia = document.getElementById("insignia");
    let titulo = document.getElementById("titulo");
    let contenido = "";
    insignia.innerHTML = numero;
    titulo.innerHTML = "Tabla del " + numero;
    for(let i = 1; i <= 10; i++){
        contenido += "<tr><td>" + i + "</td><td>" + numero + " x " + i + "</td><td><span class='resultado'>" + numero * i + "</span></td></tr>";
    }
    contenedor.innerHTML = contenido;
}