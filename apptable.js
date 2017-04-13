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
  this.max = max;
  this.avgCookies = avgCookies;
  this.cookieshours = [];
  this.totalCookies = 0;
  this.data = [];
  this.store_hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
  this.storenames = ['First & Pike','SeaTac Airport','Seattle Center','Capitol Hill','Alki'];
}
StoreLocation.protoype.randomCustomers = function() {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
};
StoreLocation.prototype.randomCookiesPerHour = function() {
  for(var i=0; i<this.store_hours.length; i++) {
    var avgCookies4Hour = Math.round(this.randomCustomers() * this.avgCookies);
    this.totalCookies = this.totalCookies + avgCookies4Hour;
    this.cookieshours.push(avgCookies4Hour);
  }
  return this.cookieshours;
};

StoreLocation.prototype.dataStore = function () {
  this.data.push(this.location);
  for (var i = 0; i < store_hours.length; i++) {
    this.data.push(store_hours[i] + ': ' + this.cookieshours[i]);
    + ' cookies';
  }
};




StoreLocation.prototype.createCookieDataTable = function(){

//Ok! So this is all commented out, for one, because this is mostly Duncan's code from class! its the only example of us creating a table and from there I just tried to modify his model to fit my own. Ran into problems as soon as I started looping... FYI and I didn't really know how to start this
  var table = document.createElement('table');
  var titleHeading = document.createElement('th');
  var titleRow = document.createElement('tr');

  titleRow.appendChild(titleHeading);
  table.appendChild(titleRow);

  for (var i= 0; i <this.store_hours.length; i++) {
    var cookieData = document.createElement('th');
    cookieData.textContent = this.cookieshours[i];
    this.tableRow.appendChild(cookieData);
  }
  table.appendChild(this.tableRow);
  app.appendChild(table);
};



StoreLocation.prototype.createTitlesTable = function(){

//Ok! So this is all commented out, for one, because this is mostly Duncan's code from class! its the only example of us creating a table and from there I just tried to modify his model to fit my own. Ran into problems as soon as I started looping... FYI and I didn't really know how to start this
  var table = document.createElement('table');
  var titleRow = document.createElement('tr');

  titleHeading.textContent = ' ';
  titleRow.appendChild(titleHeading);
  table.appendChild(titleRow);

  for (var i= 0; i <this.store_hours.length; i++) {
    var titles = document.createElement('th');
    titles.textContent = this.storeHours[i];
    this.tableRow.appendChild(titles);
  }
  table.appendChild(this.tableRow);
  app.appendChild(table);
};


//FINISH...





fun



var app = document.getElementById('app');


//
// StoreLocation.prototype.StoreData = function(datastore_hours) {
//   var data = new Data(datastore_hours);
//   this.data.push(data);
// };
