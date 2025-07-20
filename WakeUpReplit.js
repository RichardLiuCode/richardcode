window.onload = function () {
    fetch("https://573f616c-2f33-4a25-8dd3-eab903401ca9-00-15qkzj0ppjof8.spock.replit.dev/calc?q=6")
        .then(function (responde) {
            console.log("✅ Replit Server for Factorial Calculator App is running");
        })
        .catch(function (error) {
            throw new Error("🚫 Replit Server for Factorial Calculator App might be in sleep mode or stopped running");
        })
}
