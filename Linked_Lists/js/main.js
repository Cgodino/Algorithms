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
  var currentNode = this.head;
  this._lenght += 1;
  if (!currentNode) {
    this.head = node;
    return node;
  }
  node.next = this.head;
  this.head = node;
  return node;
};
// Adding addBack prototype to linked list
SList.prototype.addBack = function (value) {
  var node = new ListNode(value);
  var currentNode = this.head;
  this._lenght += 1;
  if (!currentNode) {
    this.head = node;
    return node;
  }
  while (currentNode.next) {
    currentNode = currentNode.next;
  }
  currentNode.next = node;
  return node;
};
// Adding removeFront prototype to linked list
SList.prototype.removeFront = function () {
  var node = this.head;
  if (node === null) {
    return node;
  }
  this._lenght -= 1;
  this.head = node.next;
  return node;
};
// Adding removeBack prototype to linked list
SList.prototype.removeBack = function () {
  var currentNode = this.head;
  var lastValue;
  if (currentNode === null) {
    return lastValue;
  }
  this._lenght -= 1;
  while (currentNode.next) {
    var nextNode = currentNode.next;
    if (nextNode.next == null) {
      lastValue = currentNode.next.val;
      currentNode.next = null;
      return lastValue;
    }
    currentNode = currentNode.next;
  }
};
// Adding lenght prototype
SList.prototype.mylenght = function () {
  return this._lenght;
};
// Adding valueFront prototype to linked list
SList.prototype.valueFront = function () {
  var currentNode = this.head;
  if (currentNode == null) {
    return null;
  }
  return currentNode.val;
};
// Adding valueBack prototype to linked list
SList.prototype.valueBack = function () {
  var currentNode = this.head;
  if (currentNode == null) {
    return null;
  }
  while (currentNode.next) {
    currentNode = currentNode.next;
  }
  return currentNode.val;
};
// Adding Contains prototype
SList.prototype.contains = function (value) {
  var isPresent = false;
  var currentNode = this.head;
  while (currentNode) {
    if (currentNode.val == value) {
      isPresent = true;
      break;
    }
    currentNode = currentNode.next;
  }
  return isPresent;
}
// Adding printList prototype to linked list
SList.prototype.printList = function () {
  var currentNode = this.head;
  var result = "";
  while (currentNode) {
    result += currentNode.val;
    currentNode = currentNode.next;
    if (currentNode) { result += " -> " }
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
console.log(`Berlin is present: ${ SingleList.contains("Berlin") }`);
console.log(`Moscu is present: ${ SingleList.contains("Moscu") }`);
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
