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
var store_hours= ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
/*
var FIRSTANDPIKEUL = document.getElementById('first and pike');
var SEATACAIRPORT = document.getElementById('SeaTac Airport');
var SEATTLECENTER = document.getElementById('Seattle Center');
var CAPITOLHILL = document.getElementById('Capitol Hill');
var ALKI = document.getElementById('Alki');
*/
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



var Seattle_Center = {
  location:'Seattle_Center',
  header:'h4',
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
    var div = document.getElementsByClassName(this.location)[0];
    var title = document.createElement(this.header);
    title.textContent = this.location;
    title.setAttribute('id','title');
    console.log(title);
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

var SeaTac_Airport = {
  location:'SeaTac_Airport',
  header:'h3',
  min: 3,
  max: 24,
  avgCookies: 1.2,
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
    console.log(title);
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


var Seattle_Center = {
  location:'Seattle_Center',
  header:'h4',
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
    var div = document.getElementsByClassName(this.location)[0];
    var title = document.createElement(this.header);
    title.textContent = this.location;
    title.setAttribute('id','title');
    console.log(title);
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

var Capitol_Hill = {
  location:'Capitol_Hill',
  header:'h5',
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
    var div = document.getElementsByClassName(this.location)[0];
    var title = document.createElement(this.header);
    title.textContent = this.location;
    title.setAttribute('id','title');
    console.log(title);
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


var Alki = {
  location:'Alki',
  header:'h6',
  min: 2,
  max: 16,
  avgCookies: 4.6,
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
    console.log(title);
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


first_and_pike.callfunction();
SeaTac_Airport.callfunction();
Seattle_Center.callfunction();
Capitol_Hill.callfunction();
Alki.callfunction();

  //structure: function () {
    //var locationUl = document.getElementById(this.location);
  //}

//};
//console.log(first_and_pike.totalCookies())
/* this will create array, combining store_hours[i]+":"+randomCookiesPerHour[i];
//results: function() {

}[this.min,this.max,this.avgCookies,this.randomCustomers(), this.avgCookiesPerHr()],
*/

/*
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

console.log(randomCookiesPerHour());
/*
console.log(first_and_pike.listCreation);
console.log(first_and_pike.randomCustomers());
console.log(first_and_pike.randomCookies());
*/
