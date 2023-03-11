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
buttonPrev.onclick = prev;
buttonNext.onclick = next;
let index = 0;
function next(){
    index++;
    if(index===images.length){
        index=0;
    }
    picture.src = images[index];

}
function prev(){
    index--;
    if(index<0){
        index=images.length-1;
    }
    picture.src = images[index];

}

