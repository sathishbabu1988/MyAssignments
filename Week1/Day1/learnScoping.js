const browserVersion = "chrome"
function getBrowserVersion(browser){
    if (browser = "chrome"){
        var browserVersion = "firefox";
        console.log("Inside the if block ==>", browserVersion);
    }
    console.log("Outside the block, inside the function ==> ", browserVersion); 
}
console.log("Outside the function ==> ", browserVersion);

getBrowserVersion("chrome")

