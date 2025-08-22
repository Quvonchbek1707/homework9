let arr = JSON.parse(prompt("Array bering:"));
function countTrue(arr){
    let result = 0;
       arr.forEach(el => {
        if (el === true) result++;
    });
    console.log(result)
}
countTrue(arr)
