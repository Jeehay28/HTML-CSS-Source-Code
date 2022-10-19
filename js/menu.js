const button = document.querySelector("#bttn");
const nav = document.querySelector("#nav");


button.addEventListener("click", () => {
    nav.classList.toggle("active");
    button.classList.toggle("active");
});

