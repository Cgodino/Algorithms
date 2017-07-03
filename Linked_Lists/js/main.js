// basic node constructor
function ListNode (value) {
  this.val = value;
  this.next = null;
};
// basic linked list constructor
function SList () {
  this.head = null;
  this._lenght = 0;
};
// Adding addFront prototype to linked list
SList.prototype.addFront = function (value) {
  var node = new ListNode(value);
  var runner = this.head;
  this._lenght += 1;
  if (!runner) {
    this.head = node;
    return node;
  }
  node.next = runner;
  this.head = node;
  return node;
};
// Adding addBack prototype to linked list
SList.prototype.addBack = function (value) {
  var node = new ListNode(value);
  var runner = this.head;
  this._lenght += 1;
  if (!runner) {
    this.head = node;
    return node;
  }
  while (runner.next) {
    runner = runner.next;
  }
  runner.next = node;
  return node;
};
// Adding removeFront prototype to linked list
SList.prototype.removeFront = function () {
  var runner = this.head;
  if (!runner) {
    return null;
  }
  this._lenght -= 1;
  this.head = runner.next;
  return runner;
};
// Adding removeBack prototype to linked list
SList.prototype.removeBack = function () {
  var runner1 = this.head;
  var lastValue;
  if (!runner1) {
    // Empty linked list
    return null;
  }
  this._lenght -= 1;
  var runner2 = runner1.next;
  while (runner2) {
    if (!runner2.next) {
      lastValue = runner2.val;
      runner1.next = null;
      return lastValue;
    }
    runner1 = runner2;
    runner2 = runner2.next;
  }
};
// Adding lenght prototype
SList.prototype.mylenght = function () {
  return this._lenght;
};
// Adding valueFront prototype to linked list
SList.prototype.valueFront = function () {
  var runner = this.head;
  if (!runner) {
    return null;
  }
  return runner.val;
};
// Adding valueBack prototype to linked list
SList.prototype.valueBack = function () {
  var runner = this.head;
  if (!runner) {
    return null;
  }
  while (runner.next) {
    runner = runner.next;
  }
  return runner.val;
};
// Adding Contains prototype
SList.prototype.contains = function (value) {
  var isPresent = false;
  var runner = this.head;
  while (runner) {
    if (runner.val == value) {
      isPresent = true;
      break;
    }
    runner = runner.next;
  }
  return isPresent;
}
// Adding a new node before specific value node
SList.prototype.prependVal = function (value, before) {
  var node = new ListNode(value);
  var runner1 = this.head;
  this._lenght += 1;
  if (!runner1) {
    this.head = node;
    return node;
  }
  var runner2 = runner1.next;
  if (!runner2) {
    this.head = node;
    node.next = runner1;
    return node;
  }
  if (runner1.val == before) {
    node.next = runner1;
    this.head = node;
    return node;
  }
  while (runner2) {
    if (runner2.val == before) {
      node.next = runner1.next;
      runner1.next = node;
      return node;
    }
    runner1 = runner2;
    runner2 = runner2.next;
  }
};
// Adding a new node after specific value node
SList.prototype.appendVal = function (value, after) {
  var node = new ListNode(value);
  var runner = this.head;
  this._lenght += 1;
  if (!runner) {
    this.head = node;
    return node;
  }
  while (runner) {
    if (runner.val == after) {
      node.next = runner.next;
      runner.next = node;
      return node;
    }
    runner = runner.next;
  }
}
// Adding remove value fron linked list
SList.prototype.removeVal = function (value) {
  var runner1 = this.head;
  if (!runner1) { return null }
  var runner2 = runner1.next;
  if (!runner2) {
    if (runner1.val == value) {
      this.head = null;
      this._lenght -= 1;
    }
    return this.head;
  }
  // At this point both runners exist
  if (runner1.val == value) {
    this.head = runner2;
    this._lenght -= 1;
    return this.head;
  }
  while (runner2) {
    if (runner2.val == value) {
      runner1.next = runner2.next;
      this._lenght -= 1;
      return this.head;
    }
    runner1 = runner2;
    runner2 = runner2.next;
  }
}
// Adding min value to Front
SList.prototype.moveMinFront = function () {
  // val.length is the value to find moveMinFront
  var runner1 = this.head;
  if (!runner1) { return null }
  var minValue = runner1.val.length;
  var runner2 = runner1.next;
  while (runner2) {
    if ( runner2.val.length < minValue) {
      minValue = runner2.val.length;
      runner1 = runner2;
    }
    runner2 = runner2.next;
  }
  runner2 = this.head;
  while (runner2) {
    if (runner2.next.val == runner1.val) {
      break;
    }
    runner2 = runner2.next;
  }
  runner2.next = runner1.next;
  runner1.next = this.head;
  this.head = runner1;
}
// adding Max to Back
SList.prototype.moveMaxBack = function () {
  var runner1 = this.head;
  if (!runner1) { return null };
  var maxValue = runner1.val.length;
  var runner2 = runner1.next;
  while (runner2) {
    if ( runner2.val.length > maxValue ) {
      maxValue = runner2.val.length;
      runner1 = runner2;
    }
    runner2 = runner2.next;
  }
  runner2 = this.head;
  while (runner2) {
    if (runner1 == this.head) { break }
    if (runner2.next.val == runner1.val) {
      break;
    }
    runner2 = runner2.next;
  }
  if ( runner1 == this.head ) {
    this.head = runner1.next;
    runner1.next = null;
  } else {
    runner2.next = runner1.next;
    runner1.next = null;
  }
  runner2 = this.head;
  while (runner2.next) {
    runner2 = runner2.next;
  }
  runner2.next = runner1;
}
//swaping nodes
SList.prototype.swapNodes = function (node1, node2) {
  var runner1 = this.head;
  var runner2 = this.head;
  if (!runner1) { return null; }
  if (runner1.val != node1 ) {
    while (runner1){
      if (runner1.next.val == node1 ) { break }
      runner1 = runner1.next;
    }
  } else {

  }
  if (runner2.val != node2 ) {
    while (runner2){
      if (runner2.next.val == node2 ) { break }
      runner2 = runner2.next;
    }
  } else {

  }
  tmpNode1 = runner1.next.next;
  runner1.next.next = runner2.next.next;
  runner2.next.next = tmpNode1;
  tmpNode2 = runner2.next;
  runner2.next = runner1.next;
  runner1.next = tmpNode2;
  return null;
}
// Adding printList prototype to linked list
SList.prototype.printList = function () {
  var runner = this.head;
  var result = "";
  while (runner) {
    result += "("+runner.val+")";
    runner = runner.next;
    if (runner) { result += " -> " }
  };
  return result;
};

// Testing linked list
SingleList = new SList();
console.log(`Total lenght is: ${ SingleList.mylenght() }`);
SingleList.addFront("Madrid");
SingleList.addFront("Berlin");
SingleList.addFront("Los Angeles");
console.log(SingleList.printList());
SingleList.removeFront();
console.log(SingleList.printList());
SingleList.removeFront();
console.log(SingleList.printList());
console.log(`Total lenght is: ${ SingleList.mylenght() }`);
SingleList.addFront("Moscu");
console.log(SingleList.printList());
SingleList.addFront("Tokyo");
console.log(SingleList.printList());
console.log(`Value Front: ${ SingleList.valueFront() }`);
console.log(`Madrid is present: ${ SingleList.contains("Madrid") }`);
console.log(`Tokyo is present: ${ SingleList.contains("Tokyo") }`);
console.log(`Total lenght is: ${ SingleList.mylenght() }`);
SingleList.removeBack();
console.log(SingleList.printList());
SingleList.addFront("Buenos Aires");
SingleList.addFront("Ciudad El Cabo");
console.log(SingleList.printList());
SingleList.removeBack();
console.log(SingleList.printList());
console.log(`Value Back: ${ SingleList.valueBack() }`);
SingleList.addBack("Barcelona");
console.log(SingleList.printList());
console.log(`Value Back: ${ SingleList.valueBack() }`);
SingleList.addFront("NYC");
console.log(SingleList.printList());
console.log(`Value Front: ${ SingleList.valueFront() }`);
console.log(`Total lenght is: ${ SingleList.mylenght() }`);
SingleList.prependVal("Arcadia","Barcelona");
console.log(SingleList.printList());
SingleList.appendVal("Girona","Buenos Aires");
console.log(SingleList.printList());
SingleList.removeVal("NYC");
console.log(SingleList.printList());
console.log(`Total lenght is: ${ SingleList.mylenght() }`);
SingleList.moveMinFront();
console.log(SingleList.printList());
SingleList.addBack("Vic");
console.log(SingleList.printList());
SingleList.moveMinFront();
console.log(SingleList.printList());
SingleList.addFront("St. Marti d'Empuries");
console.log(SingleList.printList());
SingleList.moveMaxBack();
console.log(SingleList.printList());
SingleList.swapNodes("Barcelona","St. Marti d'Empuries");
console.log(SingleList.printList());
