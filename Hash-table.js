function HashTable(size) {
  this.buckets = new Array(size);
  this.length = this.buckets.length;
}

function HashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

HashTable.prototype.hash = function(key) {
  var total = 0;

  for(var i = 0; i < key.length; i++) {
    total += key.charCodeAt(i);
  }

  return total % this.length;
}

HashTable.prototype.insert = function(key, value) {
  var index = this.hash(key);
  
  if(!this.buckets[index]) {
    this.buckets[index] = new HashNode(key, value);
  } else if (this.buckets[index].key === key) {
    this.buckets[index].value = value;
  } else {
    var currentNode = this.buckets[index];
    while(currentNode.next) {
      if(currentNode.next.key === key) {
        currentNode.next.value = value;
        return;
      }
      currentNode = currentNode.next;
    }

    currentNode.next = new HashNode(key, value);
  }
}

HashTable.prototype.get = function(key) {
  var index = this.hash(key);

  if(!this.buckets[index]) return null;

  var currentNode = this.buckets[index];

  while(currentNode) {
    if(currentNode.key === key) return currentNode;
    currentNode = currentNode.next;
  }

  return null
}

HashTable.prototype.retreiveAll = function() {
  var allNode = [];

  for(var i = 0; i<this.length; i++) {
    var currentNode = this.buckets[i];

    while(currentNode){
      allNode.push(currentNode);
      currentNode = currentNode.next;
    }
  }

  return allNode;
}


var myHT = new HashTable(30);
 
myHT.insert('Dean', 'dean@gmail.com');
myHT.insert('Megan', 'megan@gmail.com');
myHT.insert('Dane', 'dane@yahoo.com');