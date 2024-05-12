
// const infinite_time = new Promise((res) => {

//         setTimeout(() => {

//             res(new Date());
//         },1000);
        


    
// });
const infinite_time = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(new Date());
        }, 1000);
    });
};

// const delay = new Promise((res) => {
//     res("delay")
// })




    const main = async() =>{
       let n = 0;
       while(n < 5){
        const current_time = await infinite_time();
        console.log(current_time);
        n++;
       }


        //  while(n){
            
    //     await infinite_time.then((res) =>{
    //           console.log(res);
    //     }) 
        
    // }
      }

   


       main();
