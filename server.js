console.log('####', 'Nodemon en NodeJS is gestart');

const person = {
  name: 'Lino',
  age: 45,
  greet() {
    console.log('####', 'Hello, my name is ' + name);
  }
};

const printName = ({ name, age }) => {
  console.log('####- de naam:', name, +age);
};

printName(person);

const { name, age } = person;
console.log('####', name, age);

const hobbies = ['Sports', 'Flyfishing', 'cycling'];
const [hobbie1, hobbie2] = hobbies;
console.log('####', hobbie1, hobbie2);
