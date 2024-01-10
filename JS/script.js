// Partie 1 : Mot de passe
// Implémentez une fonction qui prend une chaine de caractères en
// paramètre (un mot de passe) et qui retourne un niveau de sécurité sous
// la forme d’un entier. 
// Vous utiliserez les expressions régulières
// (regex) pour connaitre l’alphabet utilisé (majuscules, minuscules,
// chiffres, caractères spéciaux). Avec cet taille d’alphabet et la
// taille du mot de passe vous pouvez calculer la force du mot de passe
// avec la formule a
// n où a est le nombre de caractères possibles et n la
// taille du mot de passe. Cette formule donne le nombre de combinaisons
// possibles. 


// Fonction tester la force d'un mot de passe avec en paramètre le mot de passe 
document.getElementById('formulaire').addEventListener('submit', function (event) {
    event.preventDefault();

    // Récupérer la valeur de mot du passe
    const motDePasse = document.getElementById("password").value
    // Initialiser la taille du mot de passe
    let longueurMotDePasse = motDePasse.length
    // Initialiser la force du mot de passe
    let nombreCombinaisonsPossibles = 0
    // Initialiser la taille de l'alphabet utilisé
    let tailleDeLalphabet = 0
    // Déclarer les Regex
    const majusculesRegex = /[A-Z]/;
    const minusculesRegex = /[a-z]/;
    const nombreRegex = /[0-9]/;
    const carateresSpeciauxRegex = /[!@#$%^&*()_+-={}|;':",.<>?~]/;

    // Tester si le mot de passe contient des Majuscules
    if (majusculesRegex.test(motDePasse)) {
        tailleDeLalphabet++;
    }
    // Tester si le mot de passe contient des minuscules
    if (minusculesRegex.test(motDePasse)) {
        tailleDeLalphabet++;
    }
    // Tester si le mot de passe contient des nombre
    if (nombreRegex.test(motDePasse)) {
        tailleDeLalphabet++;
    }
    // Tester si le mot de passe contient des caractères spéciaux
    if (carateresSpeciauxRegex.test(motDePasse)) {
        tailleDeLalphabet++;
    }

    nombreCombinaisonsPossibles = Math.pow(longueurMotDePasse, tailleDeLalphabet)

    console.log("Mot de passe : " + motDePasse)
    console.log("Longueur du mot de passe : " + longueurMotDePasse)
    console.log("Taille de l'alphabet : " + tailleDeLalphabet)
    console.log("Nombre de combinaison possibles : " + nombreCombinaisonsPossibles)



});