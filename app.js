'use strict';
/*
I am going to organize my salmon cookie shop's products... create a products' array full of product objects...

Within the product objects
  cookies
    cookieName
    bake_date
    Price
    Ingredients
    Description
  brownies
    brownieName
    Price
    Ingredients
    Description
  smoothies
    smoothieName
    Price
    Ingredients
    Description
*/

//
// lemon.cookieName = 'salmon lemon biscuit';
// lemon.bake_date ='4/10/17';
// lemon.price = 4.99;
// lemon.ingredients = ['salmon','lemons','eggs'];
// lemon.description = 'yummy lemon and salmon, together!';
//
// sugar.cookieName = 'salmon sugar cookie';
// sugar.bake_date ='4/10/17';
// sugar.price = 1.99;
// sugar.ingredients = ['salmon','cinnamon','sugar'];
// sugar.description = 'delicious salmon and cinnamon sweet cookies, yum!';

//NOTE: I totally missed the assignment domain page at the bottom! starting over!!!!

//1.


var FIRSTANDPIKEUL = document.getElementById('first and pike');
var SEATACAIRPORT = document.getElementById('SeaTac Airport');
var SEATTLECENTER = document.getElementById('Seattle Center');
var CAPITOLHILL = document.getElementById('Capitol Hill');
var ALKI = document.getElementById('Alki');

var first_and_pike = {
  min: 23,
  max: 65,
  avgCookies: 6.3,
  totalCookiesSold: 0,
  randomCustomers: function() {
  return Math.floor(Math.random()*(this.max-this.min+1)+this.min);
},
randomCookies: function() {
  return Math.round(this.randomCustomers()*this.avgCookies);
},
//results: [this.min,this.max,this.avgCookies,this.randomCustomers(), this.avgCookiesPerHr()],
store_hours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],


listCreation: function(){
for (var i=0; i< 15; i++) {
  var results=[];
  store_hours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
  results.push(this.store_hours[i]+":"+randomCookies());
  console.log(this.store_hours[i]);
  //ALRIGHT... I have hit a roadblock... I want to write BOTH my functions I used before! like this.... this.store_hours[i]+":"+this.avgCookiesPerHr, and then append the results to the results array! But I cant! What is "this" object changing and why have I been able to use it before...
  var listItem = document.createElement('li');
  listItem.textContent= results[i];
  FIRSTANDPIKEUL.appendChild(listItem);
}
}
}

console.log(first_and_pike.listCreation);
console.log(first_and_pike.randomCustomers());
console.log(first_and_pike.randomCookies());
