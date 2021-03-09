function valueButton(e){
    calculatorForm.screen.value +=e.value;
}
function clear(){
    calculatorForm.screen.value = null;
}

function calculate(){
    calculatorForm.screen.value= eval(calculatorForm.screen.value);
    console.log(calculatorForm.screen.value);
}



