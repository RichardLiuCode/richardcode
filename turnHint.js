var UserAgentString = navigator.userAgent
window.onload = function () {
    console.log(UserAgentString)
    console.log("width: " + window.innerWidth + " height: " + window.innerHeight)
    if (UserAgentString.includes("iPhone") || UserAgentString.includes("Android")) {
        if (window.innerWidth < window.innerHeight) {
            document.getElementById("turnHint").style.display = "flex";
        } else {
            document.getElementById("turnHint").style.display = "none";
        }
    }
}
window.addEventListener("resize", function () {
    if (UserAgentString.includes("iPhone") || UserAgentString.includes("Android")) {
        if (window.innerWidth < window.innerHeight) {
            document.getElementById("turnHint").style.display = "flex";
        } else {
            document.getElementById("turnHint").style.display = "none";
        }
    }
})
