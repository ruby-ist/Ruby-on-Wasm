const {DefaultRubyVM} = window["ruby-wasm-wasi"];
let rubyVM;
const main = async () => {
    const response = await fetch("https://cdn.jsdelivr.net/npm/ruby-head-wasm-wasi@latest/dist/ruby.wasm");
    const buffer = await response.arrayBuffer();
    const module = await WebAssembly.compile(buffer);
    const {vm} = await DefaultRubyVM(module);

    vm.printVersion();
    rubyVM = vm;
};

main();

function run(){
    let code = document.querySelector('#code').innerText;
    let output = document.querySelector('#output');
    output.innerText = "";
    const result = rubyVM.eval(code);
}

document.body.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.code === "KeyR")
        run();
});