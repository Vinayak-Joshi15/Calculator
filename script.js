const screen = document.querySelector(".display");

a = "";
sym = "=";
flag = false;
num1 = 0;
num2 = 0;

let disp = document.createElement("h1");
    disp.textContent = 0;
    screen.appendChild(disp);

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
            num1 = parseInt(a);
            flag = true;
        }else{
            num2 = parseInt(a);
        }
        a = "";
        refresh("_");
        console.log(num1,num2);
    })
}

const signs = document.querySelectorAll(".sign");

signs.forEach(signMaker);

const equal = document.querySelector(".equals");

equal.addEventListener('click',() => {
    if(sym == '+'){refresh(num1+num2);}
    else if(sym == '-'){refresh(num1-num2);}
    else if(sym == '*'){refresh(num1*num2);}
    else if(sym == '/'){refresh(num1/num2);}
    else if(sym == 'Mod'){refresh(num1%num2);}
    else{refresh(num1+num2);}
});


