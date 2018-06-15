function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(value) {
  debugger;
  if(value <= this.value) {
    this.left ? this.left.insert(value) : this.left = new BST(value);
  } else {
    this.right ? this.right.insert(value) : this.right = new BST(value);
  }
}

BST.prototype.contains = function(value) {
  if(value === this.value) return true;

  if(value <= this.value) {
    return this.left ? this.left.contains(value) : null;
  } else {
    return this.right ? this.right.contains(value) : null;
  }
}

BST.prototype.depthFirstTransversal = function(func, order) {
  if(order === "pre-order") func(this.value);
  if(this.left) this.left.depthFirstTransversal(func, order);
  if(order === "in-order") func(this.value);
  if(this.right) this.right.depthFirstTransversal(func, order);
  if(order === "post-order") func(this.value);
}

BST.prototype.breadthFirstTransversal = function(func) {
  var queue = [this];

  while(queue.length) {
    var node = queue.shift();
    func(node);
    if(node.left) queue.push(node.left);
    if(node.right) queue.push(node.right);
  }
}

BST.prototype.getMaxValue = function() {
  if(this.right) return this.right.getMaxValue();
  else return this.value;
}

BST.prototype.getMinValue = function() {
  if(this.left) return this.left.getMinValue();
  else return this.value;
}

const iteratorFunc = function(value) {
  console.log(value);
}
   
   
  var bst = new BST(50);
   
  bst.insert(30);
  bst.insert(70);
  bst.insert(100);
  bst.insert(60);
  bst.insert(59);
  bst.insert(20);
  bst.insert(45);
  bst.insert(35);
  bst.insert(85);
  bst.insert(105);
  bst.insert(10);
  