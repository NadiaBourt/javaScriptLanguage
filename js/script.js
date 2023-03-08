setInterval(printTime, 1000);
function printTime(){
    let d = new Date();
    const h = (d.getHours()).toString().padStart(2, '0');
    const m = (d.getMinutes()).toString().padStart(2, '0');
    const s = (d.getSeconds()).toString().padStart(2, '0');
    const time = `${h}: ${m}: ${s}`;
    const h1 = document.createElement('h1');
    const text = document.createTextNode(time);
    h1.appendChild(text);
    if (root.firstElementChild){
        root.replaceChild(h1,root.firstElementChild);
    } else {
        root.appendChild(h1);
    }

}