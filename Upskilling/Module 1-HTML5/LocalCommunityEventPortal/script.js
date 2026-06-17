function validatePhone() {
    let phone =
        document.getElementById("phone").value;

    if (phone.length != 10) {
        alert("Enter valid phone number");
    }
}

function showFee() {
    let event =
        document.getElementById("eventType").value;

    if (event == "Music")
        document.getElementById("fee").innerHTML =
            "Fee : ₹100";

    else if (event == "Sports")
        document.getElementById("fee").innerHTML =
            "Fee : ₹150";

    else if (event == "Art")
        document.getElementById("fee").innerHTML =
            "Fee : ₹200";

    localStorage.setItem("event", event);
}

window.onload = function () {
    let data = localStorage.getItem("event");

    if (data) {
        document.getElementById("eventType").value =
            data;
        showFee();
    }
};

function submitForm() {
    document.getElementById("result").value =
        "Registration Successful";
}

function enlarge(img) {
    img.width = 350;
}

function countChars() {
    let count =
        document.getElementById("feedback").value.length;

    document.getElementById("count").innerHTML =
        "Characters : " + count;
}

function clearData() {
    localStorage.clear();
    sessionStorage.clear();
    alert("Preferences Cleared");
}

function findLocation() {
    navigator.geolocation.getCurrentPosition(
        success,
        error,
        {
            enableHighAccuracy: true,
            timeout: 5000
        }
    );
}

function success(position) {
    document.getElementById("location").innerHTML =
        "Latitude : " +
        position.coords.latitude +
        "<br>Longitude : " +
        position.coords.longitude;
}

function error(err) {
    alert(err.message);
}

function videoReady() {
    document.getElementById("videoMsg").innerHTML =
        "Video ready to play";
}

window.onbeforeunload = function () {
    return "Are you sure you want to leave?";
};