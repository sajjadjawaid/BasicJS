//for each

const prime_num = [2,3,5,7,11];
prime_num.forEach((value,i) => {
    if(value == 7){
        console.log(i);
    }
})

//for in
const employee = {
    name: "sajjad",
    id: 6,
}

for( let key in employee){
    if(key == "name"){
        console.log(employee[key]);
    }
}

const list = [1,2,"one"];
for( let key in list){
    console.log("at ", key, "is", list[key]);
}

// for of (only for iteratables)

const list2 = [1,2,3,4];
for(let value of list2){
    console.log(value);
}
