alert('dsfbjdfsd')
const defaultResult=0
let CurrentResult=defaultResult

const addBtn=document.getElementById("add");
console.log(addBtn)
//addBtn.addEventListener('click',add)

function getUserInput(){
    userInput=document.getElementById('input').value
    return userInput
    
}

function displayOutput(operator, initialResult, calcResult){
    document.getElementById('display').innerHTML=`${operator} ${initialResult} ${calcResult}`
}

function add(){
    alert( 'Add function')
    inputNumber=parseInt(getUserInput())
    const initialResult=CurrentResult
    CurrentResult=CurrentResult+inputNumber
    displayOutput('+',initialResult,CurrentResult)
}


addBtn.addEventListener('click',add)

