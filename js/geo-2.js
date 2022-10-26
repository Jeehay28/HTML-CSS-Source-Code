const button = document.querySelector("#getLocation");

button.addEventListener("click", () => {
  let watchID = navigator.geolocation.getCurrentPosition(
    showPosition,
    errorPostion
  );
  setTimeout(function () {
    navigator.geolocation.clearWatch(watchID);
  }, 300000);
});

function showPosition(position) {
  document.querySelector("#lat").value = position.coords.latitude;
  document.querySelector("#lng").value = position.coords.longitude;
}

function errorPostion() {
  alert(error.message);
}
