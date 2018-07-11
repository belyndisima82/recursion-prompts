/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if (n === 0) {
    return 1;
  }
  if (n < 0) {
    return null;
  } else {
    return n * factorial(n -1);
  }

};


// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  if (array.length <= 0) {
    return 0;
  }
  return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  if (array.length === 0) {
    return 0;
  }
    var numbers = 0;
    array.forEach(function (element){
      if (Array.isArray(element)) {
        numbers += arraySum(element);
      } else {
        numbers += element;
      }
    })
    return numbers
};

// 4. Check if a number is even.
var isEven = function(n) {

  if (Math.abs(n) === 0) {
    return true;
  } else if (Math.abs(n) === 1) {
    return false;
  }

  return (isEven(Math.abs(n) - 2));

};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (Math.abs(n) <= 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  } else if (n === -2) {
    return -1;
  }
  if (n < 0) {
    return (n +1) + sumBelow(n + 1);
  }
  return (Math.abs(n) -1) + sumBelow(Math.abs(n) - 1);
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  if ( x === y - 1 || y === x - 1 || x === y) {
    return [];

  } else if (x > y) {

    var newArr = range(x, y + 1);
    newArr.push(y + 1);
    return newArr;

  } else {

    newArr = range(x, y - 1);
    newArr.push(y - 1);
    return newArr;
  }



};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0) {
    return 1;
  }
  if (exp < 0) {
    return 1 / exponent(base, -exp);
  }
  return base * exponent(base, exp - 1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 1) {
    return true;

  } else if (n % 2 !== 0 || n === 0) {
    return false;

  } else {
    return (powerOfTwo(n / 2));
  }
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  if (string === '') {
    return '';
  } else {
    return (reverse(string.substr(1)) + string.charAt(0));
  }

};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {

  var newWord = string.split('').join('').toLowerCase();

if (newWord.length <= 1) {
  return true;

} else if (newWord[0] !== newWord[newWord.length -1]){
  return false;

} else {
  return (palindrome(newWord.substring(1, newWord.length -1)));
}

};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if (y === 0 || x === 0 && y === 0) {
    return NaN;

  } else if (y === 1 || x === 0) {
    return 0;
  }

  if (x < 0) {
    return (-modulo(-x, y));
  }

  if (y < 0) {
    return (modulo(x, -y));
  }

  if (x < y) {
    return x;
  }

  return (modulo(x - y, y));
};


// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {

  if (x === 0 || y === 0) {
    return 0;
  }

  if (x < 0 && y < 0) {
    return (multiply(-x, -y));
  }

  if (x < 0) {
    return (-multiply(-x, y));

  } else if (y < 0) {
    return (-multiply(x, -y));
  }

  return (x + multiply(x , y - 1));
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods.

var divide = function(x, y) {
  if (y === 0) {
    return NaN;
  }

  if (x === 0) {
    return 0;
  }

  if (y < 0) {
    return (divide(x, -y));
  }

  if (x < 0 && y > 0 && -x < y || x < -y) {
    return 0;
  }

  if (x > 0 && y > 0 && x < y) {
    return 0;
  }

  if (x > 0 && y > 0) {
    return 1 + (divide(x - y, y));
  } else {
    return -1 + divide(x + y, y);
  }

};


// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {

   if (y === 0) {
       return x;

   } else if (y < 0 || x < 0) {
     return null;
   }

   return gcd(y, x % y);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (str1 === '' && str2 === '') {
    return true;
  }

  if (str1[0] === str2[0]) {
    return compareStr(str1.slice(1), str2.slice(1));
  } else {
    return false;
  }

};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  if (str.length === 1) {
    return [str[0]];
  }

  else {
   var newWord = str[0].concat(createArray(str.substr(1)));
   return newWord.split(',').join('').split('');
 }
};

// 17. Reverse the order of an array
var reverseArr = function(array) {

  if (array.length === 0) {
      return [];
  }

  var newArr = [];
  newArr = reverseArr(array.slice(1));
  return newArr.concat(array[0]);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {

  if (length <= 0) {
    return [];
  }

  if (length <= 0) {
    return [];
  }
    var newArr = ((buildList(value, length -1)));
    newArr.push(value);
    return newArr;
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  var result = n;
  var newArr = [];
  if (n < 1) {
    return [];
  }

  if (n % 3 === 0 && n % 5 === 0) {
    result = "FizzBuzz";

  } else if (n % 3 === 0 && n % 5 !== 0) {
    result = "Fizz";

  } else if (n % 3 !== 0 && n % 5 === 0) {
    result = "Buzz";
  }
  return newArr.concat(fizzBuzz(n -1), result).join(",").split(",");
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {

  var counter = 0;

  if (array.length === 0) {
    return 0;
  }

  if (array[0] === value) {
    counter = 1;    
  }

  return counter + countOccurrence(array.slice(1), value);

};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  if (array.length === 0) {
    return [];
  }
  var times = [callback(array[0])];
  return (times.concat(rMap(array.slice(1), callback)));
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  let count = 0;

      for(let property in obj) {
        if (property === key) {  
          count += 1;

        } else {
            if (typeof obj[property] === 'object') {
              count += countKeysInObj(obj[property], key);
            }
          }
    } 
    return count;  
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  count = 0;

  for (let property in obj) {
    if (obj[property] === value) {
      count += 1;

    } else if (typeof obj[property] === 'object'){
      count += countValuesInObj(obj[property], value);
    }
  }
  return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {

  for (let property in obj) {

    if (property === oldKey) {
      obj[newKey] = obj[oldKey];
      delete obj[property];

    } else {
      if (typeof obj[property] === 'object') {
          obj[newKey] + replaceKeysInObj(obj[property], oldKey, newKey);
      }
    }
  }
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {

  if (n <= 0) {
    return null;
  }

  if (n === 1) {
    return [0, 1];
  }

  var fib = fibonacci(n - 1);
  fib.push(fib[fib.length -1] + fib[fib.length -2]);
  return fib;
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
  var nthFibo = function(n) {

  if (n === 2 || n === 1) {
    return 1;
  };

  if (n === 0) {
    return 0;
  }

  if (n < 0) {
    return null;
  }

  return nthFibo(n - 1) + nthFibo(n - 2);

};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  var newArr = [];
  if (array.length === 0) {
    return []; 
  }
  newArr = newArr.concat(array[0].toUpperCase(), capitalizeWords(array.slice(1)));
  return newArr;
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  var newArr = [];
  if (array.length === 0) {
    return [];
  }

  newArr = newArr.concat(array[0][0].toUpperCase() + array[0].substr(1), capitalizeFirst(array.slice(1)));
  return newArr;
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  let sum = 0;

  for (let key in obj) {

    if (obj[key] % 2 === 0 && typeof obj[key] !== 'object') {
      sum += obj[key];

    } 
    if (typeof obj[key] === 'object'){
      sum += nestedEvenSum(obj[key]);
    }
  }
  return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {

  if (array.length === 0) {
    return [];
  }
  if( array.length === 1 && !Array.isArray(array[0])) {
    return array.shift();
  }
      
  if(Array.isArray(array[0])) {
    return flatten(array.shift().concat(array));
  }

    return [array.shift()].concat(flatten(array));
};
// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {

  if (str.length === 0) {
    return obj;
  }
  
    if (obj[str[0]] === undefined) {
      obj[str[0]] = 1;

    } else {
        obj[str[0]] += 1;

      }

  return letterTally(str.substr(1), obj);
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {

  var newArr = [];

  if (list.length === 1) {
    return list.slice(0);
  }

  if (list[0] === list[1]) {
    return compress(list.slice(1));
  }

  return newArr = [list[0]].concat(compress(list.slice(1)));
}

// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {

  if (array.length === 1) {
    return [array[0].concat(aug)];
  }

  return ([array[0].concat(aug)].concat(augmentElements(array.slice(1), aug)));
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
