let arr = [10, 20, 30, 40, 50, 60, 70, 80]

var temp;

function revArray(data, start, end){
    if(start <= end){
   // console.log(data);
   temp = arr[start];
   arr[start] = arr[end];
   arr[end] = temp;
   revArray(data, start+1, end -1)
  console.log(data)
   }
}
revArray(arr, 0, arr.length-1)


