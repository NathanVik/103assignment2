var productName=prompt("What is the name of your product?");
console.log(productName);

var productQuantity=prompt("What is the quantity of the product? Please use a numeric value");
console.log(productQuantity);

var productPrice=prompt("What is the price of your product? Please use a numeric value in USD");
console.log(productPrice);

var productTaxPrice=Number(productPrice)*1.16;
console.log("Price with tax per unit is " + Number(productTaxPrice));

console.log("Total price is " + Number(productQuantity)*Number(productTaxPrice));