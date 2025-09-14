window.onload = function () {
    var footerJS = {
        "element": document.createElement("footer")
    }
    footerJS.element.innerHTML = "<p style=\"margin-left: 15px; \">© " + new Date().getFullYear() + " Richard Liu</p><p>RichardCode</p><p style=\"margin-right: 18px; \">Host by GitHub</p>"
    footerJS.element.setAttribute("style", "position: fixed;background-color: aliceblue;bottom: 0;left: 0;width: 100vw;height: 35px;    font-family: arial;    display: flex;    justify-content: space-between;    align-items: center;    user-select: none;")
    document.body.appendChild(footerJS.element)
}
