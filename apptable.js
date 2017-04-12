'use strict';

var store_hours= ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

var store_names=
['First & Pike','SeaTac Airport','Seattle Center','Capitol Hill','Alki'];
//
// GroceryList.prototype.getTable = function(){
//   var table = document.createElement('table');
//
//   var titleRow = document.createElement('tr');
//   var titleHeading = document.createElement('th');
//   titleHeading.textContent = this.title;
//   titleRow.appendChild(titleHeading);
//   table.appendChild(titleRow);
//
//   var itemRow, itemName, itemPrice;
//   // create a new row for each item and add it to the table
//   for(var i = 0; i < this.items.length; i++){
//     itemRow = document.createElement('tr');
//     itemName = document.createElement('td');
//     itemName.textContent = this.items[i].name;
//     itemPrice = document.createElement('td');
//     itemPrice.textContent = this.items[i].price;
//     itemRow.appendChild(itemName);
//     itemRow.appendChild(itemPrice);
//     table.appendChild(itemRow);
//   }
//
//   return table;
// };

function StoreLocation(location, min, max, avgCookies) {
  this.location = location;
  this.min = min;
  this.max = max
  this.avgCookies = avgCookies;
  this.cookieshours= [];
  this.totalCookies= 0;
  this.data = [];
  this.headers= [];
  this.randomCustomers = function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  };
  this.randomCookiesPerHour = function() {
    for(var i=0; i<store_hours.length; i++) {
      var avgCookies4Hour = Math.round(this.randomCustomers() * this.avgCookies);
      this.totalCookies = this.totalCookies + avgCookies4Hour;
      this.cookieshours.push(avgCookies4Hour);
    }
    return this.cookieshours;
  };
  this.dataStore = function () {
    this.data.push(this.location);
    for (var i = 0; i < store_hours.length; i++) {
      this.data.push(store_hours[i] + ': ' + this.cookieshours[i]);
      + ' cookies';
    }
  };
}

// function Data(store_hours) {
//   this.cookieshours= [];
//   this.randomCustomers = function() {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   };
//   this.randomCookiesPerHour = function() {
//     for(var i=0; i<store_hours.length; i++) {
//       var avgCookies4Hour = Math.round(this.randomCustomers() * this.avgCookies);
//       this.totalCookies = this.totalCookies + avgCookies4Hour;
//       this.cookieshours.push(avgCookies4Hour);
//     }
//   };
//   this.data = function () {
//     for (var i = 0; i < store_hours.length; i++) {
//       store_hours[i] + ': ' + this.cookieshours[i]
//       + ' cookies';
//     }
//   };
// }



StoreLocation.prototype.getTable = function(){
  var table = document.createElement('table');
  var titleRow = document.createElement('tr');
  var titleHeading = document.createElement('th');
  titleHeading.textContent = this.location;
  titleRow.appendChild(titleHeading);
  table.appendChild(titleRow);

  var Row, Store, value;
  // create a new row for each item and add it to the table
  for(var i = 0; i < this.store_names.length; i++){
    Row = document.createElement('tr');
    table.appendChild(Row);
    Store = document.createElement('th');
    Value  = document.createElement('td');
    Value.textContent = store_hours[i] + ': ' + this.cookieshours[i];
    itemPrice = document.createElement('td');
    itemPrice.textContent = this.items[i].price;
    Row.appendChild(itemName);
    Row.appendChild(itemPrice);
    table.appendChild(Row);
  }

  return table;
};

var app = document.getElementById('app');



//
// StoreLocation.prototype.StoreData = function(datastore_hours) {
//   var data = new Data(datastore_hours);
//   this.data.push(data);
// };
