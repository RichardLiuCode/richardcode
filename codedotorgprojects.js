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