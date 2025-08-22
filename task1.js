let num = Number(prompt("raqam bering: "))
function numberSplit(num){
    let c = num/2;
    let arr = []
    arr.push(Math.floor(c))
    arr.push(Math.ceil(c))
    console.log(arr);
}
numberSplit(num)