const result = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const mimusBtn = document.getElementById('minus')
const multiBtn = document.getElementById('multi')
const divideBtn = document.getElementById('divide')

let action = '+'

plusBtn.onclick = function(){
    action='+'
}

mimusBtn.onclick = function(){
    action='-'
}

multiBtn.onclick = function(){
    action='*'
}

divideBtn.onclick = function(){
    action = ':'
}

function computeNumbersWithAction(inpt1,inpt2,actionVariable){
    if (actionVariable=='+'){
        return Number(inpt1.value) + Number(inpt2.value)
    } else if(action=='-'){
        return Number(inpt1.value) - Number(inpt2.value)
    } else if (action=='*'){
        return Number(inpt1.value) * Number(inpt2.value)
    }else if(action==':'){
        return Number(inpt1.value) / Number(inpt2.value)
    }
}

submitBtn.onclick = function(){

    result.textContent = computeNumbersWithAction(input1,input2,action)
}

