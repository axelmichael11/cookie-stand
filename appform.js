'use strict';

function StoreLocation(location, min, max, avgCookies) {
  this.location = location;
  this.min = min;
  this.max = max;
  this.avgCookies = avgCookies;
  this.cookieshours = [];
  this.totalCookies = 0;
  this.data = [];
  this.headers = [];
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
  for (var i = 0; i < this.store_hours.length; i++) {
    this.data.push(this.store_hours[i] + ': ' + this.cookieshours[i]);
    + ' cookies';
  }
};

// StoreLocation.prototype.createCookieDataTable = function(){
//
// //Ok! So this is all commented out, for one, because this is mostly Duncan's code from class! its the only example of us creating a table and from there I just tried to modify his model to fit my own. Ran into problems as soon as I started looping... FYI and I didn't really know how to start this
//   var table = document.createElement('table');
//   var titleHeading = document.createElement('th');
//   var titleRow = document.createElement('tr');
//
//   titleRow.appendChild(titleHeading);
//   table.appendChild(titleRow);
//
//   for (var i= 0; i <this.store_hours.length; i++) {
//     var cookieData = document.createElement('th');
//     cookieData.textContent = this.cookieshours[i];
//     this.tableRow.appendChild(cookieData);
//   }
//   table.appendChild(this.tableRow);
//   app.appendChild(table);
// };


// StoreLocation.prototype.createTitles = function(){
//
// //Ok! So this is all commented out, for one, because this is mostly Duncan's code from class! its the only example of us creating a table and from there I just tried to modify his model to fit my own. Ran into problems as soon as I started looping... FYI and I didn't really know how to start this
//   var table = document.createElement('table');
//   var titleHeading = document.createElement('th');
//   var titleRow = document.createElement('tr');
//
//   titleHeading.textContent = ' ';
//   titleRow.appendChild(titleHeading);
//   table.appendChild(titleRow);
//
//   for (var i= 0; i <this.store_hours.length; i++) {
//     var titles = document.createElement('th');
//     titles.textContent = this.storeHours[i];
//     this.tableRow.appendChild(titles);
//   }
//   table.appendChild(this.tableRow);
//   app.appendChild(table);
// };
//
function handleSubmitLocation(event) {
  event.preventDefault();
  //streamline the code a little bit...
  var form = event.target;
  var storeLocation = form.storeLocation.value;
  var minimum = form.minimum.value;
  var maximum = form.maximum.value;
  var averageCookies = form.averageCookies.value;
  var listLocation = form.listSelect.value;
}

var locationCreateForm = document.getElementById('formGenerator');
locationCreateForm.addEventListener('submit', handleSubmitLocation);
