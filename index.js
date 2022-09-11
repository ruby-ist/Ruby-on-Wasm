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