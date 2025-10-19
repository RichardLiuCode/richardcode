document.getElementById("searchButton").addEventListener("click", function () {
    if (document.getElementById("searchInput").value != "") {
        search()
    }
})
window.onload = function () {
    if (window.location.search) {
        var urlInput = new URLSearchParams(window.location.search);
        var urlQ = urlInput.get("q");
        if (urlQ) {
            if (urlQ == "//gruel//"){
                window.open("https://richardliucode.github.io/richardcode/hidden/please.txt");
            } else {
                document.getElementById("searchInput").value = urlQ;
                search();
            }
        }
    }
}
function search() {
    document.title = "Search: " + document.getElementById("searchInput").value
    console.clear()
    fetch("https://richardliucode.github.io/richardcode/indexs/sidebarindex.html?t=" + new Date().getTime()).then(function (response) {
        return response.text()
    }).then(function (content) {
        document.getElementById("resultDisplay").innerHTML = "";
        var data;
        data = content.split("<!--%JSON%--|");
        data = data[1];
        data = data.replace("|||-->", "");
        data = JSON.parse(data);
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            var dataKeyWords = data[i].keywords
            for (var j = 0; j < dataKeyWords.length; j++) {
                console.log(data[i].keywords[j].toLowerCase());
                if (data[i].keywords[j].toLowerCase().includes(document.getElementById("searchInput").value.toLowerCase())) {
                    console.log("|| result match: " + data[i].title);
                    var resultDisplay = document.createElement("div");
                    resultDisplay.className = "frame"
                    resultDisplay.innerHTML =
                        "<h1 style='color:black'>" + data[i].title + "</h1>" +
                        "<a href='" + data[i].url + "' target='_blank' >" + data[i].url + "</a>"
                    var enter = document.createElement("br")
                    if (document.getElementById("resultDisplay").innerText.includes(data[i].url)) {
                        console.warn("result already display");
                    } else {
                        document.getElementById("resultDisplay").appendChild(enter);
                        document.getElementById("resultDisplay").appendChild(resultDisplay);
                    }

                }
            }
        }
        var enter = document.createElement("br")
        document.getElementById("resultDisplay").appendChild(enter);
    })
}
