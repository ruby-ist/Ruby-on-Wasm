const {DefaultRubyVM} = window["ruby-wasm-wasi"];
let rubyVM;
const main = async () => {
    const response = await fetch("/assets/ruby.wasm");
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
    output.innerText = output.innerText + `${result.toString()}`;
}
