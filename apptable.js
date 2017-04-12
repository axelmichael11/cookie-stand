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
  this.data = [];
}

function Data(array) {
  this.cookieshours= [];
  this.randomCustomers = function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  };
  this.randomCookiesPerHour = function() {
    for(var i=0; i<array.length; i++) {
      var avgCookies4Hour = Math.round(this.randomCustomers() * this.avgCookies);
      this.totalCookies = this.totalCookies + avgCookies4Hour;
      this.cookieshours.push(avgCookies4Hour);
    }
  };
  this.data = function () {
    for (var i = 0; i < array.length; i++) {
      array[i] + ': ' + this.cookieshours[i]
      + ' cookies';
    }
  };
}


StoreLocation.prototype.StoreData = function(dataArray) {
  var data = new Data(dataArray);
  this.data.push(data);
};


var first_and_pike = {
  location:'1st_and_Pike',
  header:'h2',
  min: 23,
  max: 65,
  avgCookies: 6.3,
  cookieshours: [],
  totalCookies:0,
  randomCustomers: function() {
    return Math.floor(Math.random()*(this.max-this.min+1)+this.min);
  },

  randomCookiesPerHour: function() {
    for(var i=0; i<store_hours.length; i++) {
      var avgCookies4Hour = Math.round(this.randomCustomers() * this.avgCookies);
      this.totalCookies = this.totalCookies + avgCookies4Hour;
      this.cookieshours.push(avgCookies4Hour);
    }
  },
  structureGenerator: function() {
    var div = document.getElementsByClassName(this.location)[0];
    var title = document.createElement(this.header);
    title.textContent = this.location;
    title.setAttribute('id','title');
    //console.log(title);
    div.appendChild(title);
    var ul = document.createElement('ul');
    ul.setAttribute('id',this.location);
    ul.textContent = this.location;
    div.appendChild(ul);
  },

  listGenerator: function() {
    var ul = document.getElementById(this.location);
    for (var i = 0; i < store_hours.length; i++) {
      var li = document.createElement('li');
      li.textContent = store_hours[i] + ': ' + this.cookieshours[i]
      + ' cookies';
      ul.appendChild(li);
    }
  },
  callfunction: function () {
    this.randomCookiesPerHour();
    this.structureGenerator();
    this.listGenerator();
  }
};

function StoreLocation(location, min, max, avgCookies) {
  this.location = location;
  this.min = min;
  this.max = max
  this.avgCookies = avgCookies;
  this.randomCustomers = function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  };
  this.randomCookiesPerHour = function() {
    for(var i=0; i<store_hours.length; i++) {
      var avgCookies4Hour = Math.round(this.randomCustomers() * this.avgCookies);
      this.totalCookies = this.totalCookies + avgCookies4Hour;
      this.cookieshours.push(avgCookies4Hour);
    }
  };
}
