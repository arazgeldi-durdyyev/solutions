//1 Problem solution:
const oddEven = num => {
    if (isNaN(num)) {
        console.log(`${num} is not a number.`)
        oddEven(Number(prompt('Enter a number')))
    }
    if (num % 2 === 0) {
        return `It's an even number.`
    } else if (num % 2 !== 0) {
        return `It's an odd number.`
    }
}

//2 Problem Fibonacci solution:
const fibonacci = num => {
    //declare an array to store numbers:
    let numArray = new Array(num + 2)
    //starting with 0 and 1:
    numArray[0] = 0;
    numArray[1] = 1;
    for (let i = 2; i <= num; i++) {
        //adding previous 2 numbers in the series:
        numArray[i] = numArray[i-1] + numArray[i-2]
    }
    return numArray[num]
}

//3 Problem Reversing a string solution:
const reverse = string => {
    let separatedString = string.split('');
    let reversed = [];
    for (let i = separatedString.length-1; i >= 0; i--) {
        reversed.push(separatedString[i])
    }
    reversedString = reversed.join('')
    return reversedString 
}

//4 Problem Leap Year solution:
const leap = num => {
    if (num % 4 === 0) {
        if (num % 400 === 0) {
            return `${num} is a leap year.`
        } else if (num % 100 === 0) {
            return `${num} is not a leap year.`
        } else {
            return `Leap Year`
        }
    } else {
        return `Not a leap year.`
    }
}

//5 Problem Prime Number solution:
const primeFinder = num => {
    let prime = true;
    if (num === 1) {
        return 'Not a Prime Number';
    } 
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            prime = false;
        }
    }
    if (prime) {
        return 'Prime Number'
    } else {
        return `${num} is not a prime number`
    }
}

//6 Problem Palindrome solution:
//I have heard about palindrome for the first time;
function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
    }
    return true;
}
palindrome("A man, a plan, a canal. Panama"); //this function doesn't run in here when return is used but it works in browser console?????



//7 Problem Factorial solution:
const factorial = num => {
    let result = 1;
    for (let i = 2; i <= num; i++ ) {
        result *= i
    }
    return result
}

//8 Problem Sorting Algorithm: Bubble, Selection, and Insertion:
//Bubble sort:
let numbersArray = [5, 3, 4, 1, 2]
const bubbleSort = arr => {
    //getting the length of the array
    let arrLength = arr.length
    //looping through the element to access the elements in it
    for(let i = 0; i < arrLength; i++) {
        //declaring a flag element to check if a swap has occurred
        let flag = 0;
        //creating a loop to compare each element of the array
        for (let j = 0; j < arrLength; j++) {
            //compare 2 adjacent elements and sort them in ascending order;
            if( arr[j] > arr[j + 1] ) {
                //swapping the elements if they are not in the right order:
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j + 1] = temp
                flag = 1
            }
        }
        console.log(`iteration ${i + 1}:`, arr)
    }
    //return value must be in the outer loop block
    return arr
}
// bubbleSort(numbersArray)

//Selection sort: adapted from https://medium.com/@manishsundriyal/selection-sort-in-javascript-41384784cadb
const selectionSort = arr => {
    let length = arr.length;
    for (let h = 0; h < length; h++) {
        // find minimum element in rest of the array
        let minIndex = h;
        for (let i = h + 1; i < length; i++) {
            if (arr[i] < arr[minIndex]) {
                minIndex = i;
            }   
        }
        // swap if with the minimum element, if any
        if (minIndex !== h) {
            [arr[h], arr[minIndex]] = [arr[minIndex], arr[h]]
        }
    } console.log(arr)
}
selectionSort([23, 1, 4, 5, 9, 7, 4])

//insertion sort: from https://www.geeksforgeeks.org/insertion-sort/
function insertionSort(arr, n) 
{ 
    let i, key, j; 
    for (i = 1; i < n; i++)
    { 
        key = arr[i]; 
        j = i - 1; 
   
        /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
        while (j >= 0 && arr[j] > key)
        { 
            arr[j + 1] = arr[j]; 
            j = j - 1; 
        } 
        arr[j + 1] = key; 
    } 
}



//9 Problem Sum of Array solution:
//enter an array of integers into the sumOfArray function:
const sumOfArray = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

//10 Problem Mx and Min values solution:
// const arrayMin = arr => {
//     return arr.reduce((a, b) => {
//         a < b ? a : b
//     });
// } here I think function expression doesn't let the function run in return... But it works fine in function declaration////

function arrayMin(arr) {
    return arr.reduce(function (p, v) {
      return ( p < v ? p : v );
    });
}
function arrayMax(arr) {
    return arr.reduce(function (p, v) {
      return ( p > v ? p : v );
    });
}


//11 Problem Count Vowels and Consonants solution:
const countVowelConsonant = () => {
    let sentence = prompt('Enter the text here:').toLowerCase();
    let a=0, e=0, i=0, o=0, u=0;
    let consonants = 0;
    let count;
    
    for (count = 0; count < sentence.length; count++) {
        let char = sentence.charAt(count);
        if (char.match(/[aeiou]/)) {
            switch (char) {
                case 'a':
                    a++;
                    break;
                case 'e':
                    e++;
                    break;
                case 'i':
                    i++;
                    break;
                case 'o':
                    o++;
                    break;
                case 'u':
                    u++;
                    break;
            }
        } else if (char.match(/[bcdfghjklmnpqrstvwxyz]/)) {
            consonants++
        }
    } console.log ("a: " + a);
      console.log ("e: " + e);
      console.log ("i: " + i);
      console.log ("o: " + o);
      console.log ("u: " + u);
      console.log ("consonants: " + consonants);
}


//12 Problem Sum of Digits solution:
const digitSum = num => {
    sum = 0;

while (num) {
    sum += num % 10;
    num = Math.floor(num / 10);
}
return sum
}


//13 Problem LArgest Word in a Sentence  solution:
const findLongestWord = () =>{
    let sentence = prompt("Enter a sentence to find the longest word: ")
    //variable below will output the an array of separated words;
    let strSplit = sentence.split(' ');

    let longestWordNumber = 0;
    let longestWord = '';

    for (let i=0; i<strSplit.length; i++) {
        if(strSplit[i].length > longestWordNumber) {
            longestWordNumber = strSplit[i].length;
            longestWord = strSplit[i]
        }
    }
    return `The longest word in the sentence is: ${longestWord} with a number of ${longestWordNumber}`
}

//14 Problem Duplicate Elements solution:
const findDuplicate = arr => {
    return arr.filter((eachItem, index) => arr.indexOf(eachItem)!== index
    ) //this will return the duplicate elements in an array
} 


//15 Problem Armstrong Number solution:
//For ex: 153 = (1**3) + (5**3) + (3**3) - armstrong number;
const checkArmstrong = () => {
    let num = prompt('Enter a positive integer: ');
    let numberOfDigits = num.length;
    let sum = 0;

    let temp = num;
    while(temp > 0) {
        let remainder = temp % 10;

        sum += remainder**numberOfDigits;
        //removing last digit from the temp
        temp = parseInt(temp / 10);
    }
    if(sum == num) {
        return `${num} is an Armstrong number`
    } else {
        return `${num} is not an Armstrong number!`
    }
}


//16 Problem Check for Anagrams solution:
let words = ["monk", "konm", "dell", "ledl", "abc", "cba", "act", "gentleman", "listen", "cat",  "elegant mn", "silent"];

const anagramDealer = arr => {
    let Anagram = {};

    for (let i=0; i<arr.length; i++) {
        let word = arr[i];
        let sortedWord = word.split('').sort().join("");

        let tempArray = [];
        if (Anagram[sortedWord]) {
            tempArray = Anagram[sortedWord].length == 1 ? Anagram[sortedWord] : [...Anagram[sortedWord]];
            tempArray.push(word);
            Anagram[sortedWord] = tempArray;
        } else {
            Anagram[sortedWord] = [word];
        }
    }
    return Object.values(Anagram)
}



//17 Problem Find Missing Number solution:
const findMissingNumber = (num => {
    let inSquare = [num];
    let container = new Array()
    for (let i=1; i <= num; i++) {
        if (inSquare.indexOf(i) == -1) {
            container.push(i)
        }
    }
    return container 
})

//2nd version ////////////////////////////
const findMissing =  numArray => {
    const max = Math.max(...numArray); // Will find highest number
    const min = Math.min(...numArray); // Will find lowest number
    const missing = []
  
    for(let i=min; i<= max; i++) {
      if(!numArray.includes(i)) { // Checking whether i(current value) present in num(argument)
        missing.push(i); // Adding numbers which are not in num(argument) array
      }
    }
    // console.log(missing)
    return missing;
}

findMissing([1,15]); //this function doesn't run in here when return is used but it works in browser console?????