var items=[]
var dup=0
function generate(iterations, maxNum){
    for(let i=0;i<iterations;i++){
        items.push(Math.round(Math.random()*maxNum))
    }
}

function solve(arr){
    for(let i=0;i<arr.length;i++){
        var current=arr[i]
        for(let j=0;j<arr.length;j++){
            if(arr[j]==current){
                dup++
            }
        }
    }
}
generate(10000,10000)
solve(items)
console.log("FOUND "+dup+" DUPLICATES")
