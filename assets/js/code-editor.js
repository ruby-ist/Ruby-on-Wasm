hljs.highlightAll();
document.querySelector('#editor').focus();

function highLight(text) {
    let editor = document.querySelector("#code");
    if(text[text.length-1] === "\n")
        text += " ";
    editor.innerHTML = text.replace(new RegExp("&", "g"), "&").replace(new RegExp("<", "g"), "<");
    hljs.highlightAll();
}

function sync_scroll(element){
    let editor = document.querySelector("#code");
    editor.scrollTop = element.scrollTop;
    editor.scrollLeft = element.scrollLeft;
}

function check_tab(element, event) {
    let code = element.value;
    if(event.key === "Tab") {
        event.preventDefault();
        let before_tab = code.slice(0, element.selectionStart);
        let after_tab = code.slice(element.selectionEnd, element.value.length);
        let cursor_pos = element.selectionEnd + 1;
        element.value = before_tab + "\t" + after_tab;
        element.selectionStart = cursor_pos;
        element.selectionEnd = cursor_pos;
        highLight(element.value);
    }
}
