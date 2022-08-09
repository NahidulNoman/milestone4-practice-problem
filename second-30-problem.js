// milestone4 second 30 problem try to solve this here we go ---

// 31) একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে ।

// function namota(number){
//     for( let i = 1; i<= 10; i++){
//         let index = number * i;
//         console.log(index);
//     }
// }
// let setNumber = 2;
// let yourResult = namota(setNumber);

// 32) একটা ফাংশন লিখবা যেটা যে ক োন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রি টার্ন করবে ।

// function upCase(alphabet){
//     let doWord = alphabet;
//     return doWord.toLowerCase();
// }
// let word = 'SYED NOMAN'
// let getWord = upCase(word)
// console.log(getWord);

// 33) fullName নামে একটা ফাংশন তৈরী কর যেটা ত োমার নামের প্রথম অংশ এবং ত োমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে । আর ত োমার নামের দইু অংশ জ োড়া দিয়ে আউটপুট হিসেবে ত োমার পূর্ন নাম রিটার্ন করে দিবে । যেমন ধর ো, hablu এবং kanto ইনপুট প্যারামি টার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে ।

// function fullName(first, second){
//     let yourName = first + ' ' + second;
//     return yourName;
// }
// let firstName = 'syed';
// let lastName = 'Noman'
// let getName = fullName(firstName,lastName);
// console.log(getName);

// 34) একটা ফাংশন লিখবা যে টাকে তুমি ক োন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে ।

// function dubbed(number){
//     let makeSquare = number * number
//     return makeSquare;
// }
// let number = 9;
// let getResult = dubbed(number);
// console.log(getResult);

// 35) Write a function that will take hour as the input parameter and will convert it into minutes and will return the result in minutes.

// function hourToMinute(hour){
//     let yourMinutes = hour * 60
//     return yourMinutes;
// }
// let thoseHour = 5;
// let getMinutes = hourToMinute(thoseHour);
// console.log(getMinutes);

// 36) Write a function findLeapYear() that will take the array [2023, 2024, 2025,2028, 2030] as the input parameter and will check if each year is a leap year. If a year is a leap year insert that year in a new array, return the new array and print the result.

// function findLeapYear(year){
//     let updateYear = [];
//     for(let i = 0; i < year.length; i++){
//         let checkYear = year[i] % 4;
//         if ( checkYear === 0){
//             updateYear.push(year[i])
//         }
//     }
//     return updateYear;
// }
// let thoseYear = [2023, 2024, 2025,2028, 2030, 2020, 2016];
// let getLeapYear = findLeapYear(thoseYear);
// console.log(getLeapYear);

// 37) Write a function findOddSum() that will take the array [ 5, 7, 8, 10, 45, 30 ] as the input parameter and will return the sum of the odd numbers.


// function findOddSum(numbers){
//         let updateOddNumber = 0;
//     for(let i = 0; i <numbers.length; i++){
//         let index = numbers[i];
//         let oddNumber = index % 2;
//         if(oddNumber !== 0){
//             updateOddNumber += index;
//         }
//     }
//     return updateOddNumber;
    
// }
// let thisArray = [ 5, 7, 8, 10, 45, 30, 3 ];
// let getResult = findOddSum(thisArray);
// console.log(getResult);


// 38) leapYear() নামে ফাংশন লিখ ো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক কর ো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার করবে ।


// function leapYear(year){
//     let isLeapYear = year % 4;
//     if(isLeapYear == 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// let selectYear = 2020;
// let getLeapYear = leapYear(selectYear);
// console.log(getLeapYear);


// 39) ত োমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে । সেই ফাংশনকে ক োন সংখ্যা প্যারামিটার হিসেবে দিলে , সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে ।

// function checkEvenOdd(number){
//     let check = number % 2;
//     if( check == 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// let thisNumber = 55;
// let getResult = checkEvenOdd(thisNumber);
// console.log(getResult);


// 40) এমন একটা ফ্যাংশনা লিখ ো যেটাকে তুমি ঘন্টাকে ইনপুট প্যারামিটার হিসেবে দিবে । আর সে সেই ঘন্টাকে মিনিটে কনভার্ট করে মিনিট রিটার্ন করবে ।


// function hourToMinute(hour){
//     let minutes = hour * 60;
//     return minutes;
// }
// let thoseHour = 3;
// let getMinutes = hourToMinute(thoseHour);
// console.log('you total minutes : ', getMinutes);

// 41) একটা লপু লিখতে হবে যেটা ১ থেকে ১০০ পর্যন্ত যত সংখ্যা আছে সটা দেখাব

// for(let i = 1; i <= 100; i++){
//     console.log(i)
// }

// 42) ৫০ থেকে ৮০ এর মধ্যে যত ো বিজ োড় সংখ্যা আছে সে গুলাকে দেখাবে ।

// for(let i = 50; i <= 80; i=i+2){
//     console.log(i);
// }


// 42) ৫০ থেকে ৮০ এর মধ্যে যত ো বিজ োড় সংখ্যা আছে সে গুলাকে দেখাবে ।

// for(let i =51; i <=80; i=i+2){
//     console.log(i);
// }


// 43) তিনটা সংখ্যা এর য োগ করতে পারবে এমন একটা ফাংশন লিখ ো


// function addSum(num1,num2,num3){
//     let sum = num1 + num2 + num3;
//     console.log(sum);
// }
// addSum(5,7,3);


// 44) ত োমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে । তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করব

// function celsiToFahren(celsi){
//         let getFahrenheit = (celsi * 9/5)+ 32;
//         return getFahrenheit;
// }
// let thisCelsius = 32;
// let getResult = celsiToFahren(thisCelsius);
// console.log(getResult);


// 45) একইভাবে উল্টা হিসাব করবে । যাতে ত োমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে ।

// function fahrenToCalsius(fahren){
//         let getFahrenheit = (fahren -32)* 5/9;
//         return getFahrenheit;
// }
// let thisFahren = 89.6;
// let getResult = fahrenToCalsius(thisFahren);
// console.log(getResult);

// 46) কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা ত োমাকে বলে দিবে । তুমি একটা ফাংশন দিয়ে বলেদিবে সে এ+ পাবে নাকি অন্য ক োন গ্রেড পাবে ।

// function result(marks){
//     if(marks > 80 && 80 < 100){
//         console.log('you got A+')
//     }
//     else if (marks > 70 && 70 < 100){
//         console.log('you got A')
//     }
//     else if (marks > 60 && 60 < 100){
//         console.log('you got A-')
//     }
//     else if (marks > 50 && 50 < 100){
//         console.log('you got B')
//     }
//     else if (marks > 40 && 40 < 100){
//         console.log('you got D')
//     }
//     else {
//         console.log('you fail maybe try next time')
//     }
// }
// let mark = 38;
// let getResult = result(mark)


// 47) সুদের হিসাব করবে ।


// function calculateInterest(p, t, r, n){

//     let amount = p * (Math.pow((1 + (r / n)), (n * t)));
//     let interest = amount - p;
//     return interest;
// }
// let principal = 2000;
// let rate = .08;
// let time = 5;
// let n = 12;
// const getInterest = calculateInterest(principal,time,rate,n);
// console.log(getInterest);

// 48) Suppose, you have an array with 8 elements. Find the smallest element of that array.
//  Now for the previous array, try to find the second largest element.


// let eightElement = ['mango','orange','bananas','potato','lime','books','pens','papers' ] 
// for(let i = 0; i <eightElement.length; i++){
//     let index = eightElement[i];
//     if (index.length > eightElement[i].length){
//         index = eightElement[i]
//     }
//     console.log(index)
// }


// 49) Write a function and take an array as a parameter. Find the average of all the elements of that array and return this average.

// function average(averArray){
//     let allAverage = 0;
//    for(let i = 0; i <averArray.length; i++){
//     let index = averArray[i];
//     allAverage += index;
//    }
//    return allAverage / 10;
// }
// let thisArray = [10,20,30,40,50,60,70,80,90,100]
// let getAverage = average(thisArray);
// console.log(getAverage);

// 50) Write a function which takes the height and width of a rectangle as parameters. Find out the area of that rectangle and print the result.

// function areaArray(length,height){
//         let volumeArea = length * height 
//         return volumeArea;
// }
// let thisLength = 20;
// let thisHeight = 10;
// let getArea = areaArray(thisLength,thisHeight);
// console.log(getArea);

