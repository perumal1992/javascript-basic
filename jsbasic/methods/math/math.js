//math.abs 
//convert negative to positive
//direct method
console.log(Math.abs(-32));//output:32
//using array method
let arr1=[-23,-32,-70,-65];
let arrabs=arr1.map((num1)=>Math.abs(num1));
console.log(arrabs);

//Math.ceil  //decimal towholenumber
let arr2=[2.43,4.5,7.80,0.443];
let arrceil=arr2.map((num2)=>Math.ceil(num2));
console.log(arrceil);//output:[ 3, 5, 8, 1 ]

//Math.max(...)    //get maximum value
console.log(Math.max(1,4,2,7,3));//direct method

let arrmax=Math.max(-56,45,34,23,54,43-23);
console.log(arrmax);//output:54

//Math.random()   //  we can get random value 
 
let  randomNu=Math.random();
console.log(randomNu);//output:

let randomN=[4,5,6,7,8];
let randomNum=randomN[Math.floor(Math.random()*randomN.length)];
console.log(randomNum);