 let display = document.querySelector("#display");
 
 function clear_display() {
    display.innerHTML = "";
 }

 function input(symbol) {
    display.innerHTML += symbol;
 }

 function calculate() {
    display.innerHTML = eval(display.innerHTML);
 }