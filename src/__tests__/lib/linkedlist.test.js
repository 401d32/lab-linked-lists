'use strict';

let LinkedList = require('../../lib/linkedlist');
let reverse = require('../../lib/linkedlist');

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

      expect(list.value).toBe(3);
      expect(list.head.next.value).toBe(2);
      expect(list.head.next.next.value).toBe(1);
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

  describe('A reversed Singly Linked List', () => {
    it('Should return with the head at the end, and the tail at the head', () => {
      let list = new LinkedList();

      list.append(1);
      list.append(2);
      list.append(3);
      list.append(4);

      expect(list.head.value).toEqual(4);
      expect(list.next.value).toEqual(3);
      expect(list.next.next.value).toEqual(2);
      expect(list.next.next.next.value).toEqual(1);
    });
    test('should err out if list is empty', () => {
      const list = new LinkedList();
      expect(() => reverse(list)).toThrow('missing input');
    });
  });
});