 let base36arr = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L',
     'M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

 console.log (fromNumberToString(900550, 36))
 console.log (fromNumberToString(-900550, -36))
 console.log (fromNumberToString(900550, -8))
 console.log (fromNumberToString(900550, 16))
 console.log (fromNumberToString(900550, 2))
 console.log (fromNumberToString(900550, 36))

function fromNumberToString(number, base) {
         base = Math.abs(base);
         number = Math.abs(number);
         let result = "";
         do {
             let digit = 0;
             digit = Math.round(number % base);
             result = base36arr[digit] + result;
             number = Math.trunc(number / base);
         }
         while (number != 0);
         return result;
 }


 //
 //  console.log(fromStringToNumber('JAVA', 36));
 //  function fromStringToNumber(String, base)
 //  {
 //      let num = String;
 //      let result = 0;
 //      let code = 0;
 //      for(let i = 0; i<base36arr.length; i++)
 //      {
 //          let digit = num%10;
 //          digit=base36arr[digit];
 //          result = result* base+code;
 //          num = num/10;
 //      }
 //      return result;
 //  }
 // console.log(fromStringToNumber('JAVA', 36));
 // function fromStringToNumber(String, base)
 // {
 //
 //
 // }