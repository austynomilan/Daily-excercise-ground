// promises continues

let promise = new Promise(function(resolve, reject){
    throw new Error("error")
})

.finally(() => console.log("promise is ready"))
.then(result => console.log(result))