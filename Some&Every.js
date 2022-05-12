var arr = [2,4,6,8,10,12,14,16,18,21]
// Every using...........
var result = arr.every(function(value){
  return value % 2 === 0
})
console.log(result);

// Some using...........
var result2 = arr.some(function(value){
  return value % 2 === 1
})
console.log(result2);
