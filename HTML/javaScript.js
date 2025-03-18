function dateFunction() {
    var dateVariable = document.getElementById("lastUpdated");
    var brandNewDate = new Date(document.lastModified);
    dateVariable.innerHTML = "Website was Last Updated: " + brandNewDate.toDateString();
}

function sendForm() {
    var userName = document.getElementById("customerName").value;
    if (
        userName == "Type your name here" || userName == "") {
        alert("Please enter your name");
        return;
    }

    var userEmail = document.getElementById("customerEmail").value;
    if (
        userEmail.includes("@") &&
        userEmail.includes(".")) { }
    else {
        alert("Not a valid email format");
        return;
    }

    var mailtoEmail = "mailto:hypothetical@example.com";

    window.location.href = mailtoEmail;

    document.getElementById("formDiv").innerHTML =
        "<h2>Thank you for completing the form!</h2>";
}