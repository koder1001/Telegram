let cart = localStorage.getItem('cart');
let nubmerCode = document.getElementById('number');
let myInput = document.getElementById('code-input');

window.onload = function(){
    nubmerCode.innerHTML = cart;
myInput.focus();
}