'use strict'
/* ORIGINAL CHALLENGE
Data Structures: Create a Doubly Linked List
All of the linked lists we've created so far are singly linked lists. Here, we'll create a doubly linked list. As the name implies, nodes in a doubly linked list have references to the next and previous node in the list.

This allows us to traverse the list in both directions but it also requires more memory to be used because every node must contain an additional reference to the previous node in the list.


We've provided a Node object and started our DoublyLinkedList. Let's add two methods to our doubly linked list called add and remove. The add method should add the given element to the list while the remove method should remove all occurrences of a given element in the list.

Be careful to handle any possible edge cases when writing these methods, such as deletions for the first or last element. Also, removing any item on an empty list should return null.
*/

var Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  // change code below this line
  this.add = data => {
    if (!this.head) {
			this.head = new Node(data, null);
			this.tail = this.head;
		} else {
			let node = this.head;
			let prev = null;
			while (node.next) {
				prev = node;
				node = node.next;
			};
			let newNode = new Node(data, node);
			node.next = newNode;
			this.tail = newNode;
		};
  }
  this.remove = function(data) {
		if (this.head == null) {
			return null;
		} else {
			let node = this.head;
			let prev = null;
			while (node.next != null) {
				if (node.data == data) {
					let nextNode = node.next;
					if (prev == null) {
						nextNode.prev = null;
						this.head = nextNode;
						node = nextNode;
					} else {
						prev.next = nextNode;
						nextNode.prev = prev;
						node = nextNode;
					}
				} else {
					prev = node;
					node = node.next;
				};
			};
			if (node.data == data) {
				prev.next = null;
				this.tail = prev;
			};
		};
	};
  // change code above this line
};

/*
The DoublyLinkedList data structure exists.
The DoublyLinkedList has a method called add.
The DoublyLinkedList has a method called remove.
Removing an item from an empty list returns null.
The add method adds items to the list.
Each node keeps track of the previous node.
The first item can be removed from the list.
The last item can be removed from the list.
*/
