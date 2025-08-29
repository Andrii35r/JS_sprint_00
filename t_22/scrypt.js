export class LinkedList {
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;
  }

  add(value) {
    if (this.data === null) {
      this.data = value;
    } else {
      let current = this;
      while (current.next) {
        current = current.next;
      }
      current.next = new LinkedList(value);
    }
  }

  remove() {
    if (this.next) {
      this.data = this.next.data;
      this.next = this.next.next;
    } else {
      this.data = null;
    }
  }

  contains(value) {
    if (this.data === value) {
      return true;
    }
    if (this.next === null) {
      return false;
    }
    return this.next.contains(value);
  }

  clear() {
    this.data = null;
    this.next = null;
  }

  count() {
    if (this.data === null) {
      return 0;
    }
    if (this.next === null) {
      return 1;
    }
    return 1 + this.next.count();
  }

  log() {
    let current = this;
    const arr = [];
    while (current !== null && current.data !== null) {
      arr.push(current.data);
      current = current.next;
    }
    console.log(arr.join(', '));
  }
}