const gram = document.getElementById("gram")
const kilogram = document.getElementById("kilogram")
const ounce = document.getElementById("ounce")
const input = document.querySelector("input")

let num = ""
input.addEventListener("input", (e)=>{
    num = e.target.value
    console.log(num);
    if(num.length>0){
        gram.innerHTML = parseFloat(num)*(453.592).toFixed(5)
        kilogram.innerHTML = parseFloat(num)*(0.453592).toFixed(5)
        ounce.innerHTML = parseFloat(num)*(16).toFixed(5)
    } else{
        gram.innerHTML = 0
        kilogram.innerHTML = 0
        ounce.innerHTML = 0
    }
})