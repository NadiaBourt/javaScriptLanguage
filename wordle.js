const word = "table";
const N_LETTERS = 5;
let try = 6;
const letterElements = document.querySelectorAll(".letter-guess")
function onChange (event)
{
    const wordGuess = event.target.value;
    event.target.value = '';
    if (wordGuess.length != N_LETTERS)
    {
        alert(`A word should contain ${N_LETTERS} letters`);
    }
else {
const wordAr = Array.from(wordGuess);   //make array from enters word
wordAr.forEach((l,i) => letterElements[i].innerHTML = l);
        //l-буква i - index
        // from 5 letters i need make 5 colors = it's MAP
const colors = wordAr.map((letter,i) =>
{
  let index = word.indexOf(letter);
  let res = 'red';//red = index =-1
    if (index> -1)
    {
        res = index==i?'green' : 'yellow'         //index==i place and letter - green
    }
    return  res;
})
        colors.forEach((c,i) => letterElements[i].style.color=c)
    }
}