function getNumberType (number) {
    if (number < 0) {
        console.log("The number is Negative");
    } else if (number > 0) {
        console.log("The number is Positive");
    } else if (number === 0) {
        console.log("The number is neither positive not negative, its Zero[0]");
    }
}

let number = -45;
getNumberType(number);
