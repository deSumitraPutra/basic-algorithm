/*
* Insertion sort!
* Mark second element as key.
* From key index - 1 to 0, find value that bigger than key and then swap. If there's none or until meets lower value break.
*
* for arr = [1, 0, 2, 9, 3, 8, 4, 7, 5, 6]
* activity: 13 swap
* complexity: O(n^2) (worst), O(n) (best)
* */
const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j -= 1;
        }
        arr[j + 1] = key;
    }
    return arr;
};

const arr = [1, 0, 2, 9, 3, 8, 4, 7, 5, 6];
const result = {
    insertion: insertionSort([...arr]),
};
console.log(result);