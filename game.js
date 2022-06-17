const txt = 'Kot domowy (Felis catus[1][3], również Felis silvestris catus) – udomowiony gatunek KONIEC.';
const text = document.querySelector('.text');
let number = 0;
const speed = 100;
const hide = document.querySelector(".hide");

const addText = () => {
    text.textContent += txt[number];
    number++;
    if (number === txt.length) {
        clearInterval(index);
    }
}
const hideChar = () => {
    hide.classList.toggle("active");
}
const index = setInterval(addText, speed);
setInterval(hideChar, 400);
