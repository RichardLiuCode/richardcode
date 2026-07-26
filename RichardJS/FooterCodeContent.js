var footerJS = {
    "footerElement": document.createElement("footer"),
    "styleTag": document.createElement("style"),
    "getHostPlatform": function () {
        if (window.location.href.includes(".github.io/")) {
            return "GitHub"
        } else if (window.location.href.includes(".onrender.com")) {
            return "Render"
        } else if (window.location.href.includes("https://codeprojects.org/projects")) {
            if (document.getElementById("codeprojects_pagefooter")) {
                footerJS.styleTag.innerHTML = "#codeprojects_pagefooter{display:none}"
                document.head.appendChild(footerJS.styleTag)
            }
            return "code.org"
        } else {
            return ""
        }
    },
    "hostByPlatformText": function () {
        if (footerJS.getHostPlatform() != "") {
            return "Website hosted on"
        } else {
            return "HTML / CSS / JS"
        }
    }
}
footerJS.footerElement.style = "position: fixed;background-color: aliceblue;bottom: 0;left: 0;width: 100vw;height: 35px;    font-family: arial;    display: flex;    justify-content: left;;    align-items: center; gap:10px;   user-select: none;cursor:pointer;"
footerJS.footerElement.innerHTML = "<p style=\"margin-left: 15px; \">© " + new Date().getFullYear() + " Richard Liu</p><p style=\"color:gray;\">|</p><p onmouseover=\"this.style.color = 'rgb(2, 97, 250)';this.style.textDecoration = 'underline';\" onmouseout=\"this.style.color = 'black';this.style.textDecoration = 'none';\" title=\"RichardLiuCode is my GitHub username, my personal website is on https://richardliucode.github.io, click here for more details\" onclick=\"if(confirm('This website will open a new window, click OK to continue.')){window.open('https://richardliucode.github.io/','_blank','width=1300,height=700,top=10,left=10')}\">RichardLiuCode</p><p style=\"color:gray;\">|</p><p style=\"margin-right: 18px;\" >" + footerJS.hostByPlatformText() + footerJS.getHostPlatform() + "</p>"
document.body.appendChild(footerJS.footerElement)