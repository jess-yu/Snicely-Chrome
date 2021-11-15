var textAreas = document.querySelector('textarea');

var textInput = document.querySelector('input[type="text"]')

function listenToText(e) {
    console.log("the event has been fired");
}

function submitText(e){
    validateText(e.target.value);
    return false
}

function validateText(text) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://127.0.0.1:5000/validate');
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*")
    xhr.onreadystatechange = function () {
       if (xhr.readyState === 4 && xhr.status == 200) {
          response_json = JSON.parse(xhr.responseText);
          if (response_json.is_toxic){
            alert("Hi There! This does not sound very nice! Perhaps there is a better way to say it? Can you reword and rephrase it?")
          }
       }
    };
    xhr.send("text="+text);
}

textAreas.addEventListener('input', listenToText);
textAreas.addEventListener('blur', submitText);
