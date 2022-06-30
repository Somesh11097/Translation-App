var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector('#txt-input');

// console.log(txtInput);

function clickEventhandler(){
    console.log("clicked");
    console.log("input", txtInput.value);
}
// this is used to add eventlistner to the btnTranslate, so bascially whenever we click on the btn a function is passed with it
btnTranslate.addEventListener("click",  clickEventhandler)