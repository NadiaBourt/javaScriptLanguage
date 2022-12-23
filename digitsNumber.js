{
    const number=5623;
    let sum = 0;

    console.log (" Output 1 = ", getDigitsSum(number));
    let example = "9000/(10+20)**2";
    console.log("Output 2 = ", oPa (example));


    function oPa (example)
    {
        return new Function('return '+ example)();
    }

function getDigitsSum (number) {
      if (number < 0) {
        number = -number;
    }
        while (number != 0) {
            let digits = 0;
            digits = Math.round(number % 10);
            sum = (sum + digits);
            number = ((number - digits) / 10);
        }
        return sum;
}
}