const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

repeatNum = 70

// Exercice 1
console.log("-".repeat(repeatNum))
console.log("1. Est-ce que tous les livres ont été au moins empruntés une fois ?")
console.log("-".repeat(repeatNum))

n = 0

for (let index in books) {

  if (books[index].rented === 0) {

    n += 1

  }
}

if (n === 0) {
  console.log("Oui, tous les livres ont été au moins empruntés une fois.")
} else {
  console.log("Non, tous les livres n'ont pas été au moins empruntés une fois.")
}


// Exercice 2
console.log("-".repeat(repeatNum))
console.log("2. Quel est livre le plus emprunté ?")
console.log("-".repeat(repeatNum))

  let u

for (let index in books) {

  if (books[index].rented > n) {
    n = books[index].rented
    u = books[index]
  }
}

console.log(u)

// Exercice 3
console.log("-".repeat(repeatNum))
console.log("3. Quel est le livre le moins emprunté ?")
console.log("-".repeat(repeatNum))

for (let index in books) {

if (books[index].rented < n) {
  n = books[index].rented
  u = books[index]
}
}

console.log(u)

// Exercice 4
console.log("-".repeat(repeatNum))
console.log("4. Trouve le livre avec l'ID: 873495")
console.log("-".repeat(repeatNum))

for (let index in books) {

if (books[index].id == 873495) {

    u = books[index]

  }
}
console.log(u)

// Exercice 5
console.log("-".repeat(repeatNum))
console.log("5. Supprime le livre avec l'ID: 133712")
console.log("-".repeat(repeatNum))

  books.shift()

console.log(books)


// Exercice 6
console.log("-".repeat(repeatNum))
console.log("6. Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).")
console.log("-".repeat(repeatNum))

array = []
for (let index in books) {

  array.push(books[index].title)

}

console.log(array.sort())
