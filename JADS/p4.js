// Telephone Number Validator
function telephoneCheck(str) {
  
    str = str.trim();
  
    // Check Non Numerical / Pertinent Chars
    let nonNum = /[^()+-\d\s]/g;
    let nonNums = str.match(nonNum)
    if(nonNums != null) {
        return false;
    }

    let numbersOnly = /\d/g;
    let checkNum = str.match(numbersOnly).length;

    // Check Number Length
    if(checkNum < 10){
        return false;
    }

    // Check Country Code
    const country = ['1 ', '+1', '1(']
    if(checkNum > 10 & 
       country.indexOf(str.substring(0,2)) == -1){
      return false;
    }


    let parenOnly = /[()]/g;
    let parenCount = str.match(parenOnly);

    // Check Parenthesis Count
    if(parenCount != null){
        if(parenCount.length != 2){
          return false;
        } else {
          let openIdx = str.split('').indexOf('(');
          let closeIdx = str.split('').indexOf(')');
          if(closeIdx - openIdx > 4){
              return false;
          }
        }
    }

    return true;
}
  
console.log(telephoneCheck("+1(555)-555-5555"));
console.log(telephoneCheck("1 555)555-5555"));
console.log(telephoneCheck("(6054756961)"));
console.log(telephoneCheck("555)-555-5555"));
console.log(telephoneCheck("(555-555-5555"));
console.log(telephoneCheck("123**&!!asdf#"));