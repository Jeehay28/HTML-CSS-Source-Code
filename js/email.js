const userEmail = document.querySelector("#userEmail");
const button = document.querySelector("button");
const result = document.querySelector("#result");

// button.addEventListener("click", () => {
//     let userID;
//     let domain;

//     if (userEmail.value !== " ") {
//         userID = userEmail.value.split("@")[0];
//         domain = userEmail.value.split("@")[1];
//         console.log(userID, domain);
//         userID = userID.substring(0,3);
//         result.innerText = `${userID}...@${domain}`;
//         userEmail.value = "";
//     }
// });

button.addEventListener("click", () => {
    let userID;
    let domain;

    if (userEmail.value !== " ") {
        userID = userEmail.value.split("@")[0];
        let half = Math.ceil(userID.length / 2);
        console.log(half);
        domain = userEmail.value.split("@")[1];
        userID = userID.slice(0, half);
        console.log(userID);
        result.innerText = `${userID}...@${domain}`;
        userEmail.value = "";
    }
});
