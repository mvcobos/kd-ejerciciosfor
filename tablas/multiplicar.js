
function generarTablas(){
    let contenedor = document.getElementById("contenido");
    let contenido = "";
    for(let i = 1; i <= 10; i++){
        contenido += "<tr><td>" + i + "</td><td>5 x " + i + "</td><td><span class='resultado'>" + 5 * i + "</span></td></tr>";
    }
    contenedor.innerHTML = contenido;
}