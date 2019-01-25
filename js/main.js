/* JavaScript for WATS 3020 Sandwich Machine Assignment */

// Step One ///////////////////////////////////////////////////////////
//
// Gather data from the user using the prompt() command.
// Users will fill in each prompt with text.
// Provide examples where it may help (e.g. show a comma-separated list of
// toppings to indicate how to specify toppings, etc.)
//
// 
//  
let bread= prompt("What kind of bread do you want? (wheat, rye, parmesean)"," parmesean");


// 
// 
// 

let meats= prompt("What kind of meats do you want? You may select more than one by seperating with comma, for example: chicken, bacon, beef", "chicken");



// 
// 
// 
let toppings= prompt("Enter comma seperated list of toppings (such as, tomato, pickles, cheese, onions):","cheese, pickles, lettuce");

// 
// 
let condiments= prompt("Enter comma seperated list of condiments (such as, mayo, mustard, ketchup, horseradish,bbq sauce):","mustard");

// Step Two ////////////////////////////////////////////////////////////
//
// Process all the input to calculate values for the user's order. The named
// values are initialized to `null`. Change that so they equal the proper value.
//
// The `prices` object below specifies the prices for each thing.

let prices = {
    sandwich: 5, // Base price for a sandwich is $5, includes bread
    meats: 1, // Each kind of meat on a sandwich costs $1
    toppings: 0.5, // Each topping costs $0.50
    condiments: 0.25 // Each condiment costs $0.25
};

// 

let meatsArray = meats.split(',');
let toppingsArray = toppings.split(',');
let condimentsArray = condiments.split(',');

// 
// 
// 
// 

let meatsCost = meatsArray.length * prices.meats;
let toppingsCost = toppingsArray.length*prices.toppings;
let condimentsCost = condimentsArray.length*prices.condiments;

// 
let subtotal = meatsCost + toppingsCost + condimentsCost + prices.sandwich;

// 
let waStateTaxRate = 0.065;
let orderTax = subtotal * waStateTaxRate;

// 
let totalPrice = subtotal+ orderTax;


// Step Three //////////////////////////////////////////////////////////
//
// 
// 
// 
// 

let receiptTemplate = `
    <p>SANDWICH ORDER</p>
    <p>Bread: ${bread} </p>
    <p>Meat: ${meats}</p>
    <p>Toppings: ${toppings}</p>
    <p>Condiments: ${condiments}</p>
    <p>---------------------</p>
    <p class="text-right">Sandwich: $${prices.sandwich.toFixed(2)}</p>
    <p class="text-right">Meat: $${meatsCost.toFixed(2)}</p>
    <p class="text-right">Toppings: $${toppingsCost.toFixed(2)}</p>
    <p class="text-right">Condiments: $${condimentsCost.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Subtotal: $${subtotal.toFixed(2)}</p>
    <p class="text-right">Tax: $${waStateTaxRate.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Total: $${totalPrice.toFixed(2)}</p>
`

///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let receiptText = document.querySelector("#receipt-text");
receiptText.innerHTML = receiptTemplate;