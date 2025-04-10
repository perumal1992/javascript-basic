//Promise.all()
//if we get both value at same time then we use .then method
let p1=Promise.resolve(3+6);
let p2=Promise.resolve(199+1);
Promise.all([p1,p2]).then((result)=>console.log(result));

//Promises.race()
//which result we neeed first that time we use set timeout method 
//here also use  .then method
let p3= new Promise((resolve)=>setTimeout(resolve,500,"one"));
let p4= new Promise((resolve)=>setTimeout(resolve,100,"two"));
Promise.race([p3,p4]).then((output)=>console.log(output));