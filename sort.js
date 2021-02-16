const arr = [3, 9, 6, 5, 7, 1, 2];

function ordenaArrayV2(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                const indexMenor = arr[j];
                arr[j] = arr[i];
                arr[i] = indexMenor;
            }
        }
    }
    return arr;
}
console.log(ordenaArrayV2(arr));