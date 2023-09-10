// Creating the array of Javascript methods
// Their syntax and use cases (code examples)

const javascript = [
  // Array Methods (continued)
  {
    id: 1,
    method: "push()",
    syntax: "array.push(item1, item2, ...)",
    exampleOfUse:
      "const fruits = ['apple', 'banana'];\nfruits.push('cherry');\n// Result: ['apple', 'banana', 'cherry']",
    ReturnValue: "The new length of the array",
    Category: "Array",
  },
  {
    id: 2,
    method: "pop()",
    syntax: "array.pop()",
    exampleOfUse:
      "const fruits = ['apple', 'banana', 'cherry'];\nconst removedFruit = fruits.pop();\n// Result: removedFruit = 'cherry', fruits = ['apple', 'banana']",
    ReturnValue: "The removed element",
    Category: "Array",
  },
  {
    id: 3,
    method: "shift()",
    syntax: "array.shift()",
    exampleOfUse:
      "const fruits = ['apple', 'banana', 'cherry'];\nconst shiftedFruit = fruits.shift();\n// Result: shiftedFruit = 'apple', fruits = ['banana', 'cherry']",
    ReturnValue: "The removed element",
    Category: "Array",
  },
  {
    id: 4,
    method: "unshift()",
    syntax: "array.unshift(item1, item2, ...)",
    exampleOfUse:
      "const fruits = ['banana', 'cherry'];\nfruits.unshift('apple', 'orange');\n// Result: ['apple', 'orange', 'banana', 'cherry']",
    ReturnValue: "The new length of the array",
    Category: "Array",
  },
  // Add more array methods here...

  // String Methods
  {
    id: 5,
    method: "charAt()",
    syntax: "string.charAt(index)",
    exampleOfUse:
      "const str = 'Hello';\nconst char = str.charAt(1);\n// Result: char = 'e'",
    ReturnValue: "The character at the specified index",
    Category: "String",
  },
  // Add more string methods here...

  // Object Methods
  {
    id: 6,
    method: "Object.keys()",
    syntax: "Object.keys(object)",
    exampleOfUse:
      "const person = { name: 'John', age: 30 };\nconst keys = Object.keys(person);\n// Result: keys = ['name', 'age']",
    ReturnValue: "An array of object's own property keys",
    Category: "Object",
  },
  // Add more object methods here...

  // Number Methods
  {
    id: 7,
    method: "toFixed()",
    syntax: "number.toFixed(digits)",
    exampleOfUse:
      "const num = 3.14159;\nconst fixedNum = num.toFixed(2);\n// Result: fixedNum = '3.14'",
    ReturnValue:
      "A string representation of the number with a fixed number of decimal places",
    Category: "Number",
  },
  // Add more number methods here...

  {
    id: 8,
    method: "concat()",
    syntax: "array.concat(item1, item2, ...)",
    exampleOfUse:
      "const fruits = ['apple', 'banana'];\nconst moreFruits = fruits.concat('cherry', 'orange');\n// Result: moreFruits = ['apple', 'banana', 'cherry', 'orange']",
    ReturnValue:
      "A new array combining the original array with the provided items",
    Category: "Array",
  },
  {
    id: 9,
    method: "slice()",
    syntax: "array.slice(startIndex, endIndex)",
    exampleOfUse:
      "const fruits = ['apple', 'banana', 'cherry', 'orange'];\nconst slicedFruits = fruits.slice(1, 3);\n// Result: slicedFruits = ['banana', 'cherry']",
    ReturnValue:
      "A new array containing the elements from the start index (inclusive) to the end index (exclusive)",
    Category: "Array",
  },
  {
    id: 10,
    method: "join()",
    syntax: "array.join(separator)",
    exampleOfUse:
      "const fruits = ['apple', 'banana', 'cherry'];\nconst fruitString = fruits.join(', ');\n// Result: fruitString = 'apple, banana, cherry'",
    ReturnValue:
      "A string containing all the array elements joined by the specified separator",
    Category: "Array",
  },
  {
    id: 11,
    method: "filter()",
    syntax: "array.filter(callback)",
    exampleOfUse:
      "const numbers = [1, 2, 3, 4, 5];\nconst evenNumbers = numbers.filter(num => num % 2 === 0);\n// Result: evenNumbers = [2, 4]",
    ReturnValue:
      "A new array containing elements for which the callback function returns true",
    Category: "Array",
  },
  // Add more array methods here...

  // String Methods (continued)
  {
    id: 12,
    method: "toLowerCase()",
    syntax: "string.toLowerCase()",
    exampleOfUse:
      "const str = 'Hello World';\nconst lowerStr = str.toLowerCase();\n// Result: lowerStr = 'hello world'",
    ReturnValue: "A new string with all characters converted to lowercase",
    Category: "String",
  },
  {
    id: 13,
    method: "toUpperCase()",
    syntax: "string.toUpperCase()",
    exampleOfUse:
      "const str = 'Hello World';\nconst upperStr = str.toUpperCase();\n// Result: upperStr = 'HELLO WORLD'",
    ReturnValue: "A new string with all characters converted to uppercase",
    Category: "String",
  },
  {
    id: 14,
    method: "substring()",
    syntax: "string.substring(startIndex, endIndex)",
    exampleOfUse:
      "const str = 'JavaScript';\nconst subStr = str.substring(0, 4);\n// Result: subStr = 'Java'",
    ReturnValue:
      "A new string containing characters from the start index (inclusive) to the end index (exclusive)",
    Category: "String",
  },
  // Add more string methods here...

  // Object Methods (continued)
  {
    id: 15,
    method: "Object.values()",
    syntax: "Object.values(object)",
    exampleOfUse:
      "const person = { name: 'John', age: 30 };\nconst values = Object.values(person);\n// Result: values = ['John', 30]",
    ReturnValue: "An array of object's own property values",
    Category: "Object",
  },
  {
    id: 16,
    method: "Object.entries()",
    syntax: "Object.entries(object)",
    exampleOfUse:
      "const person = { name: 'John', age: 30 };\nconst entries = Object.entries(person);\n// Result: entries = [['name', 'John'], ['age', 30]]",
    ReturnValue:
      "An array of key-value pairs (arrays) representing object properties",
    Category: "Object",
  },
  // Add more object methods here...

  // Number Methods (continued)
  {
    id: 17,
    method: "parseInt()",
    syntax: "parseInt(string, radix)",
    exampleOfUse:
      "const numStr = '42';\nconst parsedNum = parseInt(numStr);\n// Result: parsedNum = 42",
    ReturnValue: "An integer parsed from the input string",
    Category: "Number",
  },
  {
    id: 18,
    method: "parseFloat()",
    syntax: "parseFloat(string)",
    exampleOfUse:
      "const numStr = '3.14';\nconst parsedNum = parseFloat(numStr);\n// Result: parsedNum = 3.14",
    ReturnValue: "A floating-point number parsed from the input string",
    Category: "Number",
  },

  {
    id: 19,
    method: "map()",
    syntax: "array.map(callback)",
    exampleOfUse:
      "const numbers = [1, 2, 3, 4, 5];\nconst doubled = numbers.map(num => num * 2);\n// Result: doubled = [2, 4, 6, 8, 10]",
    ReturnValue:
      "A new array containing the results of applying the callback function to each element",
    Category: "Array",
  },
  {
    id: 20,
    method: "reduce()",
    syntax: "array.reduce(callback, initialValue)",
    exampleOfUse:
      "const numbers = [1, 2, 3, 4, 5];\nconst sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);\n// Result: sum = 15",
    ReturnValue:
      "The accumulated result after applying the callback to each element",
    Category: "Array",
  },
  {
    id: 21,
    method: "find()",
    syntax: "array.find(callback)",
    exampleOfUse:
      "const numbers = [1, 2, 3, 4, 5];\nconst found = numbers.find(num => num === 3);\n// Result: found = 3",
    ReturnValue:
      "The first element in the array that satisfies the callback function",
    Category: "Array",
  },
  {
    id: 22,
    method: "includes()",
    syntax: "array.includes(value)",
    exampleOfUse:
      "const numbers = [1, 2, 3, 4, 5];\nconst includesThree = numbers.includes(3);\n// Result: includesThree = true",
    ReturnValue:
      "A boolean indicating whether the array includes the specified value",
    Category: "Array",
  },
  // Add more array methods here...

  // String Methods (continued)
  {
    id: 23,
    method: "indexOf()",
    syntax: "string.indexOf(searchValue, startIndex)",
    exampleOfUse:
      "const str = 'Hello, world!';\nconst index = str.indexOf('world');\n// Result: index = 7",
    ReturnValue:
      "The index of the first occurrence of the search value, or -1 if not found",
    Category: "String",
  },
  {
    id: 24,
    method: "replace()",
    syntax: "string.replace(searchValue, replaceValue)",
    exampleOfUse:
      "const str = 'Hello, world!';\nconst newStr = str.replace('world', 'there');\n// Result: newStr = 'Hello, there!'",
    ReturnValue:
      "A new string with the first occurrence of the search value replaced with the replace value",
    Category: "String",
  },
  {
    id: 25,
    method: "startsWith()",
    syntax: "string.startsWith(searchString, position)",
    exampleOfUse:
      "const str = 'Hello, world!';\nconst startsWithHello = str.startsWith('Hello');\n// Result: startsWithHello = true",
    ReturnValue:
      "A boolean indicating whether the string starts with the specified search string",
    Category: "String",
  },
  {
    id: 26,
    method: "trim()",
    syntax: "string.trim()",
    exampleOfUse:
      "const str = '  Hello, world!  ';\nconst trimmedStr = str.trim();\n// Result: trimmedStr = 'Hello, world!'",
    ReturnValue: "A new string with leading and trailing whitespace removed",
    Category: "String",
  },
  // Add more string methods here...

  // Object Methods (continued)
  {
    id: 27,
    method: "hasOwnProperty()",
    syntax: "object.hasOwnProperty(propertyName)",
    exampleOfUse:
      "const person = { name: 'John', age: 30 };\nconst hasName = person.hasOwnProperty('name');\n// Result: hasName = true",
    ReturnValue:
      "A boolean indicating whether the object has the specified property",
    Category: "Object",
  },
  {
    id: 28,
    method: "Object.freeze()",
    syntax: "Object.freeze(object)",
    exampleOfUse:
      "const person = { name: 'John', age: 30 };\nObject.freeze(person);\nperson.name = 'Jane'; // This will not change the 'name' property",
    ReturnValue: "The frozen object, preventing any changes to its properties",
    Category: "Object",
  },
  // Add more object methods here...

  // Number Methods (continued)
  {
    id: 29,
    method: "isNaN()",
    syntax: "isNaN(value)",
    exampleOfUse:
      "const num = 'abc';\nconst isNotANumber = isNaN(num);\n// Result: isNotANumber = true",
    ReturnValue: "A boolean indicating whether the value is NaN",
    Category: "Number",
  },
  {
    id: 30,
    method: "isInteger()",
    syntax: "Number.isInteger(value)",
    exampleOfUse:
      "const num = 42;\nconst isAnInteger = Number.isInteger(num);\n// Result: isAnInteger = true",
    ReturnValue: "A boolean indicating whether the value is an integer",
    Category: "Number",
  },

  {
    id: 31,
    method: "every()",
    syntax: "array.every(callback)",
    exampleOfUse:
      "const numbers = [1, 2, 3, 4, 5];\nconst allGreaterThanZero = numbers.every(num => num > 0);\n// Result: allGreaterThanZero = true",
    ReturnValue:
      "A boolean indicating whether all elements in the array satisfy the callback function",
    Category: "Array",
  },
  {
    id: 32,
    method: "some()",
    syntax: "array.some(callback)",
    exampleOfUse:
      "const numbers = [1, 2, 3, 4, 5];\nconst someGreaterThanFour = numbers.some(num => num > 4);\n// Result: someGreaterThanFour = true",
    ReturnValue:
      "A boolean indicating whether at least one element in the array satisfies the callback function",
    Category: "Array",
  },
  {
    id: 33,
    method: "reverse()",
    syntax: "array.reverse()",
    exampleOfUse:
      "const fruits = ['apple', 'banana', 'cherry'];\nfruits.reverse();\n// Result: ['cherry', 'banana', 'apple']",
    ReturnValue: "The reversed array",
    Category: "Array",
  },
  {
    id: 34,
    method: "sort()",
    syntax: "array.sort(compareFunction)",
    exampleOfUse:
      "const fruits = ['banana', 'cherry', 'apple'];\nfruits.sort();\n// Result: ['apple', 'banana', 'cherry']",
    ReturnValue: "The sorted array",
    Category: "Array",
  },
  // Add more array methods here...

  // String Methods (continued)
  {
    id: 35,
    method: "split()",
    syntax: "string.split(separator, limit)",
    exampleOfUse:
      "const str = 'apple,banana,cherry';\nconst parts = str.split(',');\n// Result: parts = ['apple', 'banana', 'cherry']",
    ReturnValue: "An array of strings split by the specified separator",
    Category: "String",
  },
  {
    id: 36,
    method: "substring()",
    syntax: "string.substring(startIndex, endIndex)",
    exampleOfUse:
      "const str = 'JavaScript';\nconst subStr = str.substring(0, 4);\n// Result: subStr = 'Java'",
    ReturnValue:
      "A new string containing characters from the start index (inclusive) to the end index (exclusive)",
    Category: "String",
  },
  {
    id: 37,
    method: "charAt()",
    syntax: "string.charAt(index)",
    exampleOfUse:
      "const str = 'Hello';\nconst char = str.charAt(1);\n// Result: char = 'e'",
    ReturnValue: "The character at the specified index",
    Category: "String",
  },
  {
    id: 38,
    method: "localeCompare()",
    syntax: "string.localeCompare(compareString, locales, options)",
    exampleOfUse:
      "const str1 = 'apple';\nconst str2 = 'banana';\nconst result = str1.localeCompare(str2);\n// Result: result < 0",
    ReturnValue:
      "A number indicating the comparison result between two strings",
    Category: "String",
  },
  // Add more string methods here...

  // Object Methods (continued)
  {
    id: 39,
    method: "Object.assign()",
    syntax: "Object.assign(target, source1, source2, ...)",
    exampleOfUse:
      "const target = { a: 1, b: 2 };\nconst source = { b: 3, c: 4 };\nconst merged = Object.assign(target, source);\n// Result: merged = { a: 1, b: 3, c: 4 }",
    ReturnValue:
      "The modified target object with properties from the source objects",
    Category: "Object",
  },
  {
    id: 40,
    method: "Object.keys()",
    syntax: "Object.keys(object)",
    exampleOfUse:
      "const person = { name: 'John', age: 30 };\nconst keys = Object.keys(person);\n// Result: keys = ['name', 'age']",
    ReturnValue: "An array of object's own property keys",
    Category: "Object",
  },
  {
    id: 41,
    method: "Number.parseFloat()",
    syntax: "Number.parseFloat(string)",
    exampleOfUse:
      "const numStr = '3.14';\nconst parsedNum = Number.parseFloat(numStr);\n// Result: parsedNum = 3.14",
    ReturnValue: "A floating-point number parsed from the input string",
    Category: "Number",
  },
  {
    id: 42,
    method: "Number.isNaN()",
    syntax: "Number.isNaN(value)",
    exampleOfUse:
      "const num = 'abc';\nconst isNotANumber = Number.isNaN(num);\n// Result: isNotANumber = true",
    ReturnValue: "A boolean indicating whether the value is NaN",
    Category: "Number",
  },
  {
    id: 43,
    method: "reduceRight()",
    syntax: "array.reduceRight(callback, initialValue)",
    exampleOfUse:
      "const numbers = [1, 2, 3, 4, 5];\nconst sum = numbers.reduceRight((accumulator, currentValue) => accumulator + currentValue, 0);\n// Result: sum = 15",
    ReturnValue:
      "The accumulated result after applying the callback to each element, from right to left",
    Category: "Array",
  },
  {
    id: 44,
    method: "lastIndexOf()",
    syntax: "array.lastIndexOf(searchElement, fromIndex)",
    exampleOfUse:
      "const numbers = [1, 2, 3, 4, 5, 3];\nconst lastIndex = numbers.lastIndexOf(3);\n// Result: lastIndex = 5",
    ReturnValue:
      "The index of the last occurrence of the search element, or -1 if not found",
    Category: "Array",
  },
  {
    id: 45,
    method: "splice()",
    syntax: "array.splice(startIndex, deleteCount, item1, item2, ...)",
    exampleOfUse:
      "const fruits = ['apple', 'banana', 'cherry'];\nfruits.splice(1, 1, 'kiwi');\n// Result: fruits = ['apple', 'kiwi', 'cherry']",
    ReturnValue:
      "An array of the deleted elements, or an empty array if none were deleted",
    Category: "Array",
  },
  {
    id: 46,
    method: "isArray()",
    syntax: "Array.isArray(value)",
    exampleOfUse:
      "const arr = [1, 2, 3];\nconst isAnArray = Array.isArray(arr);\n// Result: isAnArray = true",
    ReturnValue: "A boolean indicating whether the value is an array",
    Category: "Array",
  },
  // Add more array methods here...

  // String Methods (continued)
  {
    id: 47,
    method: "endsWith()",
    syntax: "string.endsWith(searchString, length)",
    exampleOfUse:
      "const str = 'Hello, world!';\nconst endsWithWorld = str.endsWith('world');\n// Result: endsWithWorld = true",
    ReturnValue:
      "A boolean indicating whether the string ends with the specified search string",
    Category: "String",
  },
  {
    id: 48,
    method: "includes()",
    syntax: "string.includes(searchString, position)",
    exampleOfUse:
      "const str = 'Hello, world!';\nconst includesHello = str.includes('Hello');\n// Result: includesHello = true",
    ReturnValue:
      "A boolean indicating whether the string includes the specified search string",
    Category: "String",
  },
  {
    id: 49,
    method: "repeat()",
    syntax: "string.repeat(count)",
    exampleOfUse:
      "const str = 'abc';\nconst repeatedStr = str.repeat(3);\n// Result: repeatedStr = 'abcabcabc'",
    ReturnValue: "A new string repeated a specified number of times",
    Category: "String",
  },
  {
    id: 50,
    method: "startsWith()",
    syntax: "string.startsWith(searchString, position)",
    exampleOfUse:
      "const str = 'Hello, world!';\nconst startsWithHello = str.startsWith('Hello');\n// Result: startsWithHello = true",
    ReturnValue:
      "A boolean indicating whether the string starts with the specified search string",
    Category: "String",
  },
  // Add more string methods here...

  // Object Methods (continued)
  {
    id: 51,
    method: "Object.getOwnPropertyNames()",
    syntax: "Object.getOwnPropertyNames(object)",
    exampleOfUse:
      "const person = { name: 'John', age: 30 };\nconst propNames = Object.getOwnPropertyNames(person);\n// Result: propNames = ['name', 'age']",
    ReturnValue:
      "An array of all property names (including non-enumerable) of the object",
    Category: "Object",
  },
  {
    id: 52,
    method: "Object.is()",
    syntax: "Object.is(value1, value2)",
    exampleOfUse:
      "const x = NaN;\nconst y = NaN;\nconst areEqual = Object.is(x, y);\n// Result: areEqual = true",
    ReturnValue:
      "A boolean indicating whether the values are the same (similar to ===, but treats NaN and -0 as equal)",
    Category: "Object",
  },
  {
    id: 53,
    method: "Object.setPrototypeOf()",
    syntax: "Object.setPrototypeOf(object, prototype)",
    exampleOfUse:
      "const dog = { breed: 'Golden Retriever' };\nconst animal = { legs: 4 };\nObject.setPrototypeOf(dog, animal);\n// Now 'dog' inherits properties from 'animal'",
    ReturnValue: "The modified object with a new prototype",
    Category: "Object",
  },
  // Add more object methods here...

  // Number Methods (continued)
  {
    id: 54,
    method: "Number.isFinite()",
    syntax: "Number.isFinite(value)",
    exampleOfUse:
      "const num = 42;\nconst isFinite = Number.isFinite(num);\n// Result: isFinite = true",
    ReturnValue: "A boolean indicating whether the value is a finite number",
    Category: "Number",
  },
  {
    id: 55,
    method: "Number.isSafeInteger()",
    syntax: "Number.isSafeInteger(value)",
    exampleOfUse:
      "const num = 9007199254740992;\nconst isSafe = Number.isSafeInteger(num);\n// Result: isSafe = false",
    ReturnValue:
      "A boolean indicating whether the value is a safe integer within the range of -(2^53 - 1) to 2^53 - 1",
    Category: "Number",
  },
  {
    id: 56,
    method: "Number.toExponential()",
    syntax: "number.toExponential(fractionDigits)",
    exampleOfUse:
      "const num = 12345.6789;\nconst exponential = num.toExponential(2);\n// Result: exponential = '1.23e+4'",
    ReturnValue:
      "A string representing the number in exponential notation with the specified number of fraction digits",
    Category: "Number",
  },
  {
    id: 57,
    method: "Number.toPrecision()",
    syntax: "number.toPrecision(precision)",
    exampleOfUse:
      "const num = 12345.6789;\nconst precisionStr = num.toPrecision(5);\n// Result: precisionStr = '12345'",
    ReturnValue:
      "A string representing the number with the specified precision",
    Category: "Number",
  },
  {
    id: 58,
    method: "findIndex()",
    syntax: "array.findIndex(callback)",
    exampleOfUse:
      "const numbers = [1, 2, 3, 4, 5];\nconst index = numbers.findIndex(num => num === 3);\n// Result: index = 2",
    ReturnValue:
      "The index of the first element in the array that satisfies the callback function, or -1 if not found",
    Category: "Array",
  },
  {
    id: 59,
    method: "forEach()",
    syntax: "array.forEach(callback)",
    exampleOfUse:
      "const fruits = ['apple', 'banana', 'cherry'];\nfruits.forEach(fruit => console.log(fruit));\n// Result: 'apple', 'banana', 'cherry' printed to the console",
    ReturnValue: "Undefined (side-effect operation on each element)",
    Category: "Array",
  },
  {
    id: 60,
    method: "from()",
    syntax: "Array.from(arrayLike, mapFunction, thisArg)",
    exampleOfUse:
      "const arrayLike = 'hello';\nconst newArray = Array.from(arrayLike);\n// Result: newArray = ['h', 'e', 'l', 'l', 'o']",
    ReturnValue: "A new array created from an array-like or iterable object",
    Category: "Array",
  },
  {
    id: 61,
    method: "keys()",
    syntax: "array.keys()",
    exampleOfUse:
      "const fruits = ['apple', 'banana', 'cherry'];\nconst iterator = fruits.keys();\nfor (const key of iterator) { console.log(key); }\n// Result: 0, 1, 2 printed to the console",
    ReturnValue: "An iterator of array keys",
    Category: "Array",
  },
  // Add more array methods here...

  // String Methods (continued)
  {
    id: 62,
    method: "localeCompare()",
    syntax: "string.localeCompare(compareString, locales, options)",
    exampleOfUse:
      "const str1 = 'apple';\nconst str2 = 'banana';\nconst result = str1.localeCompare(str2);\n// Result: result < 0",
    ReturnValue:
      "A number indicating the comparison result between two strings",
    Category: "String",
  },
  {
    id: 63,
    method: "match()",
    syntax: "string.match(regexp)",
    exampleOfUse:
      "const str = 'Hello, world!';\nconst matches = str.match(/world/g);\n// Result: matches = ['world']",
    ReturnValue: "An array of matches or null if no matches are found",
    Category: "String",
  },
  {
    id: 64,
    method: "padEnd()",
    syntax: "string.padEnd(targetLength, padString)",
    exampleOfUse:
      "const str = 'abc';\nconst paddedStr = str.padEnd(5, '123');\n// Result: paddedStr = 'abc12'",
    ReturnValue:
      "A new string padded with a specified string to a target length",
    Category: "String",
  },
  {
    id: 65,
    method: "padStart()",
    syntax: "string.padStart(targetLength, padString)",
    exampleOfUse:
      "const str = 'abc';\nconst paddedStr = str.padStart(5, '123');\n// Result: paddedStr = '12abc'",
    ReturnValue:
      "A new string padded with a specified string to a target length",
    Category: "String",
  },
  // Add more string methods here...

  // Object Methods (continued)
  {
    id: 66,
    method: "Object.getOwnPropertyDescriptors()",
    syntax: "Object.getOwnPropertyDescriptors(object)",
    exampleOfUse:
      "const person = { name: 'John', age: 30 };\nconst descriptors = Object.getOwnPropertyDescriptors(person);\n// Result: descriptors = { name: { value: 'John', writable: true, enumerable: true, configurable: true }, age: { value: 30, writable: true, enumerable: true, configurable: true } }",
    ReturnValue: "An object with property descriptors for each property",
    Category: "Object",
  },
  {
    id: 67,
    method: "Object.isExtensible()",
    syntax: "Object.isExtensible(object)",
    exampleOfUse:
      "const person = { name: 'John' };\nconst isExtensible = Object.isExtensible(person);\n// Result: isExtensible = true",
    ReturnValue:
      "A boolean indicating whether new properties can be added to the object",
    Category: "Object",
  },
  {
    id: 68,
    method: "Object.isFrozen()",
    syntax: "Object.isFrozen(object)",
    exampleOfUse:
      "const person = { name: 'John' };\nconst isFrozen = Object.isFrozen(person);\n// Result: isFrozen = false",
    ReturnValue:
      "A boolean indicating whether the object is frozen (properties cannot be modified)",
    Category: "Object",
  },
  {
    id: 69,
    method: "Object.isSealed()",
    syntax: "Object.isSealed(object)",
    exampleOfUse:
      "const person = { name: 'John' };\nconst isSealed = Object.isSealed(person);\n// Result: isSealed = false",
    ReturnValue:
      "A boolean indicating whether the object is sealed (properties cannot be added or deleted)",
    Category: "Object",
  },
  // Add more object methods here...

  // Number Methods (continued)
  {
    id: 70,
    method: "Number.prototype.toFixed()",
    syntax: "number.toFixed(digits)",
    exampleOfUse:
      "const num = 3.14159;\nconst fixedNum = num.toFixed(2);\n// Result: fixedNum = '3.14'",
    ReturnValue:
      "A string representation of the number with a fixed number of decimal places",
    Category: "Number",
  },
  {
    id: 71,
    method: "Number.prototype.toPrecision()",
    syntax: "number.toPrecision(precision)",
    exampleOfUse:
      "const num = 12345.6789;\nconst precisionStr = num.toPrecision(5);\n// Result: precisionStr = '12345'",
    ReturnValue:
      "A string representing the number with the specified precision",
    Category: "Number",
  },
  {
    id: 72,
    method: "Number.prototype.toString()",
    syntax: "number.toString(radix)",
    exampleOfUse:
      "const num = 42;\nconst numStr = num.toString(16);\n// Result: numStr = '2a'",
    ReturnValue:
      "A string representation of the number in the specified radix (base)",
    Category: "Number",
  },
  {
    id: 74,
    method: "copyWithin()",
    syntax: "array.copyWithin(target, start, end)",
    exampleOfUse:
      "const numbers = [1, 2, 3, 4, 5];\nnumbers.copyWithin(0, 3, 4);\n// Result: numbers = [4, 2, 3, 4, 5]",
    ReturnValue:
      "The modified array with a copy of specified elements inserted at the target position",
    Category: "Array",
  },
  {
    id: 75,
    method: "flat()",
    syntax: "array.flat(depth)",
    exampleOfUse:
      "const nestedArray = [1, [2, [3]], 4];\nconst flatArray = nestedArray.flat(2);\n// Result: flatArray = [1, 2, 3, 4]",
    ReturnValue:
      "A new array with all sub-array elements concatenated into it recursively",
    Category: "Array",
  },
  {
    id: 76,
    method: "flatMap()",
    syntax: "array.flatMap(callback)",
    exampleOfUse:
      "const numbers = [1, 2, 3];\nconst doubled = numbers.flatMap(num => [num, num * 2]);\n// Result: doubled = [1, 2, 2, 4, 3, 6]",
    ReturnValue:
      "A new array formed by applying a given callback function to each element and then flattening the result",
    Category: "Array",
  },
  {
    id: 77,
    method: "pop()",
    syntax: "array.pop()",
    exampleOfUse:
      "const fruits = ['apple', 'banana', 'cherry'];\nconst removedFruit = fruits.pop();\n// Result: removedFruit = 'cherry', fruits = ['apple', 'banana']",
    ReturnValue: "The last element removed from the array",
    Category: "Array",
  },
  // Add more array methods here...

  // String Methods (continued)
  {
    id: 78,
    method: "String.raw()",
    syntax: "String.raw(template, ...substitutions)",
    exampleOfUse:
      "const name = 'John';\nconst message = String.raw`Hello ${name}!`;\n// Result: message = 'Hello John!' (raw string without escape sequences)",
    ReturnValue:
      "A tagged template string with escape sequences processed literally",
    Category: "String",
  },
  {
    id: 79,
    method: "String.prototype.endsWith()",
    syntax: "string.endsWith(searchString, length)",
    exampleOfUse:
      "const str = 'Hello, world!';\nconst endsWithWorld = str.endsWith('world');\n// Result: endsWithWorld = true",
    ReturnValue:
      "A boolean indicating whether the string ends with the specified search string",
    Category: "String",
  },
  {
    id: 80,
    method: "String.prototype.match()",
    syntax: "string.match(regexp)",
    exampleOfUse:
      "const str = 'Hello, world!';\nconst matches = str.match(/world/g);\n// Result: matches = ['world']",
    ReturnValue: "An array of matches or null if no matches are found",
    Category: "String",
  },
  {
    id: 81,
    method: "String.prototype.search()",
    syntax: "string.search(regexp)",
    exampleOfUse:
      "const str = 'Hello, world!';\nconst index = str.search(/world/);\n// Result: index = 7",
    ReturnValue:
      "The index of the first match of the regular expression in the string, or -1 if not found",
    Category: "String",
  },
  // Add more string methods here...

  // Object Methods (continued)
  {
    id: 82,
    method: "Object.getOwnPropertySymbols()",
    syntax: "Object.getOwnPropertySymbols(object)",
    exampleOfUse:
      "const obj = { [Symbol('a')]: 1, [Symbol('b')]: 2 };\nconst symbols = Object.getOwnPropertySymbols(obj);\n// Result: symbols = [Symbol(a), Symbol(b)]",
    ReturnValue: "An array of an object's own symbol properties",
    Category: "Object",
  },
  {
    id: 83,
    method: "Object.keys()",
    syntax: "Object.keys(object)",
    exampleOfUse:
      "const person = { name: 'John', age: 30 };\nconst keys = Object.keys(person);\n// Result: keys = ['name', 'age']",
    ReturnValue: "An array of object's own property keys",
    Category: "Object",
  },
  {
    id: 84,
    method: "Object.is()",
    syntax: "Object.is(value1, value2)",
    exampleOfUse:
      "const x = NaN;\nconst y = NaN;\nconst areEqual = Object.is(x, y);\n// Result: areEqual = true",
    ReturnValue:
      "A boolean indicating whether the values are the same (similar to ===, but treats NaN and -0 as equal)",
    Category: "Object",
  },
];

module.exports = javascript;
