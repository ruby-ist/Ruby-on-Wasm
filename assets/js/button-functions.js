function clearEditor(){
    let editor = document.querySelector('#editor');
    let code = document.querySelector('#code');
    code.innerText = "";
    editor.value = "";
    editor.focus();
}

async function copyCode(){
    let code = document.querySelector('#code').innerText;
    try{
        await navigator.clipboard.writeText(code);
    } catch (e) {
        alert("Unable to copy the code!");
    }
}

function clearConsole(){
    let output = document.querySelector('#output');
    output.innerText = "";
}

async function share(){
    const shareData = {
        title: 'Ruby on Wasm',
        text: 'Serverless Ruby Interpreter',
        url: 'https://rubyonwasm.onrender.com'
    }
    try {
        await navigator.share(shareData);
    } catch (e) {
        try {
            await navigator.clipboard.writeText(shareData.url);
            alert("Url copied to your clipboard");
        } catch (e) {
            alert("Unable to share the website");
        }
    }
}
