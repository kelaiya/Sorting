function split(arr){
  var resultArr = [];
  resultArr.push(arr.slice(0, arr.length/2));
  resultArr.push(arr.slice(arr.length/2, arr.length));
  return resultArr;
}
function merge(arr1, arr2){
  var arr = [];
  var left = 0;
  var right = 0;
  while (left < arr1.length && right < arr2.length){
      if (arr1[left] < arr2[right]){
        arr.push(arr1[left]);
        left++;
      } else {
        arr.push(arr2[right]);
        right++;
      }
    }
    for(; left<arr1.length; left++) arr.push(arr1[left]);
    for(; right<arr2.length; right++) arr.push(arr2[right]);
    return arr;
}
function mergeSort(arr){
  if (arr.length < 2){
    return arr;
  }
  var temp = split(arr);
  var left = temp[0];
  var right = temp[1];
  return merge(mergeSort(left), mergeSort(right));
}