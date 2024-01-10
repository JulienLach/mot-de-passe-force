// Fonction tester la force d'un mot de passe avec en paramètre le mot de passe 
document.getElementById('formulaire').addEventListener('submit', function (event) {
    event.preventDefault();

    // Récupérer la valeur de mot du passe
    const motDePasse = document.getElementById("password").value
    // Initialiser la taille du mot de passe
    let longueurMotDePasse = motDePasse.length
    // Initialiser le nombre de combinaisons possibles du mot de passe
    let nombreCombinaisonsPossibles = 0
    // Initialiser la taille de l'alphabet utilisé
    let tailleDeLalphabet = 0
    // Déclarer les Regex
    const majusculesRegex = /[A-Z]/;
    const minusculesRegex = /[a-z]/;
    const nombreRegex = /[0-9]/;
    const carateresSpeciauxRegex = /[^a-zA-Z0-9]/; // tout ce qui n'est pas minusmule, majuscule, et nombre

    if (motDePasse.match(majusculesRegex)) {
        tailleDeLalphabet += 26; // ajouter 26 pour les 26 lettres de l'alphabet
    }

    if (motDePasse.match(minusculesRegex)) {
        tailleDeLalphabet += 26;
    }

    if (motDePasse.match(nombreRegex)) {
        tailleDeLalphabet += 10;
    }

    if (motDePasse.match(carateresSpeciauxRegex)) {
        tailleDeLalphabet += 32;
    }

    nombreCombinaisonsPossibles = Math.pow(tailleDeLalphabet, longueurMotDePasse)

    console.log("Mot de passe : " + motDePasse)
    console.log("Longueur du mot de passe : " + longueurMotDePasse)
    console.log("Taille de l'alphabet : " + tailleDeLalphabet)
    console.log("Nombre de combinaison possibles : " + nombreCombinaisonsPossibles)

    document.getElementById("possibilites").textContent = nombreCombinaisonsPossibles

    // Comparaison avec une valeur seuil (10^30)
    if (nombreCombinaisonsPossibles >= Math.pow(20, 30)) {
        document.getElementById("force").textContent = "Fort";
    } else if (nombreCombinaisonsPossibles >= Math.pow(10, 20)) {
        document.getElementById("force").textContent = "Moyen";
    } else {
        document.getElementById("force").textContent = "Faible";
    }

});


