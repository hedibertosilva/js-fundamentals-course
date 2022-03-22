ID_CONTENT = "figures"
ID_BTN_PLAY = "btnPlay"

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
                <div class="card" style="width: 50%;">
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
}
