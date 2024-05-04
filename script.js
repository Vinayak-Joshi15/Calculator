const screen = document.querySelector(".display");
let a;
function refresh(a){
    let num = document.createElement("h1");
    num.textContent = a ? a: "Hello World";
    screen.appendChild(num);
}
refresh();
const clear = document.querySelector(".clear");
clear.addEventListener('click',()=>{
    a = "No";
    num.remove();
    refresh(a);
});