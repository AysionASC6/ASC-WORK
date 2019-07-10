const heroes = [
    'Iron Man',
    'Batman',
    'Black Panther',
    'Captain America',
    'Spiderman',
];

console.log('The length is...', heroes.length);

heroes.push('Captain Marvel');
console.log(heroes);
heroes[1] = "Pepper Potts";

heroes.pop();
console.log(heroes);
heroes.length = 0; 
console.log(heroes);

console.log(heroes);