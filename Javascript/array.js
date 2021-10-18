const users = ['Guilherme', 'Gabriela', 'Pedro'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: 'Guilherme',
        age: 26,
        gender: gender.MAN
    },
    {
        name: 'Gabriela',
        age: 39,
        gender: gender.WOMAN
    },
    {
        name: 'Pedro',
        age: 12,
        gender: gender.MAN
    }
];

// Retornar a quantidade de itens de um array
//console.log('Items:', persons.length);

// Verificar se é array
//console.log('A variável é um array:', Array.isArray(persons));

// Iterar os itens do array
persons.forEach((person, index, arr) => {
    //console.log(`Nome: ${person.name} index:${index}`, arr);
});

// Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN);
//console.log('\nNova lista apenas com homens:', mens);

// Retornar um novo
const personsWithCourse = persons.map(person => {
    person.course = 'Introdução ao Javascript';
    return person;
});

//console.log('\nPessoas com a adição do course:', personsWithCourse);

// Transformar um array em outro tipo
const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);

//console.log('\nSoma de idade das pessoas', totalAge);

// Juntando operações
const totalEvenAges = persons
                        .filter(person => person.age % 2 === 0)
                        .reduce((age, person) => {
                            age += person.age;
                            return age;
                        }, 0);

console.log('\nSoma de idades das pessoas com idade par', totalEvenAges);