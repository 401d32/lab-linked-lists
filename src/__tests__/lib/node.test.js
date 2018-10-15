'use strict';

const Node = require('../../lib/node.js');

describe('Node Module', () => {
  it('This constructor should be able to create a new Node module when there is a value passed through.', () => {
    let value = '__New value__';
    let node = new Node(value);
    expect(node.value).toEqual(value);
    expect(node.next).toBeNull();
    console.log(node);
  });
});