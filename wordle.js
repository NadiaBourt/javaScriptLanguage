const word = "table";
const N_LETTERS = 5;
let tryMax = 5;
const letterElements = document.querySelectorAll(".letter-guess")
const form = document.querySelector('form')
let successCounter;
function onChange (event)
{
    if (tryMax === 0)
    {
        // alert(`GAME OVER`);
        form.innerHTML = `GAME OVER`;
        tryMax = 5;
    }
    else if (tryMax>0)
    {
        successCounter = 0;
        form.innerHTML = tryMax;
        tryMax--;
        const wordGuess = event.target.value;
        event.target.value = '';
        if (wordGuess.length != N_LETTERS) {
            alert(`A word should contain ${N_LETTERS} letters`);
        } else {
            const wordAr = Array.from(wordGuess);   //make array from enters word
            wordAr.forEach((l, i) => letterElements[i].innerHTML = l);
            //l-буква i - index
            // from 5 letters I need make 5 colors = it's MAP
            const colors = wordAr.map((letter, i) => {
                let index = word.indexOf(letter);
                let res = 'red';//red = index =-1
                if (index > -1) {                                        //index==i place and letter - green
                    if (index == i)
                    {
                        res = 'green'
                        successCounter++;
                    }
                    else {
                        res = 'yellow'
                    }
                }

                return res;
            })
            if (successCounter === N_LETTERS) {
                form.innerHTML = `YOU ARE WIN !!!`;
            }
            colors.forEach((c, i) => letterElements[i].style.color = c)
        }
    }
}