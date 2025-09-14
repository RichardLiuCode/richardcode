var footerJS = {
    "footerElement": document.createElement("footer"),
    "getHostPlatform": function () {
        if (window.location.href.includes(".github.io/")) {
            return "GitHub"
        } else if (window.location.href.includes(".onrender.com")) {
            return "Render"
        } else if (window.location.href.includes("https://codeprojects.org/projects")) {
            if (document.getElementById("codeprojects_pagefooter")) {
                document.getElementById("codeprojects_pagefooter").style.display = "none";
            }
            return "code.org"
        } else {
            return ""
        }
    },
    "hostByPlatformText": function () {
        if (footerJS.getHostPlatform() != "") {
            return "Host by "
        } else {
            return "HTML / CSS / JS"
        }
    }
}
footerJS.footerElement.style = "position: fixed;background-color: aliceblue;bottom: 0;left: 0;width: 100vw;height: 35px;    font-family: arial;    display: flex;    justify-content: space-between;    align-items: center;    user-select: none;"
footerJS.footerElement.addEventListener("mouseover", function () {
    footerJS.footerElement.style.backgroundColor = "rgba(223, 234, 245, 1)"
});
footerJS.footerElement.addEventListener("mouseout", function () {
    footerJS.footerElement.style.backgroundColor = "aliceblue"
})
footerJS.footerElement.innerHTML = "<p style=\"margin-left: 15px; \">© " + new Date().getFullYear() + " Richard Liu</p><p>RichardCode</p><p style=\"margin-right: 18px; \">" + footerJS.hostByPlatformText() + footerJS.getHostPlatform() + "</p>"
document.body.appendChild(footerJS.footerElement)