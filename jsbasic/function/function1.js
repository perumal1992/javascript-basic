//Declaration function
function greet(name){
    return (`welcome,${name}!`);
}
console.log(greet("vp"));

//Function Expression 
//a)anonymous function
const greets = function (name){
    return (`welcome,${name}!`);
}
console.log(greets("rv"));
//b)named function
const gre = function sayHello(name){
    return (`welcome,${name}!`);
}
console.log(gre("sv"));
//immediatly invoke function expression
(function(){
return console.log("LIFE EXtented!")
})();
//arrow function
const greetArrow = (name)=>`hello,${name}`;
console.log(greetArrow("sankavi"));
//higher order function
function processsure (user,callback){
    callback(user);
}
processsure("the party",(name)=>console.log(`welcome,${name}!`)); //output:
//callback function
function fetchData(callback){
    setTimeout(()=>callback("Data Received"),1000);
}
fetchData((message) => console.log(message));