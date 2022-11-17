let number = [9,1, 5, 6, 4, 8, ]

function getSortedArray(number) {
    const result = number.slice();
    return result.sort((a,b) => {
        let res = 1; // a%2 ==  0 && b%2 != 0
        if(a%2 != 0 && b%2==0) {
            res = -1;
            console.log('a= ', a);
            console.log('b= ', b);
        }
        else if (a%2 == 0 && b%2==0)
        {
            res = b-a;
            console.log('a= ', a);
            console.log('b= ', b);
        }
        else if (a%2 == 1 && b%2== 1)
        {
            res = b-a;
            console.log('a= ', a);
            console.log('b= ', b);
        }
        console.log(res);
        return res;
    })
}

console.log(getSortedArray(number));