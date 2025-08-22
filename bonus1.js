function tubSonlar() {
    let str = prompt("Array bering: ");
    let ans = [];
    let arr = str.replace("[", "").replace("]", "").split(",").map(num => Number(num.trim()));

    function tub(num) {
        if (num < 2) return false;
        let i = 2;
        while (i * i <= num) {
            if (num % i === 0) return false;
            i++;
        }
        return true;
    }
    
    arr.forEach(element => {
        if (!isNaN(element) && tub(element)) {
            ans.push(element);
        }
    });

    return ans;
}

console.log(tubSonlar());
