const {DefaultRubyVM} = window["ruby-wasm-wasi"];
let rubyVM;
const main = async () => {
    const response = await fetch("https://cdn.jsdelivr.net/npm/ruby-head-wasm-wasi@latest/dist/ruby.wasm");
    const buffer = await response.arrayBuffer();
    const module = await WebAssembly.compile(buffer);
    const {vm} = await DefaultRubyVM(module);

    if(vm !== undefined) {
        document.querySelector('#output').innerText = "";
        vm.printVersion();
    } else{
        document.querySelector('#output').innerText = "Internal Error !!";
    }
    rubyVM = vm;
};

main();

function run(){
    let code = document.querySelector('#code').innerText;
    let output = document.querySelector('#output');
    output.style.color = "limegreen";
    output.innerText = "";
    try{
        rubyVM.eval(code);
    } catch (error) {
        output.style.color = "#d30001";
        output.innerText = error.message;
    }
}

document.body.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.code === "KeyR")
        run();
});