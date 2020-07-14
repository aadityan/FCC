// Covert Integer to Roman Numeral
function convertToRoman(num) {

    const romans = {
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I'
    };

    const nums = Object.keys(romans)
                    .map(i => parseInt(i))
                    .sort((a, b) => b - a);
    
    let output = '';
    for(let i = 0; i < nums.length; i++){
        while(nums[i] <= num){
            output += romans[nums[i]];
            num -= nums[i];
        }
    }
    console.log(output);
    return output;
}