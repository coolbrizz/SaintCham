function toggleBox(element) {
    // Toggle the 'expanded' class only on the clicked box
    element.classList.toggle("expanded");
}

let currentIndex = 0; 

function updateGallery() {
    const gallery = document.querySelector('.gallery3'); // Sélection de la galerie
    const images = gallery.querySelectorAll('img'); // Récupération de toutes les images

    // Cacher toutes les images
    images.forEach((img, index) => {
        img.style.display = (index >= currentIndex && index < currentIndex + 4) ? 'block' : 'none';
    });

    // Désactiver les boutons si on est au début ou à la fin de la galerie
    document.querySelector('.arrow.left').disabled = (currentIndex === 0); // Désactive le bouton gauche si au début
    document.querySelector('.arrow.right').disabled = (currentIndex >= images.length - 4); // Désactive le bouton droit si à la fin
}

function nextImage() {
    const images = document.querySelectorAll('.gallery3 img'); // Récupération de toutes les images
    if (currentIndex < images.length - 4) { // Vérifie si on peut avancer
        currentIndex++;
        updateGallery(); // Met à jour la galerie
    }
}

function prevImage() {
    if (currentIndex > 0) { // Vérifie si on peut reculer
        currentIndex--;
        updateGallery(); // Met à jour la galerie
    }
}

// Initialiser la galerie
updateGallery();
window.addEventListener('scroll', function() {
    const transitionLine = document.querySelector('.transition-line');
    const position = transitionLine.getBoundingClientRect().top;

    if (position < window.innerHeight && position > 0) {
        transitionLine.classList.add('visible');
    }
});
