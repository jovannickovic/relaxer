const circleContainer = document.querySelector('.circle-container');
const pointerContainer = document.querySelector('.pointer-container');
const text = document.querySelector('p');

// 4-7-8 Breathing technique
const totalTime = 19000;
const holdTime = 7000;
const breatheTime = 4000;

const breathe = () => {
    text.innerText = "Breathe in through the nose!";
    circleContainer.className = "circle-container grow";

    setTimeout(() => {
        text.innerText = "Hold the breath.";

        setTimeout(() => {
            text.innerText = "Exhale through the mouth!";
            circleContainer.className = 'circle-container shrink';
        }, holdTime);
    }, breatheTime);
}

circleContainer.addEventListener('click', () => {
    if (pointerContainer.className !== 'pointer-container start') {
        pointerContainer.className = 'pointer-container start';

        breathe();

        setInterval(breathe, totalTime); 
    }
});