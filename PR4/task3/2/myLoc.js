document.addEventListener('DOMContentLoaded', getMyLocation)

function getMyLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayLocation)
    } else {
        alert("Oops, no geolocation support")
    }
}

function displayLocation(position) {
    let latitude = position.coords.latitude
    let longitude = position.coords.longitude
    let div = document.getElementById("location")
    div.innerHTML = `You are at Latitude: ${latitude}, Longitude: ${longitude}`
}
const ourCoords = {
    latitude: 48.943107671006615,
    longitude: 24.733820593378766
}
function displayError(error) {
    const errorTypes = {
        0: "Unknow error",
        1: "Permission denied by user",
        2: "Position is not availabel",
        3: "Request timed out"
    };
    const errorMessage = errorTypes[error.code];
    if (error.code == 0 || error.code == 2) {
        errorMessage = errorMessage + " " + error.message;
    }
    let div = document.getElementById("location");
    div.innerHTML = errorMessage;
}