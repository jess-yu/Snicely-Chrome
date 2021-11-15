var textAreas = document.querySelector('textarea');

var textInput = document.querySelector('input[type="text"]')

function listenToText(e) {
    console.log("the event has been fired");
}

function submitText(e){
    console.log("Aha you tried to submit");
    return false
}

textAreas.addEventListener('input', listenToText);
textAreas.addEventListener('blur', submitText);

//console.log("ready state is: ", document.readyState)
//if(document.readyState !== 'complete') {
//    window.addEventListener('load',afterWindowLoaded);
//} else {
//    console.log("this has run")
//    afterWindowLoaded();
//}
//
//
//function afterWindowLoaded(){
//    console.log("state changed");
//}
