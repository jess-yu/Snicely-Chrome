function validateText(text) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://127.0.0.1:5000/validate', false);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*")
    xhr.send("text="+text);
   if (xhr.status === 200) {
      response_json = JSON.parse(xhr.responseText);
      return response_json.is_toxic
   }
}

function writingHandler(e) {
    if (e.keyCode === 13){
        if (validateText(e.target.innerText)) {
            e.preventDefault();
            alert("Hi There! This does not sound very nice! Perhaps there is a better way to say it? Can you reword and rephrase it?")
        }
    }
}

function listenToText(e) {
    element = e.target
    if (element && element.isContentEditable){
        element.addEventListener('keydown', writingHandler)
    }
}

window.addEventListener('focus', listenToText, true)
