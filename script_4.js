const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

repeatNum = 70

// Exercice 1
console.log("-".repeat(repeatNum))
console.log("1. Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70")
console.log("-".repeat(repeatNum))

for(let index in entrepreneurs) {

  if (entrepreneurs[index].year > 1969 && entrepreneurs[index].year < 1980) {

    console.log(entrepreneurs[index]);
  }

}

// Exercice 2
array = []

for(let index in entrepreneurs) {

  if (entrepreneurs[index].year > 1969 && entrepreneurs[index].year < 1980) {

    console.log(entrepreneurs[index]);
    array.push(entrepreneurs[index].first + " " + entrepreneurs[index].last)

  }
}
console.log("-".repeat(repeatNum))
console.log("2. Sors une array qui contient le prénom et le nom des entrepreneurs")
console.log("-".repeat(repeatNum))
console.log(array);

// Exercice 3
console.log("-".repeat(repeatNum))
console.log("3. Quel âge aurait chaque inventeur aujourd'hui ?")
console.log("-".repeat(repeatNum))

for(let index in entrepreneurs) {

  if ((entrepreneurs[index]).year > 1969 && (entrepreneurs[index]).year < 1980) {
    age = 2019 - entrepreneurs[index].year
    console.log(entrepreneurs[index].first + " " + entrepreneurs[index].last + " aurait " + age + " ans aujourd'hui.");
  }
}

// Exercice 4
console.log("-".repeat(repeatNum))
console.log("4. Trie les entrepreneurs par ordre alphabétique du nom de famille.")
console.log("-".repeat(repeatNum))

array = []

for(let index in entrepreneurs) {

  if ((entrepreneurs[index]).year > 1969 && (entrepreneurs[index]).year < 1980) {

    array.push(entrepreneurs[index].last + " " + entrepreneurs[index].first)

  }
}

console.log(array.sort())
