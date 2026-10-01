/* 11. Dentro de la función:
1. Crear una variable:
let contenido = "";
2. Usar un for para construir dinámicamente el HTML de la tabla:
Dentro del for vas concatenando cada item.

3. Al salir del for:
contenedor.innerHTML = contenido;

14. Validar que:
• Se genere correctamente la tabla del 3
• Luego modificar el código para mostrar la tabla del 5
15. Subir cambios al repositorio.
 */
function generarTablas(){
    let contenedor = document.getElementById("contenido");
    let contenido = "";
    for(let i = 1; i <= 10; i++){
        contenido += "<tr><td>" + i + "</td><td>3 x " + i + "</td><td><span class='resultado'>" + 3 * i + "</span></td></tr>";
    }
    contenedor.innerHTML = contenido;
}