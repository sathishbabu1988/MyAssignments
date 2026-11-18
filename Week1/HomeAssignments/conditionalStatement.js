function launchBrowser (browserName){
    if (browserName === "Chrome" || browserName === "chrome"){
        console.log("The browser name is Chrome");
    } else if (browserName === "Firefox" || browserName === "firefox"){
        console.log("The browser name is Firefox");
    } else {
        console.log("Unknown browser");
    }
}

function runTests (testType){
    switch (testType) {
        case "smoke" :
            console.log("Running Smoke Tests");
            break;
        case "sanity" :
            console.log("Running Sanity Tests");
            break;            
        case "regression" :
            console.log("Running Regression Tests");
            break;
        default :
            console.log("Unknown test type");
    }
}

let browserName = "Firefox";
let testType = "regression";
launchBrowser(browserName);
runTests(testType);