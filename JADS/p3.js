// Ceaser Cipher 
// Right shift of 13 chars
function rot13(str) {

    // Create an array of capital letters
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
                      .split('');
  
    // I should break this into smaller bits
    // 1. Split input string into a char array
    // 2. Check if each char is in letters array
    //   2a. If it isnt, return the char 
    //   2b. If it is, shift it left by 13 chars
    // 3. Combine the transformed array back into string
    // 4. Return transformed string
    return str
      .split('')
      .map(i => {
        if(letters.indexOf(i) < 0){
          return i
        } else if(letters.indexOf(i) < 13){
          return letters[letters.indexOf(i) + 13]
        } else {
          return letters[letters.indexOf(i) - 13]
        }
      })
      .join('');
  }
  