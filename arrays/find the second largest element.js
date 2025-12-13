arr = [19, 20, 99, 88, 5, 6, 7, 8, 10]
first = -1
second = -1
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
        second = first;
        first = arr[i];
    } else if (arr[i] > second) {
        second = arr[i];
    }
}
console.log(second);
