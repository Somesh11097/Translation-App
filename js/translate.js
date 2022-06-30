// var btnTranslate = document.querySelector('#btn-translate');
// var txtInput = document.querySelector('#txt-input');
// var outputDiv = document.querySelector('#output');

//  var serverURL = "https://api.funtranslations.com/translate/pirate.json"


// function getTranslationURL(text){
//     return serverURL + "?" + "text=" + text
// }


// // console.log(txtInput);


// function errorHandler(error){
//     console.log("error occured", error);
//     alert("Something wrong with server");
// }
// function clickEventhandler(){
//     // outputDiv.innerText = "translated " + txtInput.value;

//     var inputText = txtInput.value //taking input


//     //calling server
//     fetch(getTranslationURL(inputText))
//     .then(response => response.json())
//     .then(json => {
//         var translatedText = json.contents.translated;
//         outputDiv.innerText = translatedText;
//     } )
//     .catch(errorHandler)

//     // console.log("clicked");
//     // console.log("input", txtInput.value);
// };
// // this is used to add eventlistner to the btnTranslate, so bascially whenever we click on the btn a function is passed with it

// btnTranslate.addEventListener("click",  clickEventhandler)

var input = document.querySelector ("#input-box")
var translateButton = document.querySelector ("#translate-btn")
var output = document.querySelector ("#output-box")

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function apiURL (text) {
    return serverURL + "?" + "text=" + text
}

function clickHandler () {
    var inputText = input.value
    fetch(apiURL(inputText))
    .then (response => response.json ())
    .then (json => output.innerText = json.contents.translated)
}

function typeIdentifier () {
    output.innerText = (" ")
}

translateButton.addEventListener ("click", clickHandler)
input.addEventListener ("change", typeIdentifier)
