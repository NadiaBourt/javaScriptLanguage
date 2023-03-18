function createButtonDel(e){
    const buttonDel = document.createElement('button');
    buttonDel.appendChild(document.createTextNode('x'));
    buttonDel.classList.add('del');
    buttonDel.onclick = e => {
        e.target.parentElement.remove();
    }
    return buttonDel;
}


function  inputInfo (e){
    alert("inputInfo");
    const text = item.value.trim();
    if (text) {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(text));
        li.appendChild(createButtonDel());
        todoList.appendChild(li);
        item.value = '';
    }
    else {
        alert("not text");
    }
}