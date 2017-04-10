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
var cookies={};

var chocolate ={};
var lemon ={};
var sugar ={};

console.log(cookies);

chocolate.cookieName = 'salmon chocolate chip cookie';
chocolate.bake_date ='4/10/17';
chocolate.price = 2.99;
chocolate.ingredients = ['salmon','chocolate chips','cookie dough'];
chocolate.description = 'yummy salmon and choco chips! ma favorite combo';

lemon.cookieName = 'salmon lemon biscuit';
lemon.bake_date ='4/10/17';
lemon.price = 4.99;
lemon.ingredients = ['salmon','lemons','eggs'];
lemon.description = 'yummy lemon and salmon, together!';

sugar.cookieName = 'salmon sugar cookie';
sugar.bake_date ='4/10/17';
sugar.price = 1.99;
sugar.ingredients = ['salmon','cinnamon','sugar'];
sugar.description = 'delicious salmon and cinnamon sweet cookies, yum!';

console.log(chocolate);
