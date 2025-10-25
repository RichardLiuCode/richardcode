window.onload = function () {
    document.getElementById("githubLink").innerText = "Github Link"
    document.getElementById("PROJECTSTITLE").innerText = "All Public Projects";

    fetch("https://api.github.com/users/RichardLiucode").then(function (Response) {
        return Response.json()
    }).then(function (data) {
        console.log(data);
        var link = document.createElement('link');
        link.rel = 'icon';
        link.href = data.avatar_url;
        link.alt = "Richard's icon"
        document.head.appendChild(link)
        document.getElementById("titleDisplay").innerHTML =

            "<img src='" + data.avatar_url + "' alt='icon' style='width:40px;height:40px;border-radius:60px'>" +
            "<h1 style='color:white;text-align:center'>" +
            data.name +
            "</h1>";
        document.getElementById("dataDisplay").innerHTML =

            "<p>" + data.bio + "</p>" +
            "<p>" + data.public_repos + " projects" + "</p>" +
            "<p>" + "Address: " + data.location + "</p>" +
            "<p>" + "Username: " + data.login + "</p>";
        document.getElementById("githubLink").href = data.html_url

    })
    fetch("https://api.github.com/users/richardliucode/repos")
        .then(function (response) {
            return response.json()
        }).then(async function (data) {
            console.log(data);
            var projectsList = [];
            var ProjectsListContainer = document.createElement("ol")
            for (var i = 0; i < data.length; i = i + 1) {
                if (data[i].has_pages) {
                    var outerList = document.createElement("li");
                    outerList.id = "outerList"
                    projectsList.push(data[i].name);
                    var details = document.createElement("details");
                    details.style = "background-color:white;padding:5px;margin-bottom:10px;border-radius:4px;";
                    details.open = false;
                    var ItemTitle = document.createElement("summary")
                    ItemTitle.innerHTML = data[i].name;

                    details.appendChild(ItemTitle);

                    projectContent = document.createElement("div");
                    projectContent.style.color = "blue"
                    projectContent.innerHTML =
                        "<hr class='separate'>" +
                        "<div style='display:flex;justify-content:left'>" +
                        //----------------
                        "<div>" +
                        "<p>" + "Description: " + (data[i].description || "no description") + "</p>" +
                        "<p>" + "Language: " + (data[i].language || "--") + "</p>" +
                        "<p>" + "Project view URL: " + getViewURL(data[i].owner.login, data[i].name) +
                        "<p>" + "Code URL: <a href='" + data[i].html_url + "' target='_blank' >" + data[i].html_url + "</a>" + "</p>" +
                        "<p>" + "Created date: " + formatDate(data[i].created_at) + "</p>" +
                        "<p>" + "Last update: " + formatDate(data[i].updated_at) + "</p>" +
                        "</div>"

                    details.appendChild(projectContent);
                    outerList.appendChild(details);
                    ProjectsListContainer.appendChild(outerList);
                }
            }

            ProjectsDisplay.appendChild(ProjectsListContainer)


        });
    //load the iframe slowly
}

function formatDate(input) {
    return new Date(input);
}
function getViewURL(user, project) {
    return "<a href='" + "https://" + user + ".github.io/" + project + "' target='_blank'>" + "https://" + user + ".github.io/" + project + "</a>";
}
function getRawViewURL(user, project) {
    return "https://" + user + ".github.io/" + project;
}



document.getElementById("shareSite").addEventListener("click", function () {
    navigator.share({ url: window.location.href })
});
document.getElementById("searchBing").addEventListener("click", function () {
    document.getElementById("searchEngineResult").src = "https://bing.com/search?q=GitHub:RichardLiuCode";
});


