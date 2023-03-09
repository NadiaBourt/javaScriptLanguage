const images = [
    "./images/Rouen_Cathedral_1.jpg",
    "./images/Rouen_Cathedral_2.jpg",
    "./images/Rouen_Cathedral_3.jpg",
    "./images/Rouen_Cathedral_4.jpg",
    "./images/Rouen_Cathedral_5.jpg",
    "./images/Rouen_Cathedral_6.jpg"
];

const buttonPrev = document.getElementById('buttonPrev');
const buttonNext = document.getElementById('buttonNext');

buttonPrev.oneclick = prev;
buttonNext.oneclick = next;
function next(){
    picture.src = images[1];
}
function prev(){
    picture.src = images[0];
}

