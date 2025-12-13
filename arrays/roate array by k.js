function rotate(arr, d) {
    n = arr.length;
    d %= n;
    //counter clockwise (left)
    reverse(arr, 0, d - 1);
    reverse(arr, d, n - 1);
    reverse(arr, 0, n - 1);
    //clock wise (right)
    reverse(arr, n - d, n - 1);
    reverse(arr, 0, n - d - 1);
    reverse(arr, 0, n - 1);
}
function reverse(arr, left, right) {
    while (left < right) {
        temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
}
const arr = [1, 2, 3, 4, 5, 6];
d = 2;
rotate(arr, d);
console.log(arr);
