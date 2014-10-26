
describe('MinStack', function(){
  describe('.push()', function(){
    it('should append a value', function(){
      var mStack = new MinStack();
      mStack.push(0);
      expect(mStack.peek()).to.equal(0);
      mStack.push(1);
      expect(mStack.peek()).to.equal(1);
    })

    it('should return the length', function(){
      var mStack = new MinStack();
      mStack.push(0);
      expect(mStack.size()).to.equal(1);
      mStack.push(1);
      expect(mStack.peek()).to.equal(1);
    })
  })

  describe('.getMinimum()', function(){
    it('should return the only value', function(){
      var mStack = new MinStack();
      mStack.push(0);
      expect(mStack.getMinimum()).to.equal(0);
    })

    it('should update the minimum value', function(){
      var mStack = new MinStack();
      mStack.push(5);
      expect(mStack.getMinimum()).to.equal(5);
      mStack.push(0);
      expect(mStack.getMinimum()).to.equal(0);
    })

    it('should retain the minimum value', function(){
      var mStack = new MinStack();
      mStack.push(5);
      expect(mStack.getMinimum()).to.equal(5);
      mStack.push(6);
      expect(mStack.getMinimum()).to.equal(5);
      mStack.push(7);
      expect(mStack.getMinimum()).to.equal(5);
    })
    
    it('should update the minimum value after pop', function(){
      var mStack = new MinStack();
      mStack.push(5);
      expect(mStack.getMinimum()).to.equal(5);
      mStack.push(6);
      expect(mStack.getMinimum()).to.equal(5);
      mStack.push(1);
      expect(mStack.getMinimum()).to.equal(1);
      mStack.pop();
      expect(mStack.getMinimum()).to.equal(5);
    })
  })

  describe('.pop()', function(){
    it('should remove and return the last value', function(){
      var mStack = new MinStack();
      mStack.push(5);
      expect(mStack.getMinimum()).to.equal(5);
      mStack.push(6);
      expect(mStack.getMinimum()).to.equal(5);
      mStack.push(1);
      expect(mStack.getMinimum()).to.equal(1);
      expect(mStack.pop()).to.equal(1);
      expect(mStack.pop()).to.equal(6);
      expect(mStack.pop()).to.equal(5);
    })
    
    it('should reduce the length', function() {
      var mStack = new MinStack();
      mStack.push(5);
      mStack.push(6);
      mStack.push(7);
      expect(mStack.size()).to.equal(3);
      mStack.pop();
      expect(mStack.size()).to.equal(2);
      mStack.pop();
      expect(mStack.size()).to.equal(1);
      mStack.pop();
      expect(mStack.size()).to.equal(0);
    })
  })
  
  describe('.size()', function(){
    it('should return 0 for empty stack', function() {
      var mStack = new MinStack();
      expect(mStack.size()).to.equal(0);
    })
    
    it('should return current number of element in the stack', function() {
      var mStack = new MinStack();
      mStack.push(5);
      expect(mStack.size()).to.equal(1);
      mStack.push(6);
      expect(mStack.size()).to.equal(2);
      mStack.pop();
      expect(mStack.size()).to.equal(1);
      mStack.pop();
      expect(mStack.size()).to.equal(0);
    })
  })
})