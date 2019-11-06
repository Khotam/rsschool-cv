window.addEventListener("DOMContentLoaded", start);

const keyLayout = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "Backspace",

    "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",

    "Capslock", "a", "s", "d", "f", "g", "h", "j", "k", "l", "Enter",

    "Tab", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",

    " "
];

function start() {
    const textarea = document.createElement("textarea");
    textarea.classList.add("textarea")
    document.body.append(textarea)
    const keyboard = document.createElement("div");
    keyboard.classList.add("keyboard")
    document.body.append(keyboard)

    keyLayout.forEach(item => {
        // console.log(item)
        const key = document.createElement("kbd");
        key.setAttribute(`data-key`, `${item}`)
        key.innerText = item;
        key.classList.add("keyboard__key")
        keyboard.appendChild(key)
    })


}

window.addEventListener("keydown", e => {
    console.log(e.keyCode)
    console.log(e.key)
    const key = document.querySelector(`.keyboard__key[data-key="${e.key}"]`)
    // console.log(key)
    let textarea = document.querySelector("textarea")
    key.classList.add("key__pressed")
    setTimeout(() => {
        key.classList.remove("key__pressed")
    }, 80)

    switch (e.keyCode) {
        case 8:
            textarea.value = textarea.value.substring(0, textarea.value.length - 1)
            break
        case 9:
            textarea.value += "    "
            break
        case 20:
            textarea.value += e.key.toUpperCase()
            break
        default:
            textarea.value += e.key
    }
})