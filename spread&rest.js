// //shallow copy using spread operator
// const person2 = {...person};
// console.log(person2);
// person.city = "isl";
// person.arr[0] = 10;
// person.arr[2][0] = 6;
// console.log(person);
// console.log(person2);

// const original = [1,2,[3,4]];
// const shallowCopy = [...original];
// original[0] = 10;//shallow copy using spread operator
// const person2 = {...person};
// console.log(person2);
// person.city = "isl";
// person.arr[0] = 10;
// person.arr[2][0] = 6;
// console.log(person);
// console.log(person2);

// const original = [1,2,[3,4]];
// const shallowCopy = [...original];
// original[0] = 10;
// original[2][0] = 6;
// console.log(original);
// console.log(shallowCopy);

//concept of shallow copy in array and objects (major difference)

// const praticearr = [1,3,[4,6]];
// const clonearr = [...praticearr];
// praticearr[0] = 0;
// praticearr[2][0] = 7;
// console.log(praticearr);
// console.log(clonearr);

// const practice = {
//     arr: [1,2,[3,4]]
// }
// const clone = {...practice};
// practice.arr[0] = 100;
// console.log(practice);
// console.log(clone);

// original[2][0] = 6;
// console.log(original);
// console.log(shallowCopy);



//rest and spread
const sum = (...a) => {
    console.log(a[1]);
}

let number1 = [1,2,3];
sum(...number1);