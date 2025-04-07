//Función que le aplica el estilo a la opción seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links a');
    opciones.forEach(opcion => opcion.className = "");
    link.className = "seleccionado";

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    var x = document.getElementById("nav");
    x.className = "";
}

//función que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    x.className = x.className === "" ? "responsive" : "";
}

// Función para crear partículas flotantes
function createParticles() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        // Eliminar partículas existentes si las hay
        const existingParticles = section.querySelector('.floating-particles');
        if (existingParticles) {
            existingParticles.remove();
        }

        // Crear contenedor de partículas
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'floating-particles';
        section.appendChild(particlesContainer);

        // Crear partículas
        for (let i = 0; i < 40; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Posición aleatoria
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const delay = Math.random() * 15;
            const size = Math.random() * 4 + 3;
            const opacity = Math.random() * 0.5 + 0.3;
            
            particle.style.cssText = `
                left: ${posX}%;
                top: ${posY}%;
                width: ${size}px;
                height: ${size}px;
                opacity: ${opacity};
                animation-delay: ${delay}s;
            `;
            
            particlesContainer.appendChild(particle);
        }
    });
}

// Función para cambiar entre modo claro y oscuro
function cambiarModo() {
    const body = document.body;
    const modoBtn = document.getElementById("modoBtn");
    const iconoModo = modoBtn.querySelector("i");
    
    body.classList.toggle("dark-mode");
    
    if (body.classList.contains("dark-mode")) {
        iconoModo.className = "fa-solid fa-sun";
        localStorage.setItem("modo", "dark");
    } else {
        iconoModo.className = "fa-solid fa-moon";
        localStorage.setItem("modo", "light");
    }
}

// Inicializar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    // Verificar y aplicar el modo guardado
    const modoGuardado = localStorage.getItem("modo");
    const modoBtn = document.getElementById("modoBtn");
    const iconoModo = modoBtn.querySelector("i");
    
    if (modoGuardado === "dark") {
        document.body.classList.add("dark-mode");
        iconoModo.className = "fa-solid fa-sun";
    }
    
    // Crear partículas iniciales
    createParticles();
});
