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

var store_hours={
  times:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm']
}
console.log(store_hours.length);

var FIRSTANDPIKE = document.getElementById('title');

var first_and_pike = {
  min: 23,
  max: 65,
  avgCookies: 6.3,
  hours: 0,
  randomCustomers: function() {
  return Math.floor(Math.random()*(this.max-this.min+1)+this.min);
},
avgCookiesPerHr: function() {
  return Math.round(this.randomCustomers()*this.avgCookies);
},
results: [this.min, this.max, this.avgCookies,this.randomCustomers(), this.avgCookiesPerHr()],
store_hours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
listCreation: function(){
for (var i=0; i< 15; i++) {
  console.log(this.store_hours[i]);
}
}


console.log(first_and_pike.avgCookiesPerHr());
