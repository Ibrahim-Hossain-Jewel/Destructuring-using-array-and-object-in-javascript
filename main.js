// var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T'];
// var numbers = [1,2,3,4,5,6,7,8,9,0];
// const [a,b,,...rest] = alphabet;
// //Now destructuring the alphabet;
// const newArray = [...alphabet,...numbers];
// const [x,y] = newArray;
// console.log(a);
// console.log(b);
// console.log(newArray);
// console.log(x);
// console.log(y);
// //destructuring using function
// function add(a,b) {
//     return [a*b,a+b];   
// }

// let [multi,addValue,division = "set a division value"] = add(3,2); //the add() method returning an array and now destructing the array
// //and now set a default value for if last node dose not found or an array element value dose not found then set a default value. so set a value for undefined value.
// //Real power of object destructuring  in javascript object.
// console.log(multi);
// console.log(addValue);
// console.log(division);
// //make two object destructuring in javascript
// const person1 = {
//     name: 'Ibrahim Hossain',
//     age: 23,
//     address: {
//         country: 'bangladesh',
//         village: 'gokorno'
//     },
//     gram: 'gokorno'
//     //here the address property contain another object's property here the country is nested property
// }
// //now Destructuring of property
// const {name,age,address:{country,village}} = person1; //here person1 is destructured 
// console.log(name);
// console.log(age);
// console.log(country);
// //the village is destructured now you can call from any where
// console.log(village);
// //now combine two objects
// const person2 = {
//     name: 'Hossain neiser',
//     age: 30,
//     address:{
//         country: 'America',
//         village: 'California'
//     }
// }
// //now make a function for object destructure argument
// function personInfo(user) {
//     console.log(`My boss name is  ${user.name} and his age is ${user.age} are address, country ${user.address.country} and village is ${user.address.village} and favorite food is ${user}`);
// }
// personInfo(person2);
//now you have make multiple array using literal array notation.

let nameList = [
    ['work',9],
    ['Eat',1],
    ['commute',2],
    ['Game play',1],
    ['sleep',7]
];
nameList.splice(0,1,['book',4]); // method splice(); here 0 is the index number 1 is the column number.
console.table(nameList);
//about push() method push() use to insert array data or nested array inside a array at the ending point.

//about splice() method the splice method use to insert multi dimension array or single dimension array in created array the splice method it take index and value of the array apart from that the splice methods index can be single dimension and single value and also it can be multi dimension or single dimension.

//now apply the forEach() method on multi dimensional array.
nameList.forEach((activity)=>{
    let percentageValue = ((activity[1]/24) * 100).toFixed();
    activity[2] = percentageValue + "%";
});
console.table(nameList);

//Remove a specific array element by the splice() method.
// nameList.splice
//now remove column using forEach() method;
nameList.forEach((activity) =>{
    activity.pop(1);
});
console.table(nameList);

//Now iterate the multiple array and findout all the value from the nameList multidimensional array.
for (let index = 0; index < nameList.length; index++) {
    //findout the inner multi dimensional array
    const innerValue = nameList[index].length;
    for (let inner = 0; inner < innerValue; inner++) {
        console.log('['+index+' '+inner+'] '+nameList[index][inner]);
    }
}
//Now findout the nested array value and index using forEach() iteration method.
nameList.forEach( activity=>{
    nameList.forEach( data =>{
        console.log(data);
    });
});
//Use the indexOf() method in array it can be multi dimensional or single dimensional 
let oneDimensional = [1,2,3,4,5,2,3,2,1];
let index = 0;//The indexOf() methods default position is 0 that means first searchValue is selected.
console.log(oneDimensional.indexOf(1,1));