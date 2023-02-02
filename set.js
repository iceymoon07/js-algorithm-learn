class MySet {
  constructor() {
    this.items = {};
  }

  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }

  add(element) {
    if (this.has(element)) {
      return false;
    } else {
      this.items[element] = element;
      return true;
    }
  }

  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    } else {
      return false;
    }
  }

  clear() {
    this.items = {};
  }

  size() {
    return Object.keys(this.items).length;
  }

  values() {
    return Object.values(this.items);
  }

  union(otherSet) {
    const unionSet = new MySet();
    this.values().forEach((value) => {
      unionSet.add(value);
    });
    otherSet.values().forEach((value) => {
      unionSet.add(value);
    });
    return unionSet;
  }

  intersection(otherSet) {
    const intersecionSet = new MySet();
    let biggerSet = this;
    let smallerSet = otherSet;
    if (this.size() < otherSet.size()) {
      biggerSet = otherSet;
      smallerSet = this;
    }
    smallerSet.values().forEach((value) => {
      if (biggerSet.has(value)) {
        intersecionSet.add(value);
      }
    });
    return intersecionSet;
  }

  difference(otherSet) {
    const differenceSet = new MySet();
    this.values().forEach((value) => {
      if (!otherSet.has(value)) {
        differenceSet.add(value);
      }
    });
    return differenceSet;
  }

  isSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    }
    return this.values().every((value) => otherSet.has(value));
  }
}
