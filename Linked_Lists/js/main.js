function ListNode(value) {
  this.val = value;
  this.next = null;
};

function SList() {
  this.head = null;
};

SList.prototype.addFront = function(value) {
  var node = new ListNode(value);
  var currentNode = this.head;
  // 1st use-case: an empty list
  if (!currentNode) {
    this.head = node;
    return node;
  };
  // 2nd use-case: a non-empty list
  node.next = this.head;
  this.head = node;
  return node;
  // while (currentNode.next) {
  //   currentNode = currentNode.next;
  // };
  // currentNode.next = node;
  // return node;
};

SList.prototype.removeFront = function() {
  return node;
};

SList.prototype.valueFront = function() {
  return this.vale;
};

SList.prototype.printList = function() {
  var currentNode = this.head;
  while (currentNode.next) {
    console.log(currentNode.val);
    currentNode = currentNode.next;
  };
  console.log(currentNode.val);
  return this.head;
};

SingleList = new SList();
SingleList.addFront("Carlos");
SingleList.addFront("Mateo");
SingleList.printList();
