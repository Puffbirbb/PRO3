persons = [
    { 
        id: 1,
        name: 'Person the First',
        age: 4220,
        phoneNumber: '123-456-7890'
    }, 
    { 
        id: 2,
        name: 'Person the Second',
        age: 3992,
        phoneNumber: '123-456-7891'
    },
    { 
        id: 3,
        name: 'Person the Third',
        age: 1000,
        phoneNumber: '123-456-7892'
    },
    { 
        id: 4,
        name: 'Person the Fourth',
        age: 295,
        phoneNumber: '123-456-7893'
    },
    { 
        id: 5,
        name: 'Person the Fifth',
        age: 15,
        phoneNumber: '123-456-7894'
    }
]

uniquephoneNumber = (string) => string === ('123-456-7894');

const personPhone = persons.filter((person) => uniquephoneNumber(person.phoneNumber));

console.log(personPhone[0]);

const youngestPerson = persons.sort((a, b) => a.age - b.age);

console.log(youngestPerson[0]);

allPersons = persons.reduce((acc, person) => person.name + ", " + acc, "");

console.log(allPersons);

underThirtyPersons = persons.filter((person) => person.age < 30);

underThirtyPersons.forEach((person) => console.log(person.name, person.phoneNumber));