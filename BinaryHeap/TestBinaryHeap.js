
describe('BinaryHeap', function(){
  describe('add', function(){
    it('should add to empty heap', function(){
      var pQ = new BinaryHeap();
      pQ.add(0);
      expect(pQ.peek()).to.equal(0);
    })

    it('should add larger number to the heap, should keep min as root', function(){
      var pQ = new BinaryHeap();
      pQ.add(0);
      pQ.add(1);
      expect(pQ.peek()).to.equal(0);
    })
    
    it('should add smaller number to the heap, should update root', function() {
      var pQ = new BinaryHeap();
      pQ.add(5);
      pQ.add(6);
      pQ.add(1);
      expect(pQ.peek()).to.equal(1);
    })
  })
  
  describe('poll', function() {
    it('should add and poll from one element heap', function() {
      var pQ = new BinaryHeap();
      pQ.add(5);
      expect(pQ.poll()).to.equal(5);
    })
    
    it('should always return current min', function() {
      var pQ = new BinaryHeap();
      pQ.add(5);
      pQ.add(1);
      expect(pQ.poll()).to.equal(1);
      expect(pQ.poll()).to.equal(5);
    })
    
    it('should always return current min 2', function() {
      var pQ = new BinaryHeap();
      pQ.add(5);
      pQ.add(3);
      pQ.add(4);
      expect(pQ.poll()).to.equal(3);
      expect(pQ.poll()).to.equal(4);
      expect(pQ.poll()).to.equal(5);
    })
    
    it('should add non-max number to the heap, should update branch', function() {
      var pQ = new BinaryHeap();
      pQ.add(5);
      pQ.add(6);
      pQ.add(1);
      pQ.add(2);
      expect(pQ.poll()).to.equal(1);
      expect(pQ.poll()).to.equal(2);
      expect(pQ.poll()).to.equal(5);
      expect(pQ.poll()).to.equal(6);
    })
  })
  
  describe('size', function() {
    it('should return 0 when the heap is empty', function() {
      var pQ = new BinaryHeap();
      expect(pQ.size()).to.equal(0);
    })
    
    it('should return 1 when the heap has one element', function() {
      var pQ = new BinaryHeap();
      pQ.add(1);
      expect(pQ.size()).to.equal(1);
    })
    
    it('should increase when elements are added to the heap', function() {
      var pQ = new BinaryHeap();
      pQ.add(1);
      expect(pQ.size()).to.equal(1);
      pQ.add(2);
      expect(pQ.size()).to.equal(2);
      pQ.add(3);
      expect(pQ.size()).to.equal(3);
      pQ.add(4);
      expect(pQ.size()).to.equal(4);
    })
    
    it('should decrease when elements are removed from the heap', function() {
      var pQ = new BinaryHeap();
      pQ.add(1);
      pQ.add(2);
      pQ.add(3);
      pQ.add(4);
      expect(pQ.size()).to.equal(4);
      pQ.poll();
      expect(pQ.size()).to.equal(3);
      pQ.poll();
      expect(pQ.size()).to.equal(2);
      pQ.poll();
      expect(pQ.size()).to.equal(1);
      pQ.poll();
      expect(pQ.size()).to.equal(0);
    })
  })
})