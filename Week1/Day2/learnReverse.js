let course = "playwright"
let reverse = "";

for(index1 = course.length-1; index1 >=0 ; index1--) {
    reverse = reverse+(course.charAt(index1));
}
console.log(reverse);