

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument
const people = [
    person = {
        name: "Chris",
        age: 29
    }, 
    person2 = {
        name: "Robert",
        age: 51
    },
    person3 = {
        name: "Evy",
        age: 28
    },
    person4 = {
        name: "Karl",
        age: 35
    },
    person5 = {
        name: "Milo",
        age: 45
    }
]

function ageCheck(argument){
    for (let pers of argument){
        if (pers.age > 30){
            console.log(pers.name)
        }
    }

}

ageCheck(people)

}

module.exports = { uppg8 };