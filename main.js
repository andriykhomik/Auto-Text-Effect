const textEl = document.querySelector('#text');
const speedEl = document.querySelector('#speed');
const text = 'We Love Programming!';
let idx = 0;
let speed = 100 / speedEl.value;

writeText();

function writeText(){
    let letters = '';

    const interval = setInterval(()=> {
        speed = 100 / speedEl.value;
        const letter = text.charAt(idx);
        letters = letters + letter;
        textEl.innerText = letters;
        idx++

        if (idx > text.length) {
            // clearInterval(interval)
            letters = '';
            idx = 0;
        }
    }, speed);
}


