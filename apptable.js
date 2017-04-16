'use strict';

var store_hours= ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

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
StoreLocation.prototype.randomCustomers = function() {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
};
StoreLocation.prototype.randomCookiesPerHour = function() {
  for(var i=0; i<this.store_hours.length; i++) {
    var avgCookies4Hour = Math.round(this.randomCustomers() * this.avgCookies);
    this.totalCookies = this.totalCookies + avgCookies4Hour;
    this.cookieshours.push(avgCookies4Hour);
    //console.log(this.totalCookies);
  }
};
StoreLocation.prototype.dataStore = function () {
  this.data.push(this.location);
  for (var i = 0; i < store_hours.length; i++) {
    this.data.push(store_hours[i] + ': ' + this.cookieshours[i]);
    + ' cookies';
  }
  return this.data;
};

StoreLocation.prototype.createCookiesTitle = function(){
  var table = document.getElementById('app');
  var tableRow = document.createElement('tr');
  var empty = document.createElement('th');
  empty.setAttribute('id','data-titles');
  empty.textContent = 'Store';
  tableRow.appendChild(empty);

  for (var i= 0; i <this.store_hours.length; i++) {
    var titles = document.createElement('th');
    titles.setAttribute('id','data-titles');
    titles.textContent = this.store_hours[i];
    tableRow.appendChild(titles);
  }
  table.appendChild(tableRow);
  var total = document.createElement('th');
  total.setAttribute('id','data-titles');
  total.textContent='Totals';
  tableRow.appendChild(total);
};

/* CodeReview...
StoreLocation.prototype.generatedRow = function() {
  var row= document.createElement('tr');
  var storeName = document.createElement('td');
  storeName.textContent=this.name;
  row.appendChild(storeName);
  return row;

  var cookiesSoldTd;
  for(var i=0; i< this.hourly CookiesSold.length; i++){
    cookiesSold = document.createElement('td');
    cookiesSold.textContent = this.hourlyCookiesSold[i];
    row.appendChild(cookiesSold);
  }
  //var totalSold= document.createElement
  totalSold,textContent = this.totalCookiesSold;
  row.appendChild(totalsSold);
};
*/

//Wait a second now... isn't this asking to create totals for all hours of each store??! not for the day...
/*
StoreLocation.prototype.createCookiesTotal = function(){
  var table = document.getElementById('app');
  var tableRow = document.createElement('tr');
  tableRow.document.setAttribute('id','header');
  console.log(tableRow);
  var empty = document.createElement('td');
  tableRow.appendChild(empty);

  for (var i= 0; i <this.store_hours.length; i++) {
    var titles = document.createElement('th');
    titles.textContent = this.store_hours[i];
    tableRow.appendChild(titles);
  }
  table.appendChild(tableRow);
};
*/
StoreLocation.prototype.createCookiesData = function(){
  var table = document.getElementById('app');
  var tableRow = document.createElement('tr');
  table.appendChild(tableRow);
  var store_name = document.createElement('td');
  store_name.textContent = this.location;
  tableRow.appendChild(store_name);
  this.randomCookiesPerHour();
  for (var i= 0; i <this.store_hours.length; i++) {
    var cookieData = document.createElement('td');
    cookieData.textContent = this.cookieshours[i];
    //console.log(cookieData);
    tableRow.appendChild(cookieData);
  }
  table.appendChild(tableRow);
  var total = document.createElement('td');
  total.textContent='Total: '+this.totalCookies;
  tableRow.appendChild(total);
};


var pike = new StoreLocation('Pike & 1st', 23, 65, 6.3);
var seatac = new StoreLocation('SeaTac Airport', 3, 24, 1.2);
var seattleCenter =  new StoreLocation('Seattle Center', 11, 38, 3.7);
var caphill = new StoreLocation('Capitol Hill', 20, 38, 2.3);

var alki = new StoreLocation('Alki', 2, 16, 4.6);


pike.createCookiesTitle();
pike.createCookiesData();
seatac.createCookiesData();
seattleCenter.createCookiesData();
caphill.createCookiesData();
alki.createCookiesData();



//FINISH...
