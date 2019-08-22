2/* UCU ou UCC ou UCA ou UCG ou AGU ou AGC => Sérine
CCU ou CCC ou CCA ou CCG => Proline
UUA ou UUG => Leucine
UUU ou UUC => Phénylalanine
CGU ou CGC ou CGA ou CGG ou AGA ou AGG => Arginine
UAU ou UAC => Tyrosine

*/

var arn1 = 'CCGUCGUUGCGCUACAGC';
var arn2 = 'CCUCGCCGGUACUUCUCG';

var result1 = []
var result2 = []

// Decompose string en array de 3 caractères
arn1 = arn1.match(/.{1,3}/g);
arn2 = arn2.match(/.{1,3}/g);

// Boucle qui met dans une array "result1" en fonction des 3 caractères la bonne protéine
for (let index in arn1) {

if (arn1[index] == "UCU" || arn1[index] == "UCC" || arn1[index] == "UCA" || arn1[index] == "UCG" || arn1[index] == "AGU" || arn1[index] == "AGC") {
    result1.push("Sérine")
} else if (arn1[index] == "CCU" || arn1[index] == "CCC" || arn1[index] == "CCA" || arn1[index] == "CCG") {
      result1.push("Proline")
    } else if (arn1[index] == "UUA" || arn1[index] == "UUG") {
          result1.push("Leucine")
        } else if (arn1[index] == "UUU" || arn1[index] == "UUC") {
              result1.push("Phénylalanine")
            } else if (arn1[index] == "CGU" || arn1[index] == "CGC" || arn1[index] == "CGA" || arn1[index] == "CGG" || arn1[index] == "AGA" || arn1[index] == "AGG") {
                  result1.push("Arginine")
                } else if (arn1[index] == "UAU" || arn1[index] == "UAC") {
                      result1.push("Tyrosine")
                    }
}
// Résultat 1
console.log(result1.join("-"))

// Boucle qui met dans une array "result2" en fonction des 3 caractères la bonne protéine
for (let index in arn2) {

if (arn2[index] == "UCU" || arn2[index] == "UCC" || arn2[index] == "UCA" || arn2[index] == "UCG" || arn2[index] == "AGU" || arn2[index] == "AGC") {
    result2.push("Sérine")
} else if (arn2[index] == "CCU" || arn2[index] == "CCC" || arn2[index] == "CCA" || arn2[index] == "CCG") {
      result2.push("Proline")
    } else if (arn2[index] == "UUA" || arn2[index] == "UUG") {
          result2.push("Leucine")
        } else if (arn2[index] == "UUU" || arn2[index] == "UUC") {
              result2.push("Phénylalanine")
            } else if (arn2[index] == "CGU" || arn2[index] == "CGC" || arn2[index] == "CGA" || arn2[index] == "CGG" || arn2[index] == "AGA" || arn2[index] == "AGG") {
                  result2.push("Arginine")
                } else if (arn2[index] == "UAU" || arn2[index] == "UAC") {
                      result2.push("Tyrosine")
                    }
}

// Résultat 2
console.log(result2.join("-"))
