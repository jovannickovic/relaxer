const container = document.querySelector('.container');
const pointerContainer = document.querySelector('.pointer-container');
const text = document.querySelector('p');

// Breathing technique
const totalTime = 7500;
const holdTime = totalTime / 5;
const breatheTime = holdTime * 2;

const breathe = () => {
    text.innerText = 'Breathe In!';
    container.className = 'container grow';

    setTimeout(() => {
        text.innerText = 'Hold.';

        setTimeout(() => {
            text.innerText = 'Breathe Out!';
            container.className = 'container shrink';
        }, holdTime);
    }, breatheTime);
}

container.addEventListener('click', () => {
    if (pointerContainer.className !== 'pointer-container start') {
        pointerContainer.className = 'pointer-container start';

        breathe();

        setInterval(breathe, totalTime); 
    }
});