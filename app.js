'use strict';

//1.
var store_hours= ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

var store_names=
['First & Pike','SeaTac Airport','Seattle Center','Capitol Hill','Alki'];


var first_and_pike = {
  location:'1st and Pike',
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
    return this.cookieshours;
  },
  structureGenerator: function() {
    var div = document.getElementById(this.location);
    var ul = document.createElement('ul');
    ul.setAttribute('id','title');
    ul.textContent = this.location;
    console.log(div);
    console.log(ul);
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

var Seattle_Center = {
  location:'Seattle Center',
  min: 11,
  max: 38,
  avgCookies: 3.7,
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
    var div = document.getElementById(this.location);
    var ul = document.createElement('ul');
    ul.setAttribute('id','title');
    ul.textContent = this.location;
    console.log(div);
    console.log(ul);
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

var SeaTac_Airport = {
  location:'SeaTac Airport',
  min: 3,
  max: 24,
  avgCookies: 1.2,
  cookieshours: [],
  totalCookies:0,
  randomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  randomCookiesPerHour: function() {
    for(var i=0; i<store_hours.length; i++) {
      var avgCookies4Hour = Math.round(this.randomCustomers() * this.avgCookies);
      this.totalCookies = this.totalCookies + avgCookies4Hour;
      this.cookieshours.push(avgCookies4Hour);
    }
  },
  structureGenerator: function() {
    var div = document.getElementById(this.location);
    var ul = document.createElement('ul');
    ul.setAttribute('id','title');
    ul.textContent = this.location;
    console.log(div);
    console.log(ul);
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


var Seattle_Center = {
  location:'Seattle Center',
  min: 11,
  max: 38,
  avgCookies: 3.7,
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
    var div = document.getElementById(this.location);
    var ul = document.createElement('ul');
    ul.setAttribute('id','title');
    ul.textContent = this.location;
    console.log(div);
    console.log(ul);
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

var Capitol_Hill = {
  location:'Capitol Hill',
  min: 20,
  max: 38,
  avgCookies: 2.3,
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
    var div = document.getElementById(this.location);
    var ul = document.createElement('ul');
    ul.setAttribute('id','title');
    ul.textContent = this.location;
    console.log(div);
    console.log(ul);
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


var Alki = {
  location:'Alki',
  min: 2,
  max: 16,
  avgCookies: 4.6,
  cookieshours: [],
  totalCookies:0,
  randomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  randomCookiesPerHour: function () {
    for(var i=0; i<store_hours.length; i++) {
      var avgCookies4Hour = Math.round(this.randomCustomers() * this.avgCookies);
      this.totalCookies = this.totalCookies + avgCookies4Hour;
      this.cookieshours.push(avgCookies4Hour);
    }
  },
  structureGenerator: function () {
    var div = document.getElementById(this.location);
    var ul = document.createElement('ul');
    ul.setAttribute('id','title');
    ul.textContent = this.location;
    console.log(div);
    console.log(ul);
    div.appendChild(ul);
  },

  listGenerator: function () {
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


first_and_pike.callfunction();
SeaTac_Airport.callfunction();
Seattle_Center.callfunction();
Capitol_Hill.callfunction();
Alki.callfunction();
