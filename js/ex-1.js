const userName = document.querySelector("#username");
const major = document.querySelector("#major");
const buttton = document.querySelector("button");

buttton.addEventListener("click", (event) => {
    event.preventDefault(); 
    // Clicking on a "Submit" button, prevent it from submitting a form
    const tbody = document.querySelector("#attendant > tbody");
    let nameTd = document.createElement("td");
    let majorTd = document.createElement("td");
    let newTr = document.createElement("tr");
    nameTd.innerText = userName.value;
    majorTd.innerText = major.value;
    newTr.appendChild(nameTd);
    newTr.appendChild(majorTd);
    tbody.appendChild(newTr);

    userName.value = "";
    major.value="";
});


