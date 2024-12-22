// Sélectionne l'icône du menu et la barre de navigation
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Ajoute un événement au clic sur l'icône du menu
menuIcon.onclick = () => {
    // Alterne entre les classes 'bx-x' et normale pour changer l'icône
    menuIcon.classList.toggle('bx-x');
    // Alterne la classe 'active' pour afficher/masquer la barre de navigation
    navbar.classList.toggle('active');
};

// Sélectionne le popup (fenêtre modale)
let popup = document.getElementById("popup");

// Sélectionne le bouton pour fermer le popup
let closeBtn = document.getElementById("close-popup");

// Sélectionne tous les boutons de type "review" dans les cartes de projet
let reviewButtons = document.querySelectorAll('.project-card .btn');

// Parcourt tous les boutons pour leur ajouter un événement au clic
reviewButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Récupère le titre du projet depuis la carte parente
        let projectTitle = this.parentElement.querySelector('h3').innerText;
        // Récupère la description du projet depuis la carte parente
        let projectDescription = this.parentElement.querySelector('p').innerText;
        // Récupère l'image du projet depuis la carte parente
        let projectImage = this.parentElement.querySelector('img').src;

        // Insère les détails récupérés dans les éléments du popup
        document.getElementById('popup-title').innerText = projectTitle;
        document.getElementById('popup-description').innerText = projectDescription;
        document.getElementById('popup-image').src = projectImage;

        // Affiche le popup en modifiant son style
        popup.style.display = "block";
    });
});

// Ferme le popup lorsqu'on clique sur le bouton de fermeture
closeBtn.onclick = function() {
    popup.style.display = "none";
};

// Ferme le popup lorsqu'on clique à l'extérieur de celui-ci
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
};

// Sélectionne le bouton "Retour en haut"
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Ajoute un événement pour surveiller le défilement de la page
window.onscroll = function() {
    // Si la page est défilée de plus de 100 pixels, afficher le bouton
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        // Sinon, masquer le bouton
        scrollToTopBtn.style.display = "none";
    }
};

// Définit le comportement au clic sur le bouton "Retour en haut"
scrollToTopBtn.onclick = function() {
    // Défile la page vers le haut avec un effet de défilement fluide
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
};
