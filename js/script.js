console.log(button1.title);
button1.onclick = show;
const names = fieldsBox.children;
for (let i = 0; i<names.length; i++ )
{
    names[i].onkeyup = valueToUpper;
}
function show() {
    for (let i = 0; i < names.length; i++)
    {
        const p1 = document.createElement('p');
        const text1 = document.createTextNode(names[i].value);
        p1.appendChild(text1);
        document.body.appendChild(p1);
        names[i].value = '';
    }
}
function valueToUpper(e){
    e.target.value = e.target.value.toUpperCase();
}