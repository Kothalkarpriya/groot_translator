var textInput = document.querySelector('#text-input');
var outputText = document.querySelector('#output');

var buttonTranslate = document.querySelector('#translator-btn');
buttonTranslate.addEventListener('click', clickhandler);

serverURL ="https://api.funtranslations.com/translate/groot.json"
function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input;
};

//for errors we have a function
function errorHandler(error) {
    
     console.log("error occured", error);
}

function clickhandler(){
    console.log("Button Clicked!");

    var inputText = textInput.value;
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json =>{
        var translatedText = json.contents.translated;
        outputText.innerText = translatedText;
    })
    .catch(()=>alert("You have reached the maximum attempt level. Please try after some time. Thank you!"));
};