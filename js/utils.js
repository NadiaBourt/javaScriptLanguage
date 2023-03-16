function createButtonDel(e){
    const buttonDel = document.createElement('button');
    buttonDel.appendChild(document.createTextNode('x'));
    buttonDel.classList.add('del');
    buttonDel.onclick = e => {
        e.target.parentElement.remove();
    }
    return buttonDel;
}
