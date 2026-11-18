function reverseString(text){
    let reversed = "";
    for (index = text.length-1; index >=0; index--){
        reversed = reversed + (text.charAt(index));
    }
    return reversed;
}

function checkPalindrome (input) {
    if (input === reverseString(input)){
        console.log("The given string is PALINDROME");
    } else {
        console.log("The given text is not a PALINDROME");
        
    }
}

let text = "madam";
checkPalindrome(text);