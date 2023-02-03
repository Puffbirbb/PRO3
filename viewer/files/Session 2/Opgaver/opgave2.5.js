let p1 = {Name: 'James', Email: 'JN@BusinessShit.net', Number: 12243212}
let p2 = {Name: 'Jesper', Email: 'JEBOI@SchoolNotCool.usa', Number: 99127312}
let p3 = {Name: 'Mikkel', Email: 'Mik@outlook.co.dk', Number: 12342234}
let p4 = {Name: 'Anna', Email: 'AnnasEgen@google.dk', Number: 12352324}
let p5 = {Name: 'Sofie', Email: 'BlomsterPigen@Himmel.gud', Number: 82938612}
let p6 = {Name: 'Marie', Email: 'Marie@frfr.com', Number: 83475915}

let personArray = [p1, p2, p3, p4, p5, p6]

console.log('All the Persons \n')

for (let n in personArray){
    console.log(personArray[n]);
}

console.log('Reading Person 2 \n')

console.log(personArray[2])

console.log('Adding Person 7 \n')

personArray[6] = {Name: 'Søren', Email: 'SJR@ongod.earth', Number: 87240213}

console.log('All the Persons \n')

for (let n in personArray){
    console.log(personArray[n]);
}

console.log('Editing Person 0 \n')

personArray[0] = {Name: 'Jameline', Email: 'JN@BusinessShit.net', Number: 12243212}

console.log('All the Persons \n')

for (let n in personArray){
    console.log(personArray[n]);
}

console.log('Deleting Person 3 \n')

delete personArray[2]

console.log('All the Persons \n')

for (let n in personArray){
    console.log(personArray[n]);
}