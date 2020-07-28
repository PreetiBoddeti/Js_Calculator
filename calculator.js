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

//display the calculated result
function displayOutput(operator, initialResult,calcResult,inputNumber){
    console.log(inputNumber)
    document.getElementById('display').innerHTML="The Calulation is "+`${initialResult} ${operator} ${inputNumber}`
    document.getElementById('Result').innerHTML="The total Result is "+ `${calcResult}`
}

//add functionality
function add(){
    alert( 'Add function')
    const inputNumber=getUserInput()
    const initialResult=CurrentResult
    CurrentResult=CurrentResult+inputNumber
    displayOutput('+',initialResult,CurrentResult,inputNumber)
}

//subtract functionality
function sub(){
    alert( 'Subtract function')
    inputNumber=parseInt(getUserInput())
    const initialResult=CurrentResult
    CurrentResult=CurrentResult-inputNumber
    displayOutput('-',initialResult,CurrentResult,inputNumber)
}

//multiplication functionality
function mul(){
    alert( 'Multiplication function')
    inputNumber=parseInt(getUserInput())
    const initialResult=CurrentResult
    CurrentResult=CurrentResult*inputNumber
    displayOutput('*',initialResult,CurrentResult,inputNumber)
}

//division functionality
function div(){
    alert( 'Div function')
    inputNumber=parseInt(getUserInput())
    const initialResult=CurrentResult
    CurrentResult=CurrentResult/inputNumber
    displayOutput('/',initialResult,CurrentResult,inputNumber)
}

//modulus functionality
function mod(){
    alert( 'Div function')
    inputNumber=parseInt(getUserInput())
    const initialResult=CurrentResult
    CurrentResult=CurrentResult%inputNumber
    displayOutput('%',initialResult,CurrentResult,inputNumber)
}

//invoke event listeners
addBtn.addEventListener('click',add)
subBtn.addEventListener('click',sub)
mulBtn.addEventListener('click',mul)
divBtn.addEventListener('click',div)
modBtn.addEventListener('click',mod)