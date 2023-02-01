import LinkedList from "./linkedList";
import Node from "./node";

class CircularLinkedList extends LinkedList {
  constructor() {
    super();
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      if (index === 0) {
        if (this.head == null) {
          this.head = node;
          node.next = this.head;
        } else {
          const tail = this.getElementAt(this.count - 1);
          node.next = this.head;
          this.head = node;
          tail.next = this.head;
        }
      } else {
        const previous = this.getElementAt(index - 1);
        node.next = previous.next;
        previous.next = node;
      }
      this.count++;
      return true;
    } else {
      return false;
    }
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let removed = this.head;
      if (index === 0) {
        if (this.count === 1) {
          this.head = undefined;
        } else {
          const tail = this.getElementAt(this.count - 1);
          this.head = removed.next;
          tail.next = this.head;
        }
      } else {
        const previous = this.getElementAt(index - 1);
        removed = previous.next;
        previous.next = removed.next;
      }
      this.count--;
      return removed.element;
    }
    return undefined;
  }
}

export default CircularLinkedList;
