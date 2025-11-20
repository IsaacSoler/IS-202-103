function reverseString(str) 
{
    return str.split('').reverse().join('');
}

function palindrome(str)
{
    const stringReversal = str.split('').reverse().join('');

    if (str.toLowerCase() === stringReversal.toLowerCase())
    {
        return "This is a palindrome";
    }
    else
    {
        return "This is not a palindrome";
    }

}

function totalCalculator(subtotal, tip)
{
    const total = subtotal + (subtotal * tip);
    return total.toFixed(2);
}

document.getElementById("reverseButton").addEventListener("click", function() 
{
    const input = document.getElementById("reverseInput").value;
    document.getElementById("reverseOutput").textContent = reverseString(input);
});

document.getElementById("palindromeButton").addEventListener("click", function() 
{
    const input = document.getElementById("palindromeInput").value;
    document.getElementById("palindromeOutput").textContent = palindrome(input);
});

document.getElementById("tipButton").addEventListener("click", function() 
{
    const billAmount = parseFloat(document.getElementById("billAmount").value);
    const tipPercentage = parseFloat(document.getElementById("tipPercentage").value) / 100;
    document.getElementById("tipOutput").textContent = totalCalculator(billAmount, tipPercentage);


//Also used conventional java script function syntax for better readability(I learned this in my AP CS class in highschool, shoutout Mr.Cangelosi)

});