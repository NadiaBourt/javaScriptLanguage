const word = "table";
const N_LETTERS = 5;
function onChange (event)
{
    const wordGuess = event.target.value;
    if (wordGuess.length != N_LETTERS)
    {
        alert(`A word should contain ${N_LETTERS} letters`);
    }
else {

    }
}