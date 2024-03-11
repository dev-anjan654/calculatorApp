const button = document.querySelectorAll("button");
const outPut = document.getElementById("output");
let value = "";

let array = Array.from(button);
array.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        if(e.target.innerHTML == "="){
            value = eval(value);
            outPut.value = value;
        }
        else if(e.target.innerHTML == "AC"){
            value = "";
            outPut.value = value;
        }
        else if(e.target.innerHTML == "DEL"){
            value = value.substring(0, value.length - 1);
            outPut.value = value;
        }
        else{
            value += e.target.innerHTML;
            outPut.value = value;
        }
    })
})