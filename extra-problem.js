


// function oddNumber(number){
//     let sum = 0;
//     for(let i = 0; i < number.length; i++){
//         let index = number[i];
//         if(index % 2 !== 0){
//             sum = sum + index
//         }
//     }
//     return sum;
// }
// let thisArray = [11, 33, 54, 20, 7, 13,56, 34];
// let getOddNumber = oddNumber(thisArray);
// console.log(getOddNumber);


// Write a function findOddSum() that will take the array [11, 33, 54, 20, 7, 13,56, 34] as the input parameter and will return the sum of the odd numbers.

// function findOddSum(number){
//     let oddNumber = [];
//     for(let i = 0; i < number.length; i++){
//         let index = number[i];
//         let element = index;
//         if(element % 2 !== 0){
//             oddNumber.push(element);
//         }
//     }
//     return oddNumber;
// }
// let thisArray = [11, 33, 54, 20, 7, 13, 56, 34];
// let oddSum = findOddSum(thisArray);
// console.log(oddSum);

// ক োন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কিনা। সেটা চেক করার একটা ফাংশন লিখ ো।

function findPrime(number){
    if(number == 2){
        return true;
    }
    for(let i = 2; i < number; i++){
        if(number % i == 0){
            return false;
        }
    }
    return true;
}
let thisNumber = 12;
let getResult = findPrime(thisNumber);
console.log(getResult);