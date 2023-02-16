// Récupération de toutes les icônes de téléchargement dans un tableau
var downloadIcons = document.querySelectorAll('.download-icon');

// Parcours du tableau et ajout d'un gestionnaire d'événements sur chaque icône
for (var i = 0; i < downloadIcons.length; i++) {
  downloadIcons[i].addEventListener('click', function() {
    // Récupération de l'image associée
    var image = this.parentNode.querySelector('img');
    // Création d'un élément d'ancrage avec l'URL de l'image
    var anchor = document.createElement('a');
    anchor.href = image.src;
    // Attribution d'un nom de fichier à l'élément d'ancrage
    anchor.download = image.alt + '.jpeg';
    // Clic sur l'élément d'ancrage pour déclencher le téléchargement
    anchor.click();
  });
}


