let str = prompt("Array bering: ")
let arr = str
    .replace("[", "")
    .replace("]", "")
    .split(",")
    .map(num => Number(num.trim()));

// I don't know in what format the input array is going to be given. So I assume [ ] will be included in both ends.
// Previous version contained long procedure to get array in both formats.

// let arr = JSON.parse(prompt("Array bering:"));
function minMax(arr){
    let ans = [arr[0], arr[0]]
    for(let i=0; i<arr.length; i++){
        let val = arr[i]
        if(isNaN(val)){
            console.log("Error in input")
            return
        }
        if(val<ans[0]){
            ans[0]=val
        }
        if(val>ans[1]){
            ans[1]=val
        }
    }
    console.log(ans)
}
minMax(arr)

