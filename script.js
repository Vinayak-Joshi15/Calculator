const screen = document.querySelector(".display");
let a = "";
let b = "";
let symbol1,symbol2;

let calc = 0;

let num = document.createElement("h1");
num.textContent = a ? a: 0;
screen.appendChild(num);

function calculator(symbol1,b){
    if(symbol1 == '+'){
        calc += parseInt(b);
    }else if(symbol1 == '-'){
        calc -= parseInt(b);
    }else if(symbol1 == '/'){
        calc /= parseInt(b);
    }else if(symbol1 == '*'){
        calc *= parseInt(b);
    }else if(symbol1 == 'mod'){
        calc %= parseInt(b);
    }else{
        calc = parseInt(b);
    }
    a = 0;
    console.log(calc);
    
}

function refresh(a){
    let num = document.createElement("h1");
    num.textContent = a ? a: 0;
    screen.appendChild(num);
    
}

const clear = document.querySelector(".clear");

clear.addEventListener('click',()=>{
    a = '0';
    screen.removeChild(screen.firstChild);
    console.log("Works");
    refresh(a);
    calc = 0;
});

const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");


one.addEventListener('click',() => {
    a += '1';
    screen.removeChild(screen.firstChild);
    console.log("Works");
    refresh(a);
});

two.addEventListener('click',() => {
    a += '2';
    screen.removeChild(screen.firstChild);
    console.log("Works");
    refresh(a);
});

three.addEventListener('click',() => {
    a += '3';
    screen.removeChild(screen.firstChild);
    console.log("Works");
    refresh(a);
});

four.addEventListener('click',() => {
    a += '4';
    screen.removeChild(screen.firstChild);
    console.log("Works");
    refresh(a);
});

five.addEventListener('click',() => {
    a += '5';
    screen.removeChild(screen.firstChild);
    console.log("Works");
    refresh(a);
});

six.addEventListener('click',() => {
    a += '6';
    screen.removeChild(screen.firstChild);
    console.log("Works");
    refresh(a);
});

seven.addEventListener('click',() => {
    a += '7';
    screen.removeChild(screen.firstChild);
    console.log("Works");
    refresh(a);
});

eight.addEventListener('click',() => {
    a += '8';
    screen.removeChild(screen.firstChild);
    console.log("Works");
    refresh(a);
});

nine.addEventListener('click',() => {
    a += '9';
    screen.removeChild(screen.firstChild);
    console.log("Works");
    refresh(a);
});

zero.addEventListener('click',() => {
    a += '0';
    screen.removeChild(screen.firstChild);
    console.log("Works");
    refresh(a);
});

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");

plus.addEventListener('click',() => {
    symbol1 = symbol2;
    symbol2 = '+';
    b = a;
    a = '+';
    screen.removeChild(screen.firstChild);
    console.log("Works");
    calculator(symbol1,b);
    refresh(a);
});

minus.addEventListener('click',() => {
    b = a;
    a = '-';
    symbol1 = symbol2;
    symbol2 = '-';
    screen.removeChild(screen.firstChild);
    console.log("Works");
    calculator(symbol1,b);
    refresh(a);
});

divide.addEventListener('click',() => {
    b = a;
    a = '/';
    symbol1 = symbol2;
    symbol2 = '/';
    screen.removeChild(screen.firstChild);
    console.log("Works");
    calculator(symbol1,b);
    refresh(a);
});

multiply.addEventListener('click',() => {
    b = a;
    a = '*';
    symbol1 = symbol2;
    symbol2 = '*';
    screen.removeChild(screen.firstChild);
    console.log("Works");
    calculator(symbol1,b);
    refresh(a);
});

const equal = document.querySelector(".equals");

equal.addEventListener('click',() => {
    b = a;
    symbol1 = symbol2;
    screen.removeChild(screen.firstChild);
    console.log("Works");
    calculator(symbol1,b);
    refresh(calc);
});

const mod = document.querySelector(".mod");

mod.addEventListener('click',() => {
    b = a;
    a = '*';
    symbol1 = symbol2;
    symbol2 = 'mod';
    screen.removeChild(screen.firstChild);
    console.log("Works");
    calculator(symbol1,b);
    refresh(a);
});

