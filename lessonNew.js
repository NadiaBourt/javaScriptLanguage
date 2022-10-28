console.log(button.title);
button.onclick=show;
console.log(button.onclick);
name1.onekeyup = valueToUpperCase;
name2.onekeyup = valueToUpperCase;
name3.onekeyup = valueToUpperCase;

function show(e){
    alert(name1.value);
}
function valueToUpperCase(e){
    e.target.value = e.target.value.valueToUpperCase();
}