const arr = [3, 9, 6, 5, 7, 1, 2];

function sortArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                const indexMinor = arr[j];
                arr[j] = arr[i];
                arr[i] = indexMinor;
            }
        }
    }
    return arr;
}
console.log(sortArray(arr));
