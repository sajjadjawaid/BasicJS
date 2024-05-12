const arr = [1,2,3,4,5,6];
let arr_length = arr.length - 1;
console.log("the length of array is: ", arr_length);
for(let i=0; i<=arr_length; i++){
    console.log(arr[i]);
}
//in one line.
console.log(arr.join(" "));

//push add a one or more elements at the end of the array and returns the new length of array.
arr.push(7);
console.log(arr.join(" "));
// console.log(arr.push(9)); this will return the new length after adding 9 that will be 8.

//pop removes the last element of the array and returns that element.
let last = arr.pop();
console.log(arr.join(" "));
console.log(last);

//unshift add one or more elements at the start of array and returns the new length of array.
let insert_head = arr.unshift(-1,0);
console.log(arr.join(" "));
console.log(insert_head);

//shift removes the first element of the array and returns that element;
let remove_head = arr.shift();
console.log(arr.join(" "));
console.log(remove_head);

//indexOf returns first index of the given element and -1 if not found.
console.log(arr.indexOf(3));
console.log(arr.indexOf(10));

//includes returns true if given value exists in an array and false if not.
console.log(arr.includes(4));
console.log(arr.includes(10));
// we can also give the starting index from where it should begin searching.
console.log(arr.includes(5,2)); //5 is the element and 2 is the starting index.

//De-structuring allows you to extract values from array and assigns them to variables.
const [first, second, third] = arr;
console.log(first);
console.log(second);
console.log(third);

//De-structuring using rest to capture rest of the element
const [, , ...rest] = arr;
console.log(rest)

const z = arr;
console.log(z); // will assign whole array

//slice will extract section of an array and returns a new array containing extracted elements
const newArr = arr.slice(3,6);
console.log(newArr);

//splice

const arr2 = [1,2,3,4,8];
arr2.splice(1,1,7);
console.log(arr2);