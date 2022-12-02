function getId(iDigits)
{
    let min = Math.pow(10, iDigits - 1)
    let max = Math.pow(10, iDigits)
    let id = min - 0.5 + Math.random() * (max - min - 1);
    return Math.round(id);
}

let id = getId(5)
console.log(id)