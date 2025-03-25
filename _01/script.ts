const button  = document.querySelector("button") as HTMLButtonElement

const p = document.querySelector("p") as HTMLParagraphElement


button.addEventListener("click",()=>{
    p.textContent = "This is after the button click changed text"
})