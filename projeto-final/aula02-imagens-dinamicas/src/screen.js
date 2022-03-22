ID_CONTENT = "figures"

class Screen {
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
    static getAllHTML(items) {
        return items.map(Screen.getHTML).join('')
    }
    static replaceHTML(stringHTML) {
        const content = document.getElementById(ID_CONTENT)
        content.innerHTML = stringHTML
    }
    static render(items) {
        const contentHTML = Screen.getAllHTML(items)
        Screen.replaceHTML(contentHTML)
    }
}
