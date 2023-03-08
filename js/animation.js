let position = 0;
let t = setInterval(move, 20);
function move() {
    position++;
    if (position > 150) {
        clearInterval(t);

    } else {
        box.style.left = position + 'px';
        box.style.top = position + 'px';
    }
}
