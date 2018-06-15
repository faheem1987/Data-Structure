function HashTable(size) {
  this.bucket = new Array(size);
  this.bucketSize = this.bucket.length;
}

function HashNode(key, value) {
  this.key = key;
  this.value = value;
  this.next = next || null
}

HashTable.prototype.hash = function(key) {
  var total = 0;

  for(var i = 0; i<key.length; i++) {
    total += key.charCode(i);
  }

  return total % this.bucketSize;
}

HashTable.prototype.insert = function(key, value) {
  var index = this.hash(key);

  if(!this.bucket[index]){
    this.bucket[index] = new HashNode(key, value)
  } else if(this.bucket[index].key === key) {
    this.bucket[index].value = value;
  } else {
    var currentNode = this.bucket[index];
    while(currentNode.next) {
      if(currentNode.next.key === key){
        currentNode.next.value = value;
        return;
      }

      currentNode = currentNode.next;
    }

    currentNode.next = new HashNode(key, value)
  }
}

HashTable.prototype.get = function(key) {
  var index = this.hash(key);
  
  if(!this.bucket[index]) return null;

  var currentNode = this.bucket[index];

  while(currentNode) {
    if(currentNode.key === key) return currentNode;

    currentNode = currentNode.next;
  }

  return null;
}

HashTable.prototype.retrieveAll = function() {
  var allNodes = [];

  for(var i = 0; i < this.bucketSize; i++) {
    var currentNode = this.buckets[i];

    while(currentNode) {
      allNode.push(currentNode);
      currentNode = currentNode.next;
    }
  }

  return allNodes;
}

