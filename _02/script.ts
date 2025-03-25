const btn = document.querySelector("button") as HTMLButtonElement

const image_1 = document.getElementById("superman") as HTMLImageElement

const image_2 = document.getElementById("batman") as HTMLImageElement


btn.addEventListener("click",()=>{
    let sawp = image_1.src;
    image_1.src = image_2.src
    image_2.src = sawp
})
