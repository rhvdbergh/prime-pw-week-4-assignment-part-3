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
  basket.push(item);
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
  for (const item of basket) {
    console.log(item);
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
  basket = [];
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
  if (!isFull()) {
    basket.push(item);
    return true;
  } else {
    console.log('Item could not be added!');
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