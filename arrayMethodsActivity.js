// Activity 2: Array Methods Practice
// Implement the following tasks:
// 1. Use concat() to join two arrays:
const arr1 = ["Cecile", "Lone"];
const arr2 = ["Emil", "Tobais", "Linus"];
console.log(arr1.concat(arr2));

// 2. Use push() to add an element "Kiwi" to the array fruits:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits);

// 3. Use unshift() to add two numbers 4 and 5 to the beginning of the array array1:
const array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log(array1);

// 4. Use pop() to remove the last element from the fruits array:
fruits.pop();
console.log(fruits);

// 5. Use shift() to remove the first element from the array array2:
const array2 = [1, 2, 3];
array2.shift();
console.log(array2);

// 6. Use sort() to sort the fruits array alphabetically:
fruits.sort();
console.log(fruits);

// 7. Use slice() to create a new array containing a portion of the fruits array:
fruits.slice(1, 4);
console.log(fruits);

// 8. Use splice() to insert and remove elements in the months array:
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
months.splice(9, 1, "MyBirthMonth");
console.log(months)