//before(function(){
  describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
    it('sorts things correctly', function(){
      expect( bubbleSort([3, 1, 7, 6, 5])).toEqual([1, 3, 5, 6, 7]);
      expect(count).toEqual(4);
    });
    it('sorts a longer array', function(){
      expect (bubbleSort([29, 73, 19, 14, 31, 6, 100, 15, 66, 69, 33, 67, 87, 55, 32, 5, 13, 93, 60, 12])).toEqual([5, 6, 12, 13, 14, 15, 19, 29, 31, 32, 33, 55, 60, 66, 67, 69, 73, 87, 93, 100]);
    });
  });
//});