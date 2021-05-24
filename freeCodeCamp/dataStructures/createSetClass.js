'use strict'
/* ORIGINAL CHALLENGE
Data Structures: Create a Set Class
In the next few exercises we are going to create a function to emulate a data structure called a "Set". A Set is like an array, but it cannot contain duplicate values. The typical use for a Set is to simply check for the presence of an item. This can be implemented with an object, for instance:

var set = new Object();
set.foo = true;
// See if foo exists in our set:
console.log(set.foo) // true
In the next few exercises, we will build a full featured Set from scratch.

For this exercise, create a function that will add a value to our set collection as long as the value does not already exist in the set. For example:

this.add = function(element) {
//some code to add value to the set
}
The function should return true if the value is successfully added and false otherwise.
*/

function Set() {
    // the var collection will hold our set
    var collection = [];
    // this method will check for the presence of an element and return true or false
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };
    // this method will return all the values in the set
    this.values = function() {
        return collection;
    };
    // change code below this line
    this.add = function(elem) {
      if (this.has(elem)){
        return false;
      }
      collection.push(elem);
      return true;
    }
    // change code above this line
}

/*
Your Set class should have an add method.
Your add method should not add duplicate values.
Your add method should return true when a value has been successfully added.
Your add method should return false when a duplicate value is added.
*/
