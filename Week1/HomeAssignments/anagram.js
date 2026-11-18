function getLastWordLength (longText) {
    longTextArray = longText.split(" ");
    longTextArrayLength = longTextArray.length;
    console.log(longTextArray[longTextArrayLength-1].length);
}

function sortGivenText(unsortedText){
    let sortedText = "";
    let unsortedTextArray = unsortedText.split("");
    let sortedTextArray = unsortedTextArray.sort();
    for (index = 0 ; index<sortedTextArray.length; index++){
        sortedText = sortedText + sortedTextArray[index];
    }
    return sortedText;
}

function isAnagram (text1, text2){
    if (text1 === text2){
        console.log("The given texts are ANAGRAM");
    } else {
        console.log("The given texts are NOT ANAGRAM");
    }
}

let statement = "fly me to the moon along with saturn";
let text1 = "silent";
let text2 = "listen";
getLastWordLength(statement);
isAnagram(sortGivenText(text1), sortGivenText(text2));