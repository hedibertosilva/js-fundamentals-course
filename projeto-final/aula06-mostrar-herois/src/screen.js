const ID_CONTENT = "figures"
const ID_BTN_PLAY = "btnPlay"
const ID_MESSAGE = "message"

const MESSAGES = {
    success: {
        text: "Perfect! Congratulations!",
        class: "alert-success"
    },
    error: {
        text:"You Wrong! Try Again!",
        class: "alert-danger"
    }
}

const CLASS_INVISIBLE = "invisible"

class Screen {
    static render(items) {
        const contentHTML = Screen.getAllHTML(items)
        Screen.replaceHTML(contentHTML)
    }
    static getAllHTML(items) {
        return items.map(Screen.getHTML).join('')
    }
    static getHTML(item) {
        return `
            <div class="col-md-3">
                <div class="card" style="width: 50%;" onclick="window.setValidateSelection('${item.id}', '${item.name}')">
                    <img src="${item.img}" name="${item.name}" class="card-img-top">
                </div>
                <br/>
            </div>
        `
    }
    static replaceHTML(stringHTML) {
        const content = document.getElementById(ID_CONTENT)
        content.innerHTML = stringHTML
    }
    static setPlay(fnOnClick) {
        const btnPlay = document.getElementById(ID_BTN_PLAY)
        btnPlay.onclick = fnOnClick
    }
    static setValidateSelection(fnOnClick) {
        window.setValidateSelection = fnOnClick
    }
    static showHeroes(name, img) {
        const elementsHTML = document.getElementsByName(name)
        elementsHTML.forEach(item => item.src = img)
    }
    static showMessage(success=true) {
        const element = document.getElementById(ID_MESSAGE)
        if (success) {
            element.classList.remove(MESSAGES.error.class)
            element.classList.add(MESSAGES.success.class)
            element.innerHTML = MESSAGES.success.text
        } else {
            element.classList.remove(MESSAGES.success.class)
            element.classList.add(MESSAGES.error.class)
            element.innerHTML = MESSAGES.error.text
        }
        element.classList.remove(CLASS_INVISIBLE)
    }
}
