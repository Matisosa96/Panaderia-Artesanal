let currentIndex = 0; 

// Array  del carrusel
const images = [
    'images/carousel1.jpg',
    'images/carousel2.jpg',
    'images/carousel3.jpg',
    'images/carousel4.jpg',
    
];

// elemento de la imagen en el carrusel
const carouselImage = document.getElementById('carouselImage');

// mostrar la imagen anterior
function prevImage() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    carouselImage.src = images[currentIndex];
}

//  mostrar la siguiente imagen
function nextImage() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    carouselImage.src = images[currentIndex];
}

// Inicializar la imagen al cargar la pagina
carouselImage.src = images[currentIndex]; 