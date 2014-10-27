var BinaryHeap = function() {
  this.content = [];
}

BinaryHeap.prototype = {
  add: function(value) {
    this.content.push(value);
    this.bubbleUp(this.content.length - 1);
  },
  swap: function(i, j) {
    var temp = this.content[i];
    this.content[i] = this.content[j];
    this.content[j] = temp;
  },
  bubbleUp: function(currentIndex) {
    var parentIndex = (currentIndex == 1) ? 0 : (currentIndex >> 1);
    while (parentIndex != currentIndex && this.content[currentIndex] < this.content[parentIndex]) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = currentIndex >> 1;
    }
  },
  sinkDown: function(currentIndex) {
    var flag = 0;

    while (true) {
      var rightChildIndex = (currentIndex + 1) << 1;
      var leftChildIndex = rightChildIndex - 1;
      
      if (leftChildIndex >= this.content.length)
        break;
        
      // left child is always valid since we have checked it above
      if (this.content[currentIndex] > this.content[leftChildIndex]) {
        this.swap(currentIndex, leftChildIndex);
        currentIndex = leftChildIndex;
        flag = 1;
      }
      
      if (rightChildIndex < this.content.length) {
        if (this.content[currentIndex] > this.content[rightChildIndex]) {
          this.swap(currentIndex, rightChildIndex);
          currentIndex = rightChildIndex;
          flag = 1;
        }
      }
      
      if (flag === 0)
        break;
    }
  },
  poll: function() {
    // swap the first and the last element of the array
    this.swap(0, this.content.length - 1);
    
    // return value is the last element of the heap after swap
    var returnValue = this.content.pop();
    
    this.sinkDown(0);
    
    return returnValue;
  },
  peek: function() {
    return this.content[0];
  },
  size: function() {
    return this.content.length;
  }
}