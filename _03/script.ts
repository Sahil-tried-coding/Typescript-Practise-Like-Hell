
const form = document.querySelector("form") as HTMLFormElement

const names = document.getElementById("name")  as HTMLInputElement
const age = document.getElementById("age") as HTMLInputElement






form.addEventListener("submit",(e)=>{
    e.preventDefault()
    if(names.value === '' || age.value === ''){
        alert("name/age missiing")
    }
})