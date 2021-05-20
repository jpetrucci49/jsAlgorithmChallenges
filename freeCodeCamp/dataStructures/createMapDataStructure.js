'use strict'
/* ORIGINAL CHALLENGE
Data Structures: Create a Map Data Structure
The next few challenges will cover maps and hash tables. Maps are data structures that store key-value pairs. In JavaScript, these are available to us as objects. Maps provide rapid lookup of stored items based on key values and are very common and useful data structures.

Instructions: Let's get some practice creating our own map. Because JavaScript objects provide a much more efficient map structure than anything we could write here, this is intended primarily as a learning exercise. However, JavaScript objects only provide us with certain operations. What if we wanted to define custom operations?

Use the Map object provided here as a wrapper around a JavaScript object. Create the following methods and operations on the Map object:


add accepts a key, value pair to add to the map.

remove accepts a key and removes the associated key, value pair

get accepts a key and returns the stored value

has accepts a key and returns true if the key exists or false if it doesn't.

values returns an array of all the values in the map

size returns the number of items in the map

clear empties the map
*/

var Map = function() {
    this.collection = {};
    // change code below this line
    this.add = (key, value) => this.collection[key] = value;
    this.remove = key => delete this.collection[key]
    this.get = key => this.collection[key]
    this.has = key => this.collection[key] ? true : false
    this.values = () => Object.values(this.collection)
    this.size = () => this.values().length
    this.clear = () => Object.keys(this.collection).forEach(e => delete this.collection[e])
    // change code above this line
};

const s = new Map()
s.add('gi', 2)
console.log(s.values())

/*
The Map data structure exists.
The Map object has the following methods: add, remove, get, has, values, clear, and size.
The add method adds items to the map.
The has method returns true for added items and false for absent items.
The get method accepts keys as input and returns the associated values.
The values method returns all the values stored in the map as strings in an array.
The clear method empties the map and the size method returns the number of items present in the map.
*/
