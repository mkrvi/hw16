let length;
do {
    length = prompt('Enter the length of your array')
} while (length === '' || length === null || isNaN(+length))

const array = [];
for (let i = 1; i <= length; i +=1) {
    array.push(prompt(`Enter ${i} item`))
}
console.log (`Your array:${array.join(', ')}`)

array.sort(function (a, b) {
    return a - b;
});
console.log(`Sorted array:${array.join(', ')}`)

array.splice(1, 3)
console.log(`Array after splice:${array.join(', ')}`)






