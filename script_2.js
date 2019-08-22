// Initialise result
var result = 1
// Un prompt s'affiche avec la question suivante
for(let input = prompt("De quel nombre veut tu calculer la factorielle ?"); input !=0; input--){

result *= input

}

console.log("Le resultat est : " + result)
