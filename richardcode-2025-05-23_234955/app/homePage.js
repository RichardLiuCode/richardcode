document.getElementById("viewCode").addEventListener("click", function () {
  window.open("https://glitch.com/edit/#!/richardcode");
});
document.getElementById("share").addEventListener("click", function () {
  navigator.share({
    title: document.title,
    text: "Richard's code",
    url: window.location.href,
  });
});
var isShowSideBar = 0;
document.getElementById("sideBar").style.display = "none";
document.getElementById("showSideBar").addEventListener("click", function () {
  if (isShowSideBar == 0) {
    isShowSideBar = 1;
    document.getElementById("sideBar").style.display = "revert";

    document.getElementById("showSideBar").innerHTML = "Hide side-bar";
  } else {
    isShowSideBar = 0;
    document.getElementById("sideBar").style.display = "none";
    document.getElementById("showSideBar").innerHTML = "Show side-bar";
  }
});
