import LinkedList from "./linkedList";
import Node from "./node";

const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
};

const defaultCompare = (a, b) => {
  if (a === b) {
    return 0;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
};

class SortedLinkedList extends LinkedList {
  constructor(compareFn = defaultCompare) {
    super();
    this.compareFn = compareFn;
  }

  insert(element, index = 0) {
    if (this.isEmpty()) {
      return super.insert(element, 0);
    }
    const pos = this.getIndexNextSortedElement(element);
    return super.insert(element, pos);
  }

  getIndexNextSortedElement(element) {
    let current = this.head;
    let i = 0;
    for (; i < this.count; i++) {
      const result = this.compareFn(element, current.element);
      if (result === Compare.LESS_THAN) {
        return i;
      }
      current = current.next;
    }
    return i;
  }
}

export default SortedLinkedList;
