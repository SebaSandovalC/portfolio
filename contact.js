// Script para animar el título de contacto
document.addEventListener('DOMContentLoaded', function() {
    // Aplicar estilos y animación directamente al elemento
    const tituloContacto = document.getElementById('titulo-contacto');
    if (tituloContacto) {
        // Asegurarse de que no tenga otras clases que puedan causar conflictos
        tituloContacto.className = 'titulo-unico';

        // Crear estilo específico para este elemento
        const style = document.createElement('style');
        style.textContent = `
            #titulo-contacto {
                font-family: 'Syne', sans-serif;
                font-size: 36px;
                text-transform: uppercase;
                letter-spacing: 6px;
                margin-bottom: 40px;
                position: relative;
                display: inline-block;
                text-align: center;
                width: 100%;
                color: #ffffff;
                text-shadow: 0 0 10px rgba(255, 255, 255, 0.3),
                            0 0 20px rgba(255, 255, 255, 0.2),
                            0 0 30px rgba(255, 255, 255, 0.1);
                transition: all 0.3s ease;
                padding: 10px 20px;
                text-decoration: none;
                background: none;
            }

            #titulo-contacto::before {
                display: none !important;
            }

            #titulo-contacto::after {
                content: '';
                position: absolute;
                width: 50px;
                height: 2px;
                background: linear-gradient(90deg, 
                    transparent,
                    var(--accent-color),
                    #ff8ab3,
                    transparent);
                bottom: -10px;
                left: 50%;
                transform: translateX(-50%);
                animation: tituloContactoPulse 2s ease-in-out infinite;
            }

            @keyframes tituloContactoPulse {
                0%, 100% {
                    width: 50px;
                    opacity: 1;
                }
                50% {
                    width: 100px;
                    opacity: 0.5;
                }
            }

            #titulo-contacto:hover {
                text-shadow: 0 0 15px rgba(255, 255, 255, 0.4),
                            0 0 25px rgba(255, 255, 255, 0.3),
                            0 0 35px rgba(255, 255, 255, 0.2);
                transform: translateY(-2px);
            }
        `;
        document.head.appendChild(style);
    }
}); 