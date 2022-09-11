hljs.highlightAll();

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

const { DefaultRubyVM } = window["ruby-wasm-wasi"];
const main = async () => {
    // Fetch and instntiate WebAssembly binary
    const response = await fetch(
        "https://cdn.jsdelivr.net/npm/ruby-head-wasm-wasi@latest/dist/ruby.wasm"
    );
    const buffer = await response.arrayBuffer();
    const module = await WebAssembly.compile(buffer);
    const { vm } = await DefaultRubyVM(module);

    vm.printVersion();
};

main();