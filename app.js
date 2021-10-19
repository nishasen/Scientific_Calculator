const inputBox = document.querySelector("#text-box")
const clearBtn = document.querySelector("#btn-c")
const deleteChar = document.querySelector("#btn-delete-char")
const equalBtn = document.querySelector("#btn-equal")
const piBtn = document.querySelector("#btn-pi")
const moduloBtn = document.querySelector("#btn-modulo")
const oneBtn = document.querySelector("#btn-one")
const twoBtn = document.querySelector("#btn-two")
const threeBtn = document.querySelector("#btn-three")
const fourBtn = document.querySelector("#btn-four")
const fiveBtn = document.querySelector("#btn-five")
const sixBtn = document.querySelector("#btn-six")
const sevenBtn = document.querySelector("#btn-seven")
const eightBtn = document.querySelector("#btn-eight")
const nineBtn = document.querySelector("#btn-nine")
const zeroBtn = document.querySelector("#btn-zero")
const powerBtn = document.querySelector("#btn-power")
const lnBtn = document.querySelector("#btn-ln")
const sqrtBtn = document.querySelector("#btn-sqrt")
const sqBtn = document.querySelector("#btn-square")
const divBtn = document.querySelector("#btn-div")
const mulBtn = document.querySelector("#btn-mul")
const minusBtn = document.querySelector("#btn-minus")
const plusBtn = document.querySelector("#btn-plus")
const plusMinusBtn = document.querySelector("#btn-plus-minus")
const dotBtn = document.querySelector("#btn-dot")
const openBtn = document.querySelector("#btn-open")
const closeBtn = document.querySelector("#btn-close")
const cosBtn = document.querySelector("#btn-cos")
const sinBtn = document.querySelector("#btn-sin")
const tanBtn = document.querySelector("#btn-tan")

clearBtn.addEventListener("click", ()=>{
    inputBox.value = '';
})

deleteChar.addEventListener("click", ()=>{
    inputBox.value = inputBox.value.substring(0, (inputBox.value.length)-1)
})

equalBtn.addEventListener("click", ()=>{

})

piBtn.addEventListener("click", ()=>{

})

moduloBtn.addEventListener("click", ()=>{

})

oneBtn.addEventListener("click", ()=>{
    if(Number(inputBox.value) === 0){
        inputBox.value = 1;
    } else {
        inputBox.value = inputBox.value + "1"
    }
})

twoBtn.addEventListener("click", ()=>{
    if(Number(inputBox.value) === 0){
        inputBox.value = 2;
    } else {
        inputBox.value = inputBox.value + "2"
    }
})

threeBtn.addEventListener("click", ()=>{
    if(Number(inputBox.value) === 0){
        inputBox.value = 3;
    } else {
        inputBox.value = inputBox.value + "3"
    }
})

fourBtn.addEventListener("click", ()=>{
    if(Number(inputBox.value) === 0){
        inputBox.value = 4;
    } else {
        inputBox.value = inputBox.value + "4"
    }
})

fiveBtn.addEventListener("click", ()=>{
    if(Number(inputBox.value) === 0){
        inputBox.value = 5;
    } else {
        inputBox.value = inputBox.value + "5"
    }
})

sixBtn.addEventListener("click", ()=>{
    if(Number(inputBox.value) === 0){
        inputBox.value = 6;
    } else {
        inputBox.value = inputBox.value + "6"
    }
})

sevenBtn.addEventListener("click", ()=>{
    if(Number(inputBox.value) === 0){
        inputBox.value = 7;
    } else {
        inputBox.value = inputBox.value + "7"
    }
})

eightBtn.addEventListener("click", ()=>{
    if(Number(inputBox.value) === 0){
        inputBox.value = 8;
    } else {
        inputBox.value = inputBox.value + "8"
    }
})

nineBtn.addEventListener("click", ()=>{
    if(Number(inputBox.value) === 0){
        inputBox.value = 9;
    } else {
        inputBox.value = inputBox.value + "9"
    }
})

zeroBtn.addEventListener("click", ()=>{
    if(Number(inputBox.value) === 0){
        inputBox.value = 0;
    } else {
        inputBox.value = inputBox.value + "0"
    }
    
})

powerBtn.addEventListener("click", ()=>{

})

lnBtn.addEventListener("click", ()=>{
    
})

sqrtBtn.addEventListener("click", ()=>{

})

squareBtn.addEventListener("click", ()=>{

})

divBtn.addEventListener("click", ()=>{
    var count = 0
    if(Number(inputBox.value) === 0){
        inputBox.value = 0;
    } else {
        for(let i of inputBox.value){
            if(inputBox.value === "/"){
                count++;
                break;
            } else {
                inputBox.value = inputBox.value + "/"
            }
        }
    }
})

mulBtn.addEventListener("click", ()=>{

})

minusBtn.addEventListener("click", ()=>{

})

plusBtn.addEventListener("click", ()=>{
    
})

plusMinusBtn.addEventListener("click", ()=>{

})

dotBtn.addEventListener("click", ()=>{

})

openBtn.addEventListener("click", ()=>{

})

closeBtn.addEventListener("click", ()=>{
    
})

cosBtn.addEventListener("click", ()=>{

})

sinBtn.addEventListener("click", ()=>{

})

tanBtn.addEventListener("click", ()=>{
    
})