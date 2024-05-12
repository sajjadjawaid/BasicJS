
const n = [1,2,3,4];
const double_num = n.map((num) => {
       return num * 2;   
})
console.log(double_num);

const add_one = n.map((num, index) => {
    console.log("at", index, "is ", num);
    return num+1;
})

console.log(add_one);
