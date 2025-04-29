let msd=()=>{
    return "hello"
}
let vk=()=>{


    return new  Promise ((resolve,reject)=>{
        setTimeout(()=>{
        resolve ("Hey") 
 },2000);

    })
    
}


let rohit =()=>{
    return "bye"
}
let result=async()=>{
    console.log(msd());
    console.log( vk());
    console.log(rohit());
    
}
result()