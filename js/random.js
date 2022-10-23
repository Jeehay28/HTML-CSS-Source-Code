const raffle = document.querySelector("#raffle");

raffle.addEventListener("click", (event)=> {
    event.preventDefault();
    const total = document.querySelector("#total");
    const number = parseInt(total.value);
    // the number of participants
    const result = document.querySelector("#result");    
    let winner = Math.floor(Math.random() * number + 1);

    result.innerText = `Congratulations! 
                        You are a winner. 
                        - No. ${winner}`;
    result.classList.add("show");
});


