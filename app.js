let botonElem = document.getElementById("boton-cambiar-cita");
let citaElem = document.getElementById("cita");
let autorElem = document.getElementById("autor");

function generarEnteroAleatorio(min, max) {
    //sin incluir max en los valores posibles
    return Math.floor(Math.random() * (max - min) + min); //11 - 0 = 11; 11 + 0 = 11; 11 verifica el rango para usar math random
}

function cambiarCita() {
    //reemplazar texto
    let indiceAleatorio = generarEnteroAleatorio(0, citas.length);
    citaElem.innerText = `"${citas[indiceAleatorio].texto}"`; //invoca al ojeto citas
    //reemplazar autor
    autorElem.innerText = citas[indiceAleatorio].autor;
}

cambiarCita();

botonElem.addEventListener("click", cambiarCita);