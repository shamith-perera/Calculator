function addToDisplay(value) {
    document.getElementById("display").value += value;
}
function addOppToDisplay(opearator) {
    let input =document.getElementById("display").value ;
    let lastValue = input[input.length-1];
    if(lastValue!=='+' && lastValue!=='-' && lastValue!=='*' && lastValue!=='/' ){
        document.getElementById("display").value += opearator;
    }
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function clearLast(){ 
    let input =document.getElementById("display").value ;
    if(input.length>0){
        input = input.substring(0,input.length-1);
        document.getElementById("display").value = input;   
    }
}

function calculate() {
    let cal = document.getElementById("display").value;

    const numbers = [];
    const operators = [];
    let numberStart = 0;
    for(let i = 0; i < cal.length; i++) {
        if(cal[i] === '+' || cal[i] === '*' || cal[i] === '-' || cal[i] === '/') {
            operators.push(cal[i]);
            numbers.push(Number(cal.substring(numberStart, i)));
            numberStart = i + 1;
        }
    }
    numbers.push(Number(cal.substring(numberStart)));
    console.log(numbers);
    console.log(operators);
    // Evaluate division first
    for(let i = 0; i < operators.length; i++) {
        if(operators[i] === '/') {
            numbers[i] = numbers[i] / numbers[i + 1];
            numbers.splice(i + 1, 1);
            operators.splice(i, 1);
            i--; 
        }
    }
    // Evaluate multiplication next
    for(let i = 0; i < operators.length; i++) {
        if(operators[i] === '*') {
            numbers[i] = numbers[i] * numbers[i + 1];
            numbers.splice(i + 1, 1);
            operators.splice(i, 1);
            i--; 
        }
    }
    // Evaluate addition and subtraction
    for(let i = 0; i < operators.length; i++) {
        if(operators[i] === '+') {
            numbers[i] = numbers[i] + numbers[i + 1];
            numbers.splice(i + 1, 1);
            operators.splice(i, 1);
            i--; 
        } else if(operators[i] === '-') {
            numbers[i] = numbers[i] - numbers[i + 1];
            numbers.splice(i + 1, 1);
            operators.splice(i, 1);
            i--; 
        }
    }
    document.getElementById("display").value=numbers[0];   
}
    















