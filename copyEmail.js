document.getElementById("copyEmail").addEventListener("click",function(){
  console.log("Copy email button clicked");
  navigator.clipboard.writeText("ray.chen@highschoolofthearts.org")
})