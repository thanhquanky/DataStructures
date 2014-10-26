function MinStack() {
   this.stack = [];
   this.minStack = [];
}

MinStack.prototype = {
   push: function(value) {
      this.stack.push(value);
      var min = value;
      var length = this.minStack.length;
      if (length === 0 || this.getMinimum() > value) {
         this.minStack.push(value);
      }
      else {
         this.minStack.push(this.getMinimum());
      }
   },
   pop: function(value) {
      this.minStack.pop();
      return this.stack.pop();
   },
   peek: function() {
     return this.stack[this.stack.length - 1];
   },
   size: function() {
      return this.stack.length;
   },
   getMinimum: function() {
      return this.minStack[this.minStack.length - 1];
   }
}
   
