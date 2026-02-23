window.onload = function () {
    document.getElementById("githubLink").innerText = "Github Link";
    document.getElementById("PROJECTSTITLE").innerText = "All Projects";

    fetch("https://api.github.com/users/RichardLiucode").then(function (Response) {
        return Response.json();
    }).then(function (data) {
        var link = document.createElement('link');
        link.rel = 'icon';
        link.href = data.avatar_url;
        link.alt = "Richard's icon";
        document.head.appendChild(link);
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
        document.getElementById("githubLink").href = data.html_url;

    });
    document.getElementById("shareSite").addEventListener("click", function () {
        navigator.share({ url: window.location.href });
    });
    document.getElementById("searchBar").addEventListener("input", function () {
        const keyWord = document.getElementById("searchBar").value;
        const ProjectsList = document.getElementById("ProjectsList");
        const allProjects = ProjectsList.getElementsByTagName("tr");
        for (let i = 1; i < allProjects.length; i = i + 1) {
            let allTDChildTag = allProjects[i];
            let AllTDs;
            let ProjectName = "";
            if (allTDChildTag.querySelector("td")) {
                AllTDs = allTDChildTag.querySelector("td");
                ProjectName = AllTDs.innerText;
            }
            if (ProjectName.toLowerCase().includes(keyWord.toLowerCase())) {
                allProjects[i].style.display = "revert";
            } else {
                allProjects[i].style.display = "none";
            }
        }

    });

};


