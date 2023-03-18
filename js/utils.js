addItem.onclick = inputInfo;
itemEvent.onkeypress = inputInfo;
clearItem.onclick = clearInfo;

function clearInfo(e){
    itemEvent.value = '';
}
function createButtonDel(e){
    const buttonDel = document.createElement('button');
    buttonDel.appendChild(document.createTextNode('x'));
    buttonDel.classList.add('del');
    buttonDel.onclick = e => {
        e.target.parentElement.remove();
    }
    return buttonDel;
}


function  inputInfo (e) {
    var key = e.keyCode || e.which;
    console.log("key = ", key)
    const text = itemEvent.value.trim();
    console.log("text = ", text)

    if ((key === 13) || (key===1)) {
        if (text) {
            const li = document.createElement('li');
            li.appendChild(document.createTextNode(text));
            li.appendChild(createButtonDel());
            todoList.appendChild(li);
            itemEvent.value = '';
        } else {
            alert("not text");
        }
    }
}