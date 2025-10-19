document.getElementById("copyScriptURL").addEventListener("click", function () {
  var CopyScriptUrl = "https://richardcode.glitch.me/applab.js";
  navigator.clipboard.writeText(CopyScriptUrl);

  document.getElementById("scriptURLDisplay").select();
 console.log(navigator.clipboard.readText)
});
document.getElementById("button5").addEventListener("click", function () {
  var CopyScriptUrl = "https://richardcode.glitch.me/applab.js";
  navigator.clipboard.writeText("<script src='https://richardcode.glitch.me/applab.js'></script>");

  document.getElementById("scriptTagDisplay").select();
 console.log(navigator.clipboard.readText)
});
