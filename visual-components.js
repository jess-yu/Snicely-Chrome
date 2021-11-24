var currentLanguageNegative = false;

function setupVisualComponents(focusedElement) {
    var popupModal = document.getElementById('snicely-modal-container')
    if (!popupModal) {
        renderSnicelyPopUp()
    }
    renderSnicelyButton(focusedElement)
}

function renderSnicelyButton(destinationElement){
    var theme = (currentLanguageNegative)? "snicely-bad" : "snicely-good"
    var imgSrc = chrome.runtime.getURL((currentLanguageNegative)? "img/noun_sad_face_4204565.png" : "img/noun_chat_7797.png")
    var button = `<button id='snicely-button' class="snicely-button ${theme}">
                <img src="${imgSrc}" id="snicely-img" height="35px" width="35px"/>
            </button>`
    destinationElement.insertAdjacentHTML('afterend', button)
    destinationElement.addEventListener('blur', function(e) {
        var snicelyButton = document.getElementById('snicely-button')
        if (snicelyButton) {
            snicelyButton.remove()
        }
    })
    var snicelyButton = document.getElementById('snicely-button');
    snicelyButton.addEventListener("click", function(e){
        showSnicelyModal()
    })
}

function renderSnicelyPopUp(){
    var modal = document.createElement("div");
    modal.setAttribute("id","snicely-modal-container")
    modal.setAttribute("class", "snicely-modal-container")
    modal.insertAdjacentHTML('afterbegin', `
        <div class="snicely-modal snicely-good" id="snicely-modal">
            <div id="snicely-modal-body">
                Thank you for saying it Snicely! You are doing a great job!
            </div>
            <button class="snicely-button snicely-good snicely-hide" id="snicely-modal-button">
                Rephrase
            </button>
        </div>`)
    document.body.appendChild(modal)
    document.getElementById('snicely-modal-button').addEventListener("click", function(e){
        hideSnicelyModal()
    })
    document.getElementById('snicely-modal-container').addEventListener("click", function(e){
        hideSnicelyModal()
    })
}

function setToxicLanguageColors() {
    currentLanguageNegative = true
    var snicelyButton = document.getElementById('snicely-button')
    snicelyButton.classList.remove('snicely-good')
    snicelyButton.classList.add('snicely-bad')
    var snicelyModal = document.getElementById('snicely-modal')
    snicelyModal.classList.remove('snicely-good')
    snicelyModal.classList.add('snicely-bad-light')
    var snicelyModalButton = document.getElementById('snicely-modal-button')
    snicelyModalButton.classList.remove('snicely-good')
    snicelyModalButton.classList.add('snicely-bad')
    snicelyModalButton.classList.remove('snicely-hide')
    var snicelyModalBody = document.getElementById('snicely-modal-body')
    snicelyModalBody.innerText = "Hi There! This does not sound very snice, perhaps there is a better way to say it?"
    document.getElementById('snicely-img').src = chrome.runtime.getURL('img/noun_sad_face_4204565.png')
}

function setSniceColors() {
    currentLanguageNegative = false
    var snicelyButton = document.getElementById('snicely-button')
    snicelyButton.classList.add('snicely-good')
    snicelyButton.classList.remove('snicely-bad')
    var snicelyModal = document.getElementById('snicely-modal')
    snicelyModal.classList.add('snicely-good')
    snicelyModal.classList.remove('snicely-bad-light')
    var snicelyModalButton = document.getElementById('snicely-modal-button')
    snicelyModalButton.classList.add('snicely-good')
    snicelyModalButton.classList.add('snicely-hide')
    snicelyModalButton.classList.remove('snicely-bad')
    var snicelyModalBody = document.getElementById('snicely-modal-body')
    snicelyModalBody.innerText = "Thank you for saying it Snicely! You are doing a great job!"
    document.getElementById('snicely-img').src = chrome.runtime.getURL('img/noun_chat_7797.png')
}

function hideSnicelyModal() {
    var modal = document.getElementById('snicely-modal-container')
    if (modal){
        modal.classList.remove('show')
    }
}

function showSnicelyModal() {
    var modal = document.getElementById('snicely-modal-container')
    if (modal) {
        modal.classList.add('show')
    }
}
