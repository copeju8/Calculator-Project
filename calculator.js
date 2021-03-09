 var y = document.getElementsByName("first-number").innerHTML;
 var z= document.getElementsByName("second-number").innerHTML;
 var x = document.getElementsByName("equal").innerHTML;

function valueButton(e){
    calculatorForm.screen.value +=e.value;
}
function Clear(){
    calculatorForm.screen.value = null;
}

function Calculate(){
    let answer = calculatorForm.screen.value= eval(calculatorForm.screen.value);
    return answer;
}

Calculate(y,z);


