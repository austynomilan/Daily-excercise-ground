// promises continues

// let promise = new Promise(function(resolve, reject){
//     throw new Error("error")
// })

// .finally(() => console.log("promise is ready"))
// .then(result => console.log(result))



// lets have a call back function

// function loadScript(src, callback){
//     let script = document.createElement('script')
//     script.src = src

//     script.onload = () => callback(null, script)
//     script.onerror = () => callback(new Error(`script load error for ${src}`))

//     document.head.append(script)
// }

// promise version

// function loadScript(src){
//     return new Promise(function(resolve,reject){
//         let script = document.createElement('script')
//         script.src = src

//         script.onload =() => resolve(script)
//         script.onerror=() => reject(new Error(`script load error for ${src}`))

//         document.head.append(script)
//     })
// }

// let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js")
// promise.then(
//     result => alert(`the script ${result.src} is loaded`),
//     error => alert(`Error: ${error.message}`)
// )

// promise.then(
//     script => alert('Another handler...')
// )


// // delay with a promise

// function delay(ms){
// return new Promise(resolve => setTimeout(resolve, ms))    
// }

// delay(3000).then(() => alert('runs after 3 seconds'));


//animated circle
function go(){
 showCircle(150, 150, 100, div =>{
    div.classList.add('message-ball')
    div.append('Hello, world!')
 })
}

function showCircle(cx, cy, radius, callback){
    let div = document.createElement('div')
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px'
    div.style.right = cy + 'px'
    div.className = 'circle'
    document.body.append(div)

    setTimeout(()=> {
        div.style.width = radius * 2 + 'px'
        div.style.height = radius * 2 + 'px'

        div.addEventListener('transitionend', function handler(){
            div.removeEventListener('transitionend', handler)
            callback(div)
        })
    }, 0)
}