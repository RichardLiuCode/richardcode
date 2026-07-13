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
document.getElementById("closeProjectPreviewBtn").addEventListener("click", function () {
    document.getElementById("projectPreviewPopup").style.transform = "scale(0)";
    document.getElementById("projectPreviewFrame").src = "";
});
window.onload = function () {
    document.getElementById("projectPreviewPopup").style.display = "block";
    const allProjectsLink = document.getElementById("All-Projects").querySelectorAll("a");
    for (let i = 0; i < allProjectsLink.length; i++) {
        const project = allProjectsLink[i];
        if (project.getAttribute("href")) {
            const projectURL = project.getAttribute("href").toString();
            if (projectURL.includes("/applab/")) {
                project.addEventListener("click", function (e) {
                    e.preventDefault();
                    document.getElementById("projectPreviewFrame").src = `${projectURL}/embed`;
                    document.getElementById("projectPreviewPopup").style.transform = "scale(1)";
                });
            }
        }
    }
};
document.getElementById("HomeBtn").addEventListener("click", function () {
    window.location.href = "index.html";
});