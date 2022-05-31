var items=[]
var times=0
const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));
function generate(iterations, maxNum){
    for(let i=0;i<iterations;i++){
        items.push(Math.round(Math.random()*maxNum))
    }
    console.log(items)
}
function sort(arr) {
  for (let i=1;i<arr.length;i++) {
    for (let j=i-1;j>-1;j--) {
      if (arr[j + 1]<arr[j]) {
        [arr[j+1],arr[j]]=[arr[j],arr[j+1]];
        //console.log(arr)
        times++
      }

    }
  }
  console.clear()
  console.log("===================\nSORTED IN "+times+" ITERATIONS\n===================")
  console.log(arr.join(", "))
}
generate(10000,10000)
sort(items)
