var count = 0;
function  bubbleSort(arr){
  var resultArr = [];
  while(arr.length){
    for(var i = 0; i < arr.length-1; i++){
     let lower = compare(arr[i], arr[i+1]);
     if(arr[i] !== lower){
       swap(arr,i, i+1);
       count++;
     }
    }
    resultArr[arr.length - 1] = arr.pop();
  }
  return resultArr;
}
function compare(a, b){ //return smaller value
  if (a > b) return b;
  return a;
}
function swap(arr,index1, index2){
  var temp = arr[index1];
      arr[index1] = arr[index2];
      arr[index2] = temp;
      return arr;
}