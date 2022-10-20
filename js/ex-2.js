const bttn = document.querySelector("#bttn");
const notiBox = document.querySelector("#noti-box");

bttn.addEventListener("click", () => {
    let noti = document.createElement("div");
    noti.innerText = "Notifications will show up here.";
    noti.classList.add("noti");
    notiBox.appendChild(noti);

    setTimeout(() => {
        noti.remove();
    }, 3000)
});

