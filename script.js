//Función que le aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

//función que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

// Función para cambiar entre modo claro y oscuro
function cambiarModo() {
    const body = document.body;
    const modoBtn = document.getElementById("modoBtn");
    const iconoModo = modoBtn.querySelector("i");
    
    // Alternar la clase dark-mode en el body
    body.classList.toggle("dark-mode");
    
    // Cambiar el icono según el modo actual
    if (body.classList.contains("dark-mode")) {
        iconoModo.className = "fa-solid fa-sun"; // Icono de sol para modo oscuro
    } else {
        iconoModo.className = "fa-solid fa-moon"; // Icono de luna para modo claro
    }
    
    // Guardar preferencia en localStorage
    const modoActual = body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("modo", modoActual);
}

// Verificar y aplicar el modo guardado al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    const modoGuardado = localStorage.getItem("modo");
    const modoBtn = document.getElementById("modoBtn");
    const iconoModo = modoBtn.querySelector("i");
    
    if (modoGuardado === "dark") {
        document.body.classList.add("dark-mode");
        iconoModo.className = "fa-solid fa-sun";
    }
});
