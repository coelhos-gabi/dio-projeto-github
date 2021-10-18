const user = {
    name: 'Gabriela',
    lastName: 'Coelho'
}

//Recupera as chaves do objeto
console.log('Propriedade do objeto user:', Object.keys(user));

//Recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user:', Object.values(user));

//Retorna um array de arrays contenco [nome_prop, valor_prop]
console.log('\nLista de propriedades e valores:', Object.entries(user));

//Mergear(juntar) propriedades de objetos
//Adiciona fullname no user
Object.assign(user, {fullName: 'Gabriela Coelho'})

console.log('\nAdiciona a propriedade fullName no objeto user', user);
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, user, {age:99}))

// Previne todas as alterações em um objeto
const newObj = { foo: 'bar'};
Object.freeze(newObj); //congela

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariável newObj após as alterações:', newObj);

// Permite apenas a alteração de propriedades existentes em um objeto
const person = {name: 'Gabriela'};
Object.seal(person);

person.name = 'Gabriela Coelho';
delete person.name;
person.age = 26;

console.log('\nVariável person após as alterações:', person)