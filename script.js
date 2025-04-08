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
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

// Función para crear partículas flotantes
function createParticles() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        // Eliminar contenedores de partículas existentes antes de crear nuevos
        const existingParticleContainers = section.querySelectorAll('.particles-container');
        existingParticleContainers.forEach(container => container.remove());
        
        // Crear contenedor para las partículas
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles-container';
        particlesContainer.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            pointer-events: none;
            z-index: 1;
        `;
        
        // Añadir el contenedor de partículas a la sección
        section.appendChild(particlesContainer);
        
        // Crear partículas
        for (let i = 0; i < 40; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Posición aleatoria
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            
            // Tamaño aleatorio
            const size = Math.random() * 5 + 1;
            
            // Opacidad aleatoria
            const opacity = Math.random() * 0.5 + 0.1;
            
            // Retraso aleatorio para la animación
            const delay = Math.random() * 5;
            
            // Establecer estilos de la partícula
            particle.style.cssText = `
                position: absolute;
                left: ${posX}%;
                top: ${posY}%;
                width: ${size}px;
                height: ${size}px;
                background-color: rgba(255, 255, 255, ${opacity});
                border-radius: 50%;
                pointer-events: none;
                animation: float 5s ease-in-out infinite;
                animation-delay: ${delay}s;
            `;
            
            particlesContainer.appendChild(particle);
        }
    });
}

// Definir la animación de float en CSS si no existe
if (!document.querySelector('style#particle-styles')) {
    const style = document.createElement('style');
    style.id = 'particle-styles';
    style.textContent = `
        @keyframes float {
            0%, 100% {
                transform: translateY(0) translateX(0);
            }
            25% {
                transform: translateY(-15px) translateX(15px);
            }
            50% {
                transform: translateY(-25px) translateX(0);
            }
            75% {
                transform: translateY(-15px) translateX(-15px);
            }
        }
    `;
    document.head.appendChild(style);
}

// Activar modo oscuro por defecto al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    // Establecer modo oscuro
    document.body.classList.add('dark-mode');
    
    // Crear partículas
    createParticles();
});

// Detectar el scroll para aplicar la animación de la barra de habilidades
window.onscroll = function() { 
    efectoHabilidades()
};

// Función que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");
    }
}
