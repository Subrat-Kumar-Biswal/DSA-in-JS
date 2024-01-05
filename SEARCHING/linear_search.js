let arr = [10, 20, 30, 40, 50, 60, 70, 80];
let item = prompt("enter a number form the array")
let position = undefined;
for (let i = 0; i < arr.length; i++) {
  if (item == arr[i]) {
    position = i;
    break;
  }
}
console.log(position);
if (!position) {
  alert("element not found");
}else{
    alert("element position is " + position)
}
