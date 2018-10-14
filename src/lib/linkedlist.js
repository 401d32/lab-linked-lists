'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }


  append(value) {
    // 
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      return this;
    }
  }
};