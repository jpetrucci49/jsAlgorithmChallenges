'use strict'
/* ORIGINAL CHALLENGE
Data Structures: Create a Hash Table
In this challenge we will learn about hash tables. A Hash table is used to implement associative arrays, or mappings of key-value pairs, like the objects and Maps we have just been studying. A JavaScript object could be implemented as a hash table, for instance (its actual implementation will depend on the environment it's running in). The way a hash table works is that it takes a key input and hashes this key in a deterministic way to some numerical value. This numerical value is then used as the actual key the associated value is stored by. Then, if you try to access the same key again, the hashing function will process the key, return the same numerical result, which will then be used to look up the associated value. This provides very efficient O(n) lookup time on average.

Hash tables can be implemented as arrays with hash functions producing array indices within a specified range. In this method, the choice of the array size is important, as is the hashing function. For instance, what if the hashing function produces the same value for two different keys? This is called a collision. One way to handle collisions is to just store both key-value pairs at that index. Then, upon lookup of either, you would have to iterate through the bucket of items to find the key you are looking for. A good hashing function will minimize collisions to maintain efficient search time.

Here, we won't be concerned with the details of hashing or hash table implementation, we will just try to get a general sense of how they work.

Instructions: Let's create the basic functionality of a hash table. We've created a naive hashing function for you to use. You can pass a string value to the function hash and it will return a hashed value you can use as a key for storage. Store items based on this hashed value in the this.collection object. Create these three methods: add, remove, and lookup. The first should accept a key value pair to add to the hash table. The second should remove a key-value pair when passed a key. The third should accept a key and return the associated value or null if the key is not present.

Be sure to write your code to account for collisions!
*/

var called = 0;
var hash = (string) => {
  called++;
  var hash = 0;
  for (var i = 0; i < string.length; i++) { hash += string.charCodeAt(i); }
  return hash;
};
var HashTable = function() {
    this.collection = {};
    // change code below this line
    this.add = (key, value) => {
        const hashed = hash(key);
        if (!this.collection[hashed]) {
            this.collection[hashed] = {};
        }
        this.collection[hashed][key] = value;
    }

    this.remove = key => {
        const hashed = hash(key);
        if (this.collection[hashed][key]) {
            delete this.collection[hashed][key];
            if (Object.entries(this.collection[hashed]).length === 0) {
                delete this.collection[hashed];
            }
        }
    }

    this.lookup = key => {
        const hashed = hash(key);
        if (this.collection.hasOwnProperty(hashed) && this.collection[hashed].hasOwnProperty(key)) {
            return this.collection[hashed][key];
        }
        return null
    }
  // change code above this line
};


/*
The HashTable data structure exists.
The HashTable has an add method.
The HashTable has an remove method.
The HashTable has an lookup method.
The add method adds key value pairs and the lookup method returns the values associated with a given key.
The remove method accepts a key as input and removes the associated key value pair.
Items are added using the hash function.
The hash table handles collisions.
*/
