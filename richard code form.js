

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDUEtIxfIU6vDQzQJXospI5maAQMmxgY6g",
    authDomain: "my-coding-feedback.firebaseapp.com",
    databaseURL: "https://my-coding-feedback-default-rtdb.firebaseio.com",
    projectId: "my-coding-feedback",
    storageBucket: "my-coding-feedback.firebasestorage.app",
    messagingSenderId: "1082139342258",
    appId: "1:1082139342258:web:e9d104e5afc7fe3eb960ab",
    measurementId: "G-158XZGNT07"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

var database = firebase.database()

document.getElementById("submitButton").addEventListener("click", function () {
    console.log("submit clicked");
    if (document.getElementById("nameInput").value == "" || document.getElementById("formContent").value == "") {
        document.getElementById("status").innerText = "Please fill in all the things before submit";
        setTimeout(function () {
            document.getElementById("status").innerText = "";
        },3000)
    } else {
        var data = {
            name: document.getElementById("nameInput").value,
            content: document.getElementById("formContent").value,
            time: new Date().toUTCString()
        }
        database.ref("UserFeedbacks").push(data).then(function () {
            document.getElementById("status").innerText = "Submitted";
            localStorage.removeItem("input");
            localStorage.removeItem("feedbackNameInTheMainWebsite");
            document.getElementById("nameInput").value = ""
            document.getElementById("formContent").value = ""
            setTimeout(function () {
                document.getElementById("status").innerText = "";
            },3000)
        })
    }
})

window.onload = function () {
    document.getElementById("formContent").value = localStorage.getItem("input");
    document.getElementById("nameInput").value = localStorage.getItem("feedbackNameInTheMainWebsite");
}
document.getElementById("formContent").addEventListener("input", function () {
    localStorage.setItem("input", document.getElementById("formContent").value);
    console.log("saved")
});
//
document.getElementById("nameInput").addEventListener("input", function () {
    localStorage.setItem("feedbackNameInTheMainWebsite", document.getElementById("nameInput").value);
    console.log("saved name");
});
