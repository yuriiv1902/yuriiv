const text = [
    'Завдання №3\n',
    'Ваш текст буде відображатись тут\n',
];

function typeText(){
    let line = 0;
    let count = 0;
    let out = '';
    let htmlOut = document.querySelector('.text');

    function typeLine(){
        let interval = setTimeout(function () {
            out += text[line][count];
            htmlOut.innerHTML = out + "|";
            count++;

            if (count >= text[line].length) {
                count = 0;
                line++;
                if (line == text.length) {
                    clearTimeout(interval);
                    htmlOut.innerHTML = out;
                    return true;
                }
            }
            typeLine();
        }, getRandomNum(getRandomNum(200 * 3)));
    }
    typeLine();
}

typeText();

function getRandomNum(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const input = document.createElement('input');
let interval = 0;

document.body.append(input);

input.addEventListener('keypress', () => {
    clearTimeout(interval);
    interval = setTimeout(() => {
        text[1] = input.value;
        typeText();
    }, 5000);
});