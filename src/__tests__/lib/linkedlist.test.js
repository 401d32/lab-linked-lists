'use strict';

let LinkedList = require('../../lib/linkedlist');

describe('Linked List Constructor', () => {
  it('constructor should be null', () => {
    let list = new LinkedList();
    expect(list.head).toBeNull();
  });
  describe('Append method', () => {
    it('will append a new value to the end while keeping the same values', () => {
      let list = new LinkedList();

      list.append(1);
      list.append(2);
      list.append(3);

      expect(list.head.value).toBe(1);
      expect(list.head.next.value).toBe(2);
      expect(list.head.next.next.value).toBe(3);
    });
  });

  describe('Prepend method', () => {
    it('Should change the head to the value given', () => {
      let list = new LinkedList();

      list.append('Birdie');
      list.append('Billie Jean');
      list.prepend('Cara');
      expect(list.head.value).toBe('Cara');
      expect(list.head.next.value).toBe('Birdie');
      expect(list.head.next.next.value).toBe('Billie Jean');
    });
  });
});