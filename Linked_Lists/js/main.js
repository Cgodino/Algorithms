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
// Adding removeFront prototype to linked list
SList.prototype.removeFront = function () {
  var node = this.head;
  this._lenght -= 1;
  if (node === null) {
    return node;
  }
  this.head = node.next;
  return node;
};
// Adding lenght prototype
SList.prototype.mylenght = function () {
  return this._lenght;
};
// Adding valueFront prototype to linked list
SList.prototype.valueFront = function () {
  return this.head.val;
};
// Adding Contains prototype
SList.prototype.contains = function (value) {
  var isPresent = false;
  var node = this.head;
  while (node) {
    if (node.val == value) {
      isPresent = true;
      break;
    }
    node = node.next;
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
SingleList.addFront("Madrid");
SingleList.addFront("Berlin");
SingleList.addFront("Los Angeles");
console.log(SingleList.printList());
console.log(SingleList.mylenght());
SingleList.removeFront();
console.log(SingleList.printList());
SingleList.removeFront();
console.log(SingleList.printList());
SingleList.removeFront();
console.log(SingleList.printList());
console.log(SingleList.mylenght());
SingleList.addFront("Moscu");
console.log(SingleList.printList());
SingleList.addFront("Tokyo");
console.log(SingleList.printList());
console.log(SingleList.valueFront());
console.log(SingleList.contains("Berlin"));
console.log(SingleList.contains("Moscu"));
console.log(SingleList.mylenght());
