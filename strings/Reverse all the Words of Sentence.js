function reverseWords(input) {
    const arr = input.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split("").reverse().join("");
    }
    return arr.join(" ");
}

let input = "Hello World";
let output = reverseWords(input);
console.log(output);
