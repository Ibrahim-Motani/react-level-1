import { data } from "./customer-data.js";

// total data
console.log(data);


// total orders
 const totalOrders = data.length
console.log(totalOrders);


// total amount of orders
const totalAmount = data.reduce((acc, curr) => acc += curr.Amount, 0);
console.log(totalAmount);

// filtering customers by phone number
const uniqueCostumersNumbers = [...new Set(data.map(customer => customer.Phone))];
console.log(uniqueCostumersNumbers);
console.log(uniqueCostumersNumbers.length);

// getting names for unique customers found above 
let uniqueCostumersNames = {};
uniqueCostumersNumbers.forEach(customer => {
    for (let i = 0; i < data.length; i++) {
        if (customer === data[i].Phone) {
            uniqueCostumersNames[customer] = data[i].Name;
        }
    };
});
console.log(uniqueCostumersNames);
console.log(Object.keys(uniqueCostumersNames).length);


// let uniqueCustomersDetails = [];
// uniqueCostumersNumbers.forEach(customer => {
//   for (let i = 0; i < data.length; i++) {
//     if (customer === data[i].Phone) {
//       uniqueCustomersDetails.push(data[i]);
//       break;
//     }
//   }
// });
// console.log(uniqueCustomersDetails);


// getting a lit of number of orders for each customer
let numberOfOrdersForEachCustomer = {};
uniqueCostumersNumbers.forEach(customer => {
  for (let i = 0; i < data.length; i++) {
    if (customer === data[i].Phone) {
      if (numberOfOrdersForEachCustomer.hasOwnProperty(customer))
        numberOfOrdersForEachCustomer[customer] =
          numberOfOrdersForEachCustomer[customer] + 1;
      else numberOfOrdersForEachCustomer[customer] = 1;
    }
  }
});

console.log(numberOfOrdersForEachCustomer);

// order distribution
let exactlyOne = 0;
let exactlyTwo = 0;
let exactlyThree = 0;
let exactlyFour = 0;
let FiveAndAbove = 0;

for (let customer in numberOfOrdersForEachCustomer) {
  if (numberOfOrdersForEachCustomer[customer] === 1) exactlyOne += 1;
  if (numberOfOrdersForEachCustomer[customer] === 2) exactlyTwo += 1;
  if (numberOfOrdersForEachCustomer[customer] === 3) exactlyThree += 1;
  if (numberOfOrdersForEachCustomer[customer] === 4) exactlyFour += 1;
  if (numberOfOrdersForEachCustomer[customer] >= 5) FiveAndAbove += 1;
}

console.log(`1 = ${exactlyOne}`);
console.log(`2 = ${exactlyTwo}`);
console.log(`3 = ${exactlyThree}`);
console.log(`4 = ${exactlyFour}`);
console.log(`5 >= ${FiveAndAbove}`);


//  unique customer order details 
let uniqueCustomerOrderDetails = {};
uniqueCostumersNumbers.forEach(uniqueCustomer => {
  let temp = [];
  for (let customer of data) {
    if (uniqueCustomer === customer.Phone) {
      temp = [...temp, customer];
    }
    uniqueCustomerOrderDetails[uniqueCustomer] = temp;
  }
});
console.log(uniqueCustomerOrderDetails);
console.log(Object.keys(uniqueCustomerOrderDetails).length);


