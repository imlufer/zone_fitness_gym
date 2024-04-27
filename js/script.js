window.addEventListener('scroll', function(){
    var header = document.querySelector(`header`);
    header.classList.toggle('sticky', window.scrollY > 0);
});

function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}
//ANIMACION 
// Obtener todos los elementos que deseas animar
const clases = document.querySelectorAll('.sec-clases');
const couches = document.querySelectorAll('.sec-couches');
const contacto = document.querySelectorAll('.sec-contacto');


// Función para verificar la posición de los elementos y mostrarlos si están en el viewport
function showElementsOnScroll() {
    clases.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Si el elemento está más abajo que la mitad de la ventana gráfica, mostrarlo
        if (elementTop < windowHeight / 2) {
            element.classList.add('visible');
            element.classList.remove('hidden');
        } else {
            element.classList.add('hidden');
            element.classList.remove('visible');
        }
    });
    couches.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Si el elemento está más abajo que la mitad de la ventana gráfica, mostrarlo
        if (elementTop < windowHeight / 2) {
            element.classList.add('visible');
            element.classList.remove('hidden');
        } else {
            element.classList.add('hidden');
            element.classList.remove('visible');
        }
    });
    contacto.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Si el elemento está más abajo que la mitad de la ventana gráfica, mostrarlo
        if (elementTop < windowHeight / 2) {
            element.classList.add('visible');
            element.classList.remove('hidden');
        } else {
            element.classList.add('hidden');
            element.classList.remove('visible');
        }
    });
   
}


// Función para manejar la animación al hacer scroll
function handleScroll() {
    window.requestAnimationFrame(showElementsOnScroll);
}

// Agregar un listener para el evento scroll
window.addEventListener('scroll', handleScroll);

// Llamar a la función una vez al cargar la página para verificar el estado inicial
showElementsOnScroll();
