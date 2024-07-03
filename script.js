const textElement = document.getElementById('text');
const buttonsElement = document.getElementById('buttons');

let currentTextIndex = 0;

const texts = [
    'Hi',
    'hindi mo ako kilala pero...',
    'May chance ba ako sayo?',
    'ss -> send it to me -> get these benefits: updating without you asking, good morning/night everyday, willing to wait for your messages even how late you reply, and more!',
    'ahh... ganon ba.. sge..'
];

const choices = [
    { text: 'Yes', nextText: 3, gifUrl: 'img/20240615174255.jpg' },
    { text: 'No', nextText: 4, gifUrl: 'img/20240615174249.jpg' }
];

function init() {
    showText();
}

function showText() {
    textElement.textContent = texts[currentTextIndex];

    buttonsElement.innerHTML = '';

    if (currentTextIndex === 0 || currentTextIndex === 1) {
        addButton('Next', () => {
            currentTextIndex++;
            showText();
        });
    } else if (currentTextIndex === 2) {
        choices.forEach(choice => {
            addButton(choice.text, () => {
                currentTextIndex = choice.nextText;
                showText();
                if (choice.gifUrl) {
                    displayGif(choice.gifUrl);
                }
            });
        });
    }
}

function addButton(text, callback) {
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', callback);
    buttonsElement.appendChild(button);
}

function displayGif(url) {
    const gifElement = document.createElement('img');
    gifElement.src = url;
    gifElement.style.maxWidth = '100%';
    gifElement.style.marginTop = '20px';
    textElement.appendChild(gifElement);
}

init();
