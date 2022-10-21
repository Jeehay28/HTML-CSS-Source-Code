// document.addEventListener("click", () => {
//     let number = Math.floor(Math.random() * 5 + 1);
//     console.log(number);
// });

function changeBg () {
    let number = Math.floor(Math.random() * 5 + 1);
    // console.log(number);
    document.body.style.backgroundImage = `url(images/bg-${number}.jpg)`;
}

document.onload = changeBg();