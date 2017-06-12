describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect( split([1, 2]) ).toEqual( [[1], [2]] );
  });
  it('splits an odd array', function(){
    expect( split([1, 2, 3])).toEqual([[1], [2, 3]] );
  });
});
describe('Merge Sort', function() {
  it('is able to merge two sorted array ito one sorted array', function() {
    expect( merge([1, 7], [0, 8]) ).toEqual([0, 1, 7, 8]);
  });
  it('merges larger arrays', function(){
    expect( merge([2, 4, 6, 8, 10, 12], [1, 3, 5, 7, 9, 11])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  })
});
describe('Mergesort', function(){
  it('mergesorts short array', function(){
    expect( mergeSort([ 1, 7, 6, 5, 4, 2, 3, 9])).toEqual([1, 2, 3, 4, 5, 6, 7, 9]);
  });
  // it('mergesorts one long array', function(){
  //   expect (mergeSort([29, 73, 19, 14, 31, 6, 15, 66, 69, 33, 67, 87, 55, 32, 5, 13, 93, 60, 12])).toEqual([5, 6, 12, 13, 14, 15, 19, 29, 31, 32, 33, 55, 60, 66, 67, 69, 73, 87, 93]);
  // });
});
