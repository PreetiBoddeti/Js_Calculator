const defaultResult=0
let CurrentResult=defaultResult

//button declaration from html
const addBtn=document.getElementById("add");
const subBtn=document.getElementById("sub");
const mulBtn=document.getElementById("mul");
const divBtn=document.getElementById("div");
const modBtn=document.getElementById("mod")

console.log(addBtn)
//addBtn.addEventListener('click',add)

//user input from the html page
function getUserInput(){
    userInput=document.getElementById('input').value
    return parseInt(userInput)
    
}

//Type of Calculation 
function calculateType(calcType){
    const inputNumber=getUserInput()
    const initialResult=CurrentResult
    let operator
    if(calcType=='ADD'){
        CurrentResult=CurrentResult+inputNumber
       operator='+'
    }
    else if(calcType=='SUB'){
        CurrentResult=CurrentResult-inputNumber
        operator='-'
    }
    else if(calcType=='MUL'){
        CurrentResult=CurrentResult*inputNumber
        operator='*'
    }
    else if(calcType=='DIV'){
        CurrentResult=CurrentResult/inputNumber
        operator='/'
    }
    else if(calcType=='MOD'){
        CurrentResult=CurrentResult%inputNumber
        operator='%'
    }
    else{
        document.getElementById('other').innerHTML="Select correct operation"
    }
    displayOutput(operator,initialResult,CurrentResult,inputNumber)

}

//display the calculated result
function displayOutput(operator, initialResult,calcResult,inputNumber){
    console.log(inputNumber)
    document.getElementById('display').innerHTML="The Calulation is "+`${initialResult} ${operator} ${inputNumber}`
    document.getElementById('Result').innerHTML="The total Result is "+ `${calcResult}`
}

//add functionality
function add(){
    calculateType('ADD')
}

//subtract functionality
function sub(){
    calculateType('SUB')
}

//multiplication functionality
function mul(){
   calculateType('MUL')
}

//division functionality
function div(){
    calculateType('DIV')
}

//modulus functionality
function mod(){
    calculateType('MOD')
}

//invoke event listeners
addBtn.addEventListener('click',add)
subBtn.addEventListener('click',sub)
mulBtn.addEventListener('click',mul)
divBtn.addEventListener('click',div)
modBtn.addEventListener('click',mod)