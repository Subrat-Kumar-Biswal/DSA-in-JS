let arr = [10, 20, 30, 40, 50, 60, 70, 80];
let find = 50;
let start = 0;
let end = arr.length -1 ;

while(start <= end){
    let mid = Math.floor((start + end)/2);
    if(find === arr[mid]){
        console.log("element found at",mid);
        break;
    }else if(find < arr[mid]){
        end = mid - 1;
    }else{
        start = mid + 1;
    }
  
}
