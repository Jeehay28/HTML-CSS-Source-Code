const title = document.querySelector("#title");
const author = document.querySelector("#author");
const save = document.querySelector("#save");
const bookList = document.querySelector("#bookList");
// const delButtons = document.querySelectorAll("#bookList li span");

// save.addEventListener("click", (event) => {
//     event.preventDefault();
//     let item = document.createElement("li");
//     console.log(title.value, author.value);
// });

save.addEventListener("click", (event) => {
    event.preventDefault();
    let item = document.createElement("li");
    // let textNode = `
    // ${title.value}-#{author.avlue} <span>삭제</span>
    // `
    // item.appendChild(textNode);

    item.innerHTML = `${title.value} - ${author.value} <span class="del">Delete</span>`;
    bookList.appendChild(item);
    title.value = "";
    author.value = "";

    const delButtons = document.querySelectorAll("#bookList .del");

for (let delButton of delButtons) {
    delButton.addEventListener("click", function() {
        this.parentNode.remove();
    });
}
});



