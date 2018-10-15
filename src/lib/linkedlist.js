'use strict';

const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) { 
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    return this;
  }

  prepend(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }

    node.next = this.head;
    this.head = node;
  }

  reverse(list) {
    if (!list) throw new Error ('missing input');
    if (!list.head) throw new Error ('list must not be empty');
    let prevNode = null;
    let currNode = list.head;
    let nextNode = null;

    while(currNode) {
      nextNode = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = nextNode;
    }
    return prevNode;
  }
}

module.exports = LinkedList;

  //   let curr = this.head;
  //   let next = null;
  //   let prev = null;

  //   while(curr) {
  //     next = curr.next;
  //     curr.next = prev;
  //     prev = curr;
  //     curr = next;
  //   }
  //   this.head = prev;
  // }