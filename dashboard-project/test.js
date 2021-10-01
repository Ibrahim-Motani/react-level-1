import { data } from './customer-data.js';

// total data
console.log(data);


// total orders
 const totalOrders = data.length
console.log(totalOrders);


// total amount of orders
const totalAmount = data.reduce((acc, curr) => acc += curr.Amount, 0);
console.log(totalAmount);


// unique customer names
const uniqueCostumersNames = [...new Set(data.map(customer => customer.Name))];
console.log(uniqueCostumersNames);


// unique customer length
const uniqueCostumersLength = uniqueCostumersNames.length;
console.log(uniqueCostumersLength);


// unique customer details
let uniqueCustomersDetails = [];
uniqueCostumersNames.forEach(customer => {
    for (let i = 0; i < data.length; i++) {
        if (customer === data[i].Name) {
            uniqueCustomersDetails.push(data[i]);
            break;
        }
    }
});
console.log(uniqueCustomersDetails);


// getting a lit of number of orders for each customer
let numberOfOrdersForEachCustomer = {};
uniqueCostumersNames.forEach(customer => {
    for (let i = 0; i < data.length; i++) {
        if (customer === data[i].Name) {
            if (numberOfOrdersForEachCustomer.hasOwnProperty(customer)) 
              numberOfOrdersForEachCustomer[customer] =
                numberOfOrdersForEachCustomer[customer] + 1;
            else 
              numberOfOrdersForEachCustomer[customer] = 1;  
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
    if (numberOfOrdersForEachCustomer[customer] === 1)
        exactlyOne += 1;
    if (numberOfOrdersForEachCustomer[customer] === 2) exactlyTwo += 1;
    if (numberOfOrdersForEachCustomer[customer] === 3) exactlyThree += 1;
    if (numberOfOrdersForEachCustomer[customer] === 4) exactlyFour += 1;
    if (numberOfOrdersForEachCustomer[customer] >= 5) FiveAndAbove += 1;
};

console.log(`1 = ${exactlyOne}`);
console.log(`2 = ${exactlyTwo}`);
console.log(`3 = ${exactlyThree}`);
console.log(`4 = ${exactlyFour}`);
console.log(`5 >= ${FiveAndAbove}`);


//  unique customer order details 
let uniqueCustomerOrderDetails = {};
uniqueCostumersNames.forEach(uniqueCustomer => {
    let temp = [];
    for (let customer of data) {
        if (uniqueCustomer === customer.Name) {
            temp = [...temp, customer];
        }
        uniqueCustomerOrderDetails[uniqueCustomer] = temp;
    };
});
console.log(uniqueCustomerOrderDetails);
console.log(Object.keys(uniqueCustomerOrderDetails).length);

