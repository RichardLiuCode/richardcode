document.getElementById("viewCode").addEventListener("click", function () {
  window.open("https://github.com/RichardLiuCode/richardcode");
});
document.getElementById("share").addEventListener("click", function () {
  navigator.share({
    title: document.title,
    text: "Richard's code",
    url: window.location.href,
  });
});
var isShowSideBar = 1;
document.getElementById("sideBar").style.display = "revert";
document.getElementById("showSideBar").addEventListener("click", function () {
  if (isShowSideBar == 0) {
    isShowSideBar = 1;
    document.getElementById("sideBar").style.width = "250px"
    document.getElementById("showSideBar").innerHTML = "Hide side-bar";
    setTimeout(function () {
      let sideBarElements = document.getElementById("sideBar").querySelectorAll("button,hr,div,p,iframe");
      for (let i = 0; i < sideBarElements.length; i = i + 1) {
        sideBarElements[i].style.display = "revert";
        document.getElementById("sideBar").style.width = "250px"
      }
    }, 1100);
  } else {
    isShowSideBar = 0;
    document.getElementById("sideBar").style.width = "0px";
    let sideBarElements = document.getElementById("sideBar").querySelectorAll("button,hr,div,p,iframe");
    for (let i = 0; i < sideBarElements.length; i = i + 1) {
      sideBarElements[i].style.display = "none";
    }
    document.getElementById("showSideBar").innerHTML = "Show side-bar";
  }
});
