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
            return "Powered by "
        } else {
            return "HTML / CSS / JS"
        }
    },
    "footerSecondElement": document.createElement("div"),
    "footerIn234": document.createElement("div"),
    "footerIn6783": document.createElement("div"),
    "innerElements": "null",
    "i": 0
}
footerJS.footerElement.style = "position: fixed;background-color: aliceblue;bottom: 0;left: 0;width: 100vw;height: 35px;    font-family: arial;    display: flex;    justify-content: left;;    align-items: center; gap:10px;   user-select: none;cursor:pointer;"
footerJS.footerElement.addEventListener("click", function () {
    footerJS.innerElements = footerJS.footerSecondElement.querySelectorAll("div,p,hr,br,h1,img,li");
    if (footerJS.footerSecondElement.style.height == "0px") {
        footerJS.footerSecondElement.style.height = "150px";
        setTimeout(() => {
            for (footerJS.i = 0; footerJS.i < footerJS.innerElements.length; footerJS.i++) {
                footerJS.innerElements[footerJS.i].style.display = "revert";
            }
            footerJS.footerSecondElement.style.height = "150px";
        }, 1005)

    } else {
        footerJS.footerSecondElement.style.height = "0px";
        for (footerJS.i = 0; footerJS.i < footerJS.innerElements.length; footerJS.i++) {
            footerJS.innerElements[footerJS.i].style.display = "none";
        }
    }
})
footerJS.footerElement.title = "Click here for more details"
footerJS.footerElement.innerHTML = "<p style=\"margin-left: 15px; \">© " + new Date().getFullYear() + " Richard Liu</p><p style=\"color:gray;\">|</p><p onmouseover=\"this.style.color = 'rgb(2, 97, 250)';this.style.textDecoration = 'underline';\" onmouseout=\"this.style.color = 'black';this.style.textDecoration = 'none';\" title=\"RichardLiuCode is my GitHub username, my personal website is on https://richardliucode.github.io, click here for more details\" onclick=\"if(confirm('This website will open a new window, click OK to continue.')){window.open('https://richardliucode.github.io/','_blank','width=1300,height=700,top=10,left=10')}\">RichardLiuCode</p><p style=\"color:gray;\">|</p><p style=\"margin-right: 18px;\" >" + footerJS.hostByPlatformText() + footerJS.getHostPlatform() + "</p>"
document.body.appendChild(footerJS.footerElement)
/* Add Second Footer Element */
footerJS.footerSecondElement.style = "transition:1s;font-family:arial;display:revert;background-color:aliceblue;width:100vw;height:0px;position:fixed;bottom:35px;left:0;"
document.body.appendChild(footerJS.footerSecondElement);
/* The inside Element Inside The footer*/
footerJS.footerIn234.style = "display:none;width:auto;height:50px;background-color:aliceblue;position:fixed;left:0;bottom:50px;text-align:left"
footerJS.footerIn234.innerHTML = "<ol><li>Richard's personal Wesite: <a href=\"https://richardliucode.github.io/richardcode\" style=\"text-decoration:none;text-align:left\" target=\"_blank\">https://richardliucode.github.io/richardcode</a>.</li><li> Richard's Youtube Channel: <a href=\"https://www.youtube.com/channel/UCuvJA2I2rsiTfEPHqllr_dQ\" style=\"text-decoration:none\"  target=\"_blank\">https://www.youtube.com/channel/UCuvJA2I2rsiTfEPHqllr_dQ</a></li></ol>"
footerJS.footerSecondElement.appendChild(footerJS.footerIn234)
/* The top Left element inside the footer*/
footerJS.footerIn6783.style = "display:none;width:660px;height:80px;background-color:aliceblue;position:fixed;left:20px;bottom:105px;";
footerJS.footerIn6783.innerHTML = "<h3 style=\"Display:flex;justigy-content:left;align-items:center;gap:10px;color:blue;user-select:none;text-align:left;\"><img src=\"https://richardliucode.github.io/richardcode/logo180px.png\" style=\"pointer-events:none;width:25px;border-radius:3px;\" alt=\"Richard's Logo\"> RichardLiuCode</h3><span style=\"text-align:left;background-color:yellow;padding:2px;\">This website is for personal use only, do not use for any commercial purpose!</span><hr>"
footerJS.footerSecondElement.appendChild(footerJS.footerIn6783)
/* Auto Hide the second footer */