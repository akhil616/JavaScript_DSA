function reverseArrayInGroup(arr, k) {
    n = arr.length;
    for (let i = 0; i < n; i += k) {
        left = i;
        right = Math.min(i + k - 1, n - 1);
        while (left < right) {
            tmp = arr[left];
            arr[left] = arr[right];
            arr[right] = tmp;
            left++;
            right--;
        }
    }
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
k = 3;
reverseArrayInGroup(arr, k);
console.log(arr);
