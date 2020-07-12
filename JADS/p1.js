// Palindrome Checker
function palindrome(str){
    
    // Clean up input
    // 1. Delete non-pertinent data
    // 2. Adjust case
    // 3. Create array
    str = str
            .replace(/[_\W]/g, '')
            .toLowerCase()
            .split('');

    // Loop through array checking if
    // the value in the first half of the array
    // matches its equivalent position from the tail
    for(let i = 0; 
        i < Math.floor(str.length/2);
        i++) {
        
        // If the match fails even once, 
        // the input text is not a palindrome
        if(str[i] != str[str.length - i - 1]){
            return false;
        }
    }
    
    // No fails in the loop = input is a palindrome
    return true;
}