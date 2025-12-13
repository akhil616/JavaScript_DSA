arr = [5, 6, 7, 8, 10]
low = 5, upp = 10;
n = upp - low + 1;
sum = n * (low + upp) / 2;
console.log(sum);
res = 0;
for (let i of arr) {
   res += i;
}
console.log(sum - res);
