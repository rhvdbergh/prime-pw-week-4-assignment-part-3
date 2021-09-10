console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

// Create a function called addItem. It should:
//
// take an input parameter for a string item
// add the new item to the global array basket.
// return true indicating the item was added
function addItem(item) {
  basket.push(item); // adds item to basket
  return true;
}

// test
console.log(`Basket is ${basket}: (will be nothing if empty)`);
console.log(`Adding apples (expect true)`, addItem('apples'));
console.log(`Basket is now ${basket}: (will be nothing if empty)`);
console.log(`Basket is ${basket}: (will be nothing if empty)`);
console.log(`Adding pears (expect true)`, addItem('pears'));
console.log(`Basket is now ${basket}`);

// Create a function called listItems. It should:
//
// loop over the items in the basket array
// console.log each individual item on a new line

function listItems() {
  for (const item of basket) { // loops through
    console.log(item); // and prints each item on a new line
  }
}

// test
console.log(`Basket is currently ${basket}, listing items below on new lines:`);
console.log(listItems());
addItem('bananas');
console.log(`Basket is currently ${basket}, listing items below on new lines:`);
console.log(listItems());

// Create a function called empty. It should:
//
// reset the basket to an empty array

function empty() {
  basket = []; // basket was declared by let and can be reset to an empty string
}

// test
console.log(`Basket is currently ${basket}, listing items below on new lines:`);
console.log('Emptying basket ...');
empty();
console.log(`Basket is currently ${basket}: (will be nothing if empty)`);
console.log(`Basket is ${basket}: (will be nothing if empty)`);
console.log(`Adding apples (expect true)`, addItem('apples'));
console.log(`Basket is now ${basket}: (will be nothing if empty)`);

// Stretch Goals
// Using functions in other functions!

// 1. Add a global const named maxItems and set it to 5.

const maxItems = 5;

// 2. Create a function called isFull(). It should:
//
// return false if the basket contains less than max number of items
// return true otherwise (equal or more than maxItems)

// function before I refactored:
// not sure which one reads easier, but I think it's the shorter one
// function isFull() {
//   if (basket.length < maxItems) {
//     return false;
//   } else { // equal or more, since it's not less
//     return true;
//   }
// }

function isFull() {
  // checks whether there are equal or more than the allowed maxItems in the basket
  // and returns the result; will be true if basket is full
  return basket.length >= maxItems;
}

// test
basket = ['apples', 'pears', 'bananas'];
console.log(`Items in basket = ${basket.length} while the maximum items allowed is ${maxItems}.`);
console.log(`Is basket full? Expect: false`, isFull());
basket.push('pineapples', 'oranges');
console.log(`Items in basket = ${basket.length} while the maximum items allowed is ${maxItems}.`);
console.log(`Is basket full? Expect: true`, isFull());

// 3. Update the required addItem function to:
//
// Use the isFull function to prevent more than maxItems from being added to the basket.
// If an item was added to the array, return true
// If there was no room and the item could not be added return false
//
// I've left addItem in place and created addItemSafely below

function addItemSafely(item) {
  if (!isFull()) { // item will only be added if there is space
    basket.push(item);
    return true; // in this case, an item was added and we return true
  } else {
    console.log('Item could not be added!'); // some user feedback
    return false;
  }
}

// test
console.log('---TEST addItemSafely---');
console.log(`Basket contains ${basket.length} items`); // still full from above
console.log(`Adding dragonfruit (expect false)`, addItemSafely('dragonfruit'));
console.log(`Basket contains ${basket.length} items`);
console.log(`Emptying basket...`);
empty();
console.log(`Basket contains ${basket.length} items`);
console.log(`Adding pears (expect true)`, addItemSafely('pears'));
console.log(`Basket contains ${basket.length} items`);
basket.push('watermelons', 'guavas', 'tomatoes');
console.log(`Basket contains ${basket.length} items`);
console.log(`Adding dragonfruit (expect true)`, addItemSafely('dragonfruit'));
console.log(`Basket contains ${basket.length} items`);

// Using Array built-in functions!
//
// 4. Create a function called removeItem. It should:
// Take an input parameter for a string item
// Use Array.indexOf to find the index of the first matching item in the basket.
// Use Array.splice to remove the first matching item from the basket.
// Return the item removed or null if the item was not found
function removeItem(item) {
  const itemIndex = basket.indexOf(item); // find the position (index) of the item in the array, if there is an index
  if (itemIndex >= 0) { // test if item was found: if not found, the .indexOf() function would have returned -1
    const removedItem = basket.splice(itemIndex, 1); // .splice() will remove 1 item starting at the given index
    return removedItem[0]; // return a string (first element of array) instead of an array
  } else {
    return null; // no item could be found
  }
}

// test
basket = ['pears', 'apples', 'grapes'];
console.log('---TEST removeItem---');
console.log(`Basket contains ${basket}`);
console.log(`Removing pears; expecting "pears": `, removeItem('pears'));
console.log(`Basket contains ${basket}`);

console.log(`Removing bananas; expecting "null": `, removeItem('bananas'));
console.log(`Basket contains ${basket}`);

console.log(`Removing grapes; expecting "grapes": `, removeItem('grapes'));
console.log(`Basket contains ${basket}`);