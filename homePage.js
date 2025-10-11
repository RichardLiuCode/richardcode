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
let sideBarElements = document.getElementById("sideBar").querySelectorAll("button,hr,div,p,iframe");
document.getElementById("sideBar").style.display = "none";
document.getElementById("showSideBar").addEventListener("click", function () {
  let sideBarElements = document.getElementById("sideBar").querySelectorAll("button,hr,div,p,iframe");
  if (isShowSideBar == 0) {
    isShowSideBar = 1;
    document.getElementById("sideBar").style.width = "250px"

    setTimeout(function () {
      for (let i = 0; i < sideBarElements.length; i = i + 1) {
        sideBarElements[i].style.display = "revert";
        document.getElementById("sideBar").style.width = "250px"
      }
    }, 1100);
  } else {
    isShowSideBar = 0;
    document.getElementById("sideBar").style.width = "0px";
    for (let i = 0; i < sideBarElements.length; i = i + 1) {
      sideBarElements[i].style.display = "none";
    }

  }
});
isShowSideBar = 0;
document.getElementById("sideBar").style.width = "0px";
for (let i = 0; i < sideBarElements.length; i = i + 1) {
  sideBarElements[i].style.display = "none";
}

setTimeout(function () {
  document.getElementById("sideBar").style.display = "revert";
}, 1200)
