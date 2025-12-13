arr = [12, 492, 313, 32, 2, 193, 11];
left = 0, right = arr.length - 1;
while (left < right) {
    temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
}
console.log(arr);
