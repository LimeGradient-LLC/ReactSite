class FlexBreak extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({mode: "open"});
        const div = document.createElement("div")
        div.classList.add("break")
        shadow.appendChild(div)
    }
}

customElements.define("flexbreak", FlexBreak);