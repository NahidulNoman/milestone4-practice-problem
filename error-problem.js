// Write a function called foo() which prints “foo” and a function called bar()which prints “bar”. Call function bar() in the foo() function after printing. What will be the output? Now call the foo() to see the output.



// Challenging: Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.






// Suppose, you have an array with 8 elements. Find the smallest element of that array.
// Now for the previous array, try to find the second largest element.

// function lowNumber(numbers){
//     let lowest = numbers[0];
//     let seclowest = numbers[1];
// for(let i = 0; i < numbers.length; i++){
//     let  element = numbers[i];
//     if(element < lowest){
//         seclowest = lowest
//         lowest = element;
        
//     }  
//     else if(element < seclowest){
//         seclowest = element
//     }
// }
// return seclowest  ;
// }
// let thisArray = [11, 33, 54, 20, 7, 13,56, 34];
// let getLowerNumber = lowNumber(thisArray);
// console.log(getLowerNumber);


// this array 10 times reverse way using for loop

// let myStudy = ['unlock1', 'video2', 'practice3', 'support4'];
// for(let i = myStudy.length; i > 0; i--){
//     console.log(myStudy[i]);
// }

// this array 10 times reverse way using while loop



function countVowel(letter){
    let vowelCount = [];
    let thoseVowel = ['a','e','i','o','u'];
    for(i = 0; i < letter.length; i++){
        let vowel = letter[i];
        if(thoseVowel.indexOf(vowel) !== -1){
         vowelCount.push(vowel);
        }
    }return vowelCount;
}

// function countVowel(letter){
//     let count = letter.match(/[aeiou]/gi);
//     return count;
// }

let thisVowel = 'javascript';
let getVowel = countVowel(thisVowel);
console.log(getVowel);