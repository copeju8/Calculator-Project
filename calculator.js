 
const operators = { add: "+", subtract: "-", multiply: "*", divide: "/"}
var ans;

/*function valueButton(e){
    operators.screen.value +=e.value;
}
function Clear(){
    operators.screen.value = null;
}*/

function Calculate(){
    
    var num1 = document.getElementsByName("input1").value;
    var num2 = document.getElementsByName("input2").value;
    var eq = document.getElementsByName("equal").value;

console.log(operators.add);
    console.log(operators[num1] === operators[num2]);

    // get selected radio button and input values
    
    switch (operators){
        case operators.Add:
            ans =  num1+num2;
            break;
        case operators.subtract:
            ans =  num1-num2;
            break;
        case operators.multiply:
            ans =  num1*num2;
            break;
        case operators.divide:
            num2 !=0;
            ans =  num1/num2;
            break;
        default:
            return "Try again!"
    }
    var ans = document.getElementsByClassName("equal").value;
}

var answer = Calculate(4,5);
console.log(answer);
