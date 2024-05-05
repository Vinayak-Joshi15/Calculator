const screen = document.querySelector(".display");

a = "";
sym = "+";
flag = false;
num1 = 0;
num2 = 0;
isDecimal = false;

let disp = document.createElement("h1");
    disp.textContent = 0;
    screen.appendChild(disp);

const clear = document.querySelector(".clear");
clear.addEventListener('click',()=>{
    a = "";
    sym = "+";
    flag = false;
    num1 = 0;
    num2 = 0;
    refresh(0);
});

function refresh(a){
    screen.removeChild(screen.firstChild);
    let disp = document.createElement("h1");
    disp.textContent = a;
    screen.appendChild(disp);
}

const numbers = document.querySelectorAll(".numbers");

function worker(btn){
    btn.addEventListener('click',() => {
        a += btn.textContent;
        refresh(a);
    })
}
numbers.forEach(worker);

function signMaker(btn){
    btn.addEventListener('click',() => {
        sym = btn.textContent;
        console.log(sym);
        if(!flag){
            num1 = parseFloat(a);
            flag = true;
        }else{
            num2 = parseFloat(a);
        }
        a = "";
        //refresh("_");
        console.log(num1,num2);
    })
}

const signs = document.querySelectorAll(".sign");

signs.forEach(signMaker);

const equal = document.querySelector(".equals");
equal.addEventListener('click',() => {
    num2 = parseInt(a);
    if(sym == '+'){num1 = num1+num2;}
    else if(sym == '-'){num1 = num1-num2;}
    else if(sym == '*'){num1 = num1*num2;}
    else if(sym == '/'){num1 = num1/num2;}
    else if(sym == '^'){num1 = Math.pow(num1,num2);}
    else{num1 = num1+num2;}
    refresh(num1);
    num2 = 0;
    decimal.disabled = false;
    isDecimal = false;
});

const decimal = document.querySelector(".decimal");
function addDecimal(){
    if(!isDecimal){
        a += decimal.textContent;
        refresh(a);
        decimal.disabled = true;
        isDecimal = true;
    }else{
        console.log("Already decimal in place")
    }
}
decimal.addEventListener('click',addDecimal);

