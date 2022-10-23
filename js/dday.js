const anniversary = document.querySelector("#anniversary");
const enter = document.querySelector("#enter");
const item = document.createElement("span");
const anniDate = document.querySelector(".anniDate");
// let firstDay = new Date("2022-05-09");

enter.addEventListener("click", (event) => {
    event.preventDefault();
    item.innerHTML = `since ${anniversary.value}!`
    let firstDay = new Date(`${anniversary.value}`);
    console.log(firstDay);
    anniDate.appendChild(item);

    let now = new Date ();
    let toNow = now.getTime();
    let toFirst = firstDay.getTime();
    let passedTime = toNow - toFirst;

    console.log(Math.round(passedTime / (1000*60*60*24)));

    // Math.round()
    const accent = document.querySelector(".accent");
    accent.innerText = `💗 for ${Math.round(passedTime / (1000*60*60*24))} days 💗`;

    function calcDate(days) {
        let future = toFirst + (days * 1000 * 60 * 60* 24);
        let someday = new Date(future);
        let fYear = someday.getFullYear();
        let fMonth = someday.getMonth() + 1;
        let fDate = someday.getDate();
    
        let result =  document.querySelector(`#date${days}`);
        result.innerText = `${fDate}/${fMonth}/${fYear}`;
}

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);
calcDate(700);
calcDate(1000);
});

