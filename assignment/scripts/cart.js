console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
const basket = [];

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
console.log(`Basket is ${basket}`);
console.log(`Adding apples (expect true)`, addItem('apples'));
console.log(`Basket is now ${basket}`);
console.log(`Basket is ${basket}`);
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