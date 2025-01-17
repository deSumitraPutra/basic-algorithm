package Sorting.BubbleSort;

public class BubbleSort {
    /*
     * Worst bubble sort!
     * Compare a position(i) to each element by a pointer(j), and swap whenever position(i) is less than pointer(j).
     *
     * for arr = [1, 0, 2, 9, 3, 8, 4, 7, 5, 6]
     * activity: 17 swap, 100 checking
     * complexity: O(n^2) (worst and best case)
     * */
    private static int[] worstBubbleSort(int[] arr) {
        int[] copyArr = Arrays.copyOf(arr, arr.length);
        for (int i = 0; i < copyArr.length; i++) {
            for (int j = 0; j < copyArr.length; j++) {
                if (copyArr[i] < copyArr[j]) {
                    int temp = copyArr[i];
                    copyArr[i] = copyArr[j];
                    copyArr[j] = temp;
                }
            }
        }
        return copyArr;
    }

    /*
     * Meh bubble sort!
     * This bubble sort compare each adjacent and check if already in order. If not, swap them.
     *
     * for arr = [1, 0, 2, 9, 3, 8, 4, 7, 5, 6]
     * activity: 13 swap, 90 checking
     * complexity: O(n^2) (worst and best case)
     * */
    private static int[] mehBubbleSort(int[] arr) {
        int[] copyArr = Arrays.copyOf(arr, arr.length);
        for (int i = 0; i < copyArr.length; i++) {
            for (int j = 0; j < copyArr.length - 1; j++) {
                if (copyArr[j] > copyArr[j + 1]) {
                    int temp = copyArr[j];
                    copyArr[j] = copyArr[j + 1];
                    copyArr[j + 1] = temp;
                }
            }
        }
        return copyArr;
    }

    /*
     * Slightly Meh bubble sort!
     * This has same algorithm as above but has extra step to whether check if all element is already sorted
     *
     * for arr = [1, 0, 2, 9, 3, 8, 4, 7, 5, 6]
     * activity: 13 swap, 36 checking
     * complexity: O(n^2) (worst and best case)
     * */
    private static int[] slightlyMehBubbleSort(int[] arr) {
        int[] copyArr = Arrays.copyOf(arr, arr.length);
        for (int i = 0; i < copyArr.length; i++) {
            boolean isSwapped = false;
            for (int j = 0; j < copyArr.length - 1; j++) {
                if (copyArr[j] > copyArr[j + 1]) {
                    int temp = copyArr[j];
                    copyArr[j] = copyArr[j + 1];
                    copyArr[j + 1] = temp;
                    isSwapped = true;
                }
            }
            if (!isSwapped) {
                break;
            }
        }
        return copyArr;
    }

    public static void main(String[] args) {
        int[] arr = {1, 0, 2, 9, 3, 8, 4, 7, 5, 6};
        Arrays.stream(worstBubbleSort(arr))
                .forEach(value -> System.out.print(value + ", "));
        System.out.println();
        Arrays.stream(mehBubbleSort(arr))
                .forEach(value -> System.out.print(value + ", "));
        System.out.println();
        Arrays.stream(slightlyMehBubbleSort(arr))
                .forEach(value -> System.out.print(value + ", "));
    }
}