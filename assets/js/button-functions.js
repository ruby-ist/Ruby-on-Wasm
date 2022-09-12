let menuOpened = false;
let copyButtons = document.querySelectorAll('.copy-btn');

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
        copyButtons.forEach((button) => {
            button.innerHTML = `<i class="copy icon"></i> Copied!`;
        })
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

async function toggleMenu(){
    let menuIcon = document.querySelector('#menu-icon');
    let menu = document.querySelector('#mobile-menu')
    if(!menuOpened) {
        gsap.set('#mobile-menu', {opacity: 1})
        gsap.from('#mobile-menu', {
            scaleX: 0,
            transformOrigin: "right",
        });
        menuIcon.classList.remove('bars');
        menuIcon.classList.add('arrow', 'right');
        menuOpened = true;
    } else {
        await gsap.to('#mobile-menu', {
            scaleX: 0,
            opacity: 0,
            transformOrigin: "right"
        });
        menu.setAttribute('style', '')
        menuIcon.classList.remove('arrow', 'right');
        menuIcon.classList.add('bars');
        menuOpened = false;
    }
}

document.querySelector('#editor')
    .addEventListener('focus', () => {
        copyButtons.forEach((button) => {
            button.innerHTML = `<i class="copy icon"></i> Copy`;
        })
    });