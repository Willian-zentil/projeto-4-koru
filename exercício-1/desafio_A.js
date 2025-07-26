const person = { name: "Maria", age: 25 };

function addIsAdultPerson(person) {

    let isAdult = (person.age >= 18 ? true : false)
    let completePerson = {...person, isAdult }

    return completePerson
}

console.log(addIsAdultPerson(person))