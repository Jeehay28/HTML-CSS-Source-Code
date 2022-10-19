const pics = document.querySelectorAll(".pic");
//  6개

const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightboxImage");

// console.log(pics);
function showLightBox() {
    let bigLocation = this.getAttribute("data-src");
    lightboxImage.src = bigLocation;
    lightbox.style.display = "block";
}

for  (let i = 0; i < pics.length; i++) {
    pics[i].addEventListener("click", showLightBox);
}

lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});

