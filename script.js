
const promiseone = new Promise(function(resolve,reject){
   
    setTimeout(function()
    {
    console.log("asyc task is completed..")
    resolve();
    },1000)

})

promiseone.then(function()
{
    console.log("promise is consumed");
})



