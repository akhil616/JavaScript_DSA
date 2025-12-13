arr = [19, 20, 99, 88, 5, 6, 7, 8, 10]
first = -1
second = -1
third = -1
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
        third = second;
        second = first;
        first = arr[i];
    } else if (arr[i] > second) {
        third = second;
        second = arr[i];
    } else if(arr[i] > third) {
        third = arr[i];
    }
}
console.log(third);
