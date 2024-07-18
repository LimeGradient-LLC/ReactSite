window.onload = () => {
    let starHolder = document.querySelector(".stars");
    let starAmount = 20;

    for (let i = 0; i < starAmount; i++) {
        const div = document.createElement("div");
        div.classList.add("star");
        starHolder!.appendChild(div);
    }
}