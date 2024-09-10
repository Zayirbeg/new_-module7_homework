let arr = [2, 2, 3, 17, 1, 3, 2, 3, 44, 5];

function uniqueSortedNumbers(arr) {

    let uniqueSet = new Set(arr);

    let uniqueArr = Array.from(uniqueSet);

    uniqueArr.sort((a, b) => a - b);

    return uniqueArr;

}

let result = uniqueSortedNumbers(arr);

console.log(result)
