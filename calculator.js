function valueButton(e){
    calculator.screen.value +=e.value;
}
function clear(){
    calculator.screen.value = null;
}

function calculate(){
    calculator.screen.value= eval(calculator.screen.value);
    return document.getElementByName("calculator.screen.value");
}