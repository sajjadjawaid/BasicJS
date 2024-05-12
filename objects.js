const person = {
    full_name: "Sajjad Jawaid",
    laptop: "HP",
    id_num: 2,
    message: function(){
        console.log(`my name is ${this.full_name} and my ID is ${this.id_num}`)
    },

    arr: [1,2,[3,4]]
}
//adding property to object
person.city = "lahore";
person.onDuty = true
console.log(person);

//deleting property of object
delete person.onDuty;
console.log(person);

//changing value of property
person.laptop = "HP Pavillion";
console.log(person)

//objects using factory functions
function create_person(f_name){
    return{
        name: f_name
    }
}

const per = create_person("sajjad");
console.log(per);