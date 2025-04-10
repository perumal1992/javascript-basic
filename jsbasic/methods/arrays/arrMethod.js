
// concat (array1.array2)
var arr1=[1,2];
var arr2=[3,4];
console.log(arr1.concat(arr2));// two variable value are joined

//filter (callback)
const arr3 =[1,2,3,4,5,6];
console.log(arr3.filter(function(arr3){
    return arr3%2==0;
}));//we filter even number only

//find 
const arr4 =[1,2,3,4,5];
console.log(arr4.find((arr4)=>arr4<3));

//map(callback)
const arr5=[1,2,3,4,5];
console.log(arr5.map((arr5)=>arr5/2));//outpuy:[ 0.5, 1, 1.5, 2, 2.5 ]

//push() //we cannot use callback fun 
const arr6=[1,2,3,4,5];
arr6.push(5,8,6);
console.log(arr6)
//output:
// [1, 2, 3, 4,
// 5, 5, 8, 6
// ]

//pop() //weclar last one element
const arr7=[1,2,3,4];
arr7.pop();
console.log(arr7);//output:[1,2,3]

//example arrays
//using OR symbol
const arrys=[1,2,3,4,5,6,7,8,9];
console.log(arrys.filter((arrys)=>arrys===8||arrys===3));//i get both true value,if any one false then i will get true value only
console.log(arrys.filter((arrys)=>arrys===80 &&arrys ===3));//not show value 

//