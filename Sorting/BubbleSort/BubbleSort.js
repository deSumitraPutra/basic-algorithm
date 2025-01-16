/*
* Worst bubble sort!
* Compare a position(i) to each element by a pointer(j), and swap whenever position(i) is less than pointer(j).
*
* for arr = [1, 0, 2, 9, 3, 8, 4, 7, 5, 6]
* activity: 17 swap, 100 checking
* complexity: O(n^2) (worst and best case)
* */
const worstBubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
};

/*
* Meh bubble sort!
* This bubble sort compare each adjacent and check if already in order. If not, swap them.
*
* for arr = [1, 0, 2, 9, 3, 8, 4, 7, 5, 6]
* activity: 13 swap, 90 checking
* complexity: O(n^2) (worst and best case)
* */
const mehBubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
};

/*
* Slightly Meh bubble sort!
* This has same algorithm as above but has extra step to whether check if all element is already sorted
*
* for arr = [1, 0, 2, 9, 3, 8, 4, 7, 5, 6]
* activity: 13 swap, 36 checking
* complexity: O(n^2) (worst and best case)
* */
const slightlyMehBubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let isSwapped = false;
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSwapped = true;
            }
        }
        if (!isSwapped) {
            break;
        }
    }
    return arr;
};

const arr = [1, 0, 2, 9, 3, 8, 4, 7, 5, 6];
const result = {
    worstBubbleSort: worstBubbleSort([...arr]),
    mehBubbleSort: mehBubbleSort([...arr]),
    slightlyMehBubbleSort: slightlyMehBubbleSort([...arr])
};
console.log(result);