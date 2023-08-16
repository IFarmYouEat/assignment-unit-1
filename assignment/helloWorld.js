console.log('Hello World!');

let firstName = 'Brock';
console.log(firstName);

let lastName = 'Nelson';

console.log(lastName);

let fullName = firstName + ' ' + lastName;
console.log(fullName);

let temperature = 80;
console.log('Temperature:', temperature);

let loggedIn = true;
console.log('logged in:',loggedIn);

let isRaining = true;

if(loggedIn){
    console.log('Welcome ',fullName);
}else console.log('Welcome, Guest')

if (temperature < 85 && !isRaining) {
    console.log('Great day for a walk!');
}else if(isRaining){
    console.log('An enjoyable walk will require an umbrella');
}else{
    console.log('Good day to learn to code');
}
