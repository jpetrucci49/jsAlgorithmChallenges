'use strict'
/* ORIGINAL CHALLENGE
Data Structures: Create a Circular Queue
In this challenge you will be creating a Circular Queue. A circular queue is basically a queue that writes to the end of a collection then begins over writing itself at the beginning of the collection. This is type of data structure has some useful applications in certain situations. For example, a circular queue can be used for streaming media. Once the queue is full, new media data simply begins to overwrite old data.

A good way to illustrate this concept is with an array:

[1, 2, 3, 4, 5]
^Read @ 0
^Write @ 0
Here the read and write are both at position 0. Now the queue gets 3 new records a, b, and c. Our queue now looks like:

[a, b, c, 4, 5]
^Read @ 0
^Write @ 3
As the read head reads, it can remove values or keep them:

[null, null, null, 4, 5]
^Read @ 3
^Write @ 3
Once the write reaches the end of the array it loops back to the beginning:

[f, null, null, d, e]
^Read @ 3
^Write @ 1
This approach requires a constant amount of memory but allows files of a much larger size to be processed.

Instructions:

In this challenge we will implement a circular queue. The circular queue should provide enqueue and dequeue methods which allow you to read from and write to the queue. The class itself should also accept an integer which you can use to specify the size of the queue when you create it. We've written the starting version of this class for you in the code editor. When you enqueue items to the queue, the write pointer should advance forward and loop back to the beginning once it reaches the end of the queue. Likewise, the read pointer should advance forward as you dequeue items. The write pointer should not be allowed to move past the read pointer (our class won't let you overwrite data you haven't read yet) and the read pointer should not be able to advance past data you have written.

In addition, the enqueue method should return the item you enqueued if it is successfully and otherwise return null. Similarly, when you dequeue an item it should be returned and if you cannot dequeue you should return null.
*/
class CircularQueue {
   constructor(size) {
     this.queue = [];
     this.read = 0;
     this.write = 0;
     this.max = size - 1;

     while (size > 0) {
        this.queue.push(null);
        size--;
     }
   }

   print() {
     return this.queue;
   }

   enqueue(item) {
    // Only change code below this line
    if (this.queue[this.write] === null){
      this.queue[this.write] = item;
      this.write++;
      this.write %= this.queue.length;
      return item;
    }
    return null;
    // Only change code above this line
   }

   dequeue() {
    // Only change code below this line
    if (this.queue[this.read] !== null) {
      const item = this.queue[this.read];
      this.queue[this.read] = null;
      this.read++;
      this.read %= this.queue.length;
      return item;
    }
    return null;
    // Only change code above this line
   }
}

/*
The enqueue method adds items to the circular queue.
You cannot enqueue items past the read pointer.
The dequeue method dequeues items from the queue.
After an item is dequeued its position in the queue should be reset to null.
Trying to dequeue past the write pointer returns null and does not advance the write pointer.
*/
