function convertToRoman() {
    const arabicNumber = document.getElementById('arabicNumber').value;
    const resultElement = document.getElementById('result');
    
    if (isNaN(arabicNumber) || arabicNumber < 1 || arabicNumber > 3999) {
        resultElement.innerText = 'Please enter a valid number between 1 and 3999.';
    } else {
        const romanNumeral = toRoman(arabicNumber);
        resultElement.innerText = `Roman Numeral: ${romanNumeral}`;
    }
}

function toRoman(num) {
    const romanNumerals = [
        'I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'
    ];
    const arabicValues = [
        1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000
    ];

    let result = '';

    for (let i = arabicValues.length - 1; i >= 0; i--) {
        while (num >= arabicValues[i]) {
            result += romanNumerals[i];
            num -= arabicValues[i];
        }
    }

    return result;
}
