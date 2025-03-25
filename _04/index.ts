const start = document.getElementById("start") as HTMLButtonElement
const buttonh = document.getElementById("stop") as HTMLButtonElement

const timer = document.querySelector("h1") as HTMLHeadingElement


var init:number;
start.addEventListener("click",()=>{
    let count:number=0

    init = setInterval(function(){

        timer.innerText = count.toString()
        count ++
    },1000)
})


buttonh.addEventListener("click",()=>{
    clearInterval(init)
})