
                item.onkeyup = function pr() {
                console.log("HI");
                }
                addItem.onclick = () => {
                const text = item.value.trim();
                if (text) {
                    const li = document.createElement('li');
                    li.appendChild(document.createTextNode(text));
                    li.appendChild(createButtonDel());
                    todoList.appendChild(li);
                    item.value = '';
                } else {
                    alert("not text");
                }
            }
         let input = document.querySelector("item");
            console.log(item.value);
