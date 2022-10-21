const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
const day = today.getDay();

let resultDay = ""; // Mon, Tue... 
switch(day) {
    case 0 :
        resultDay = "Sunday";
        break;
    case 1:
        resultDay = "Monday";
        break;        
    case 2 :
        resultDay = "Tuesday";
        break;
    case 3:
        resultDay = "Wednesday";
        break;
    case 4 :
        resultDay = "Thursday";
        break;
    case 5:
        resultDay = "Friday";
        break;
    case 6 :
        resultDay = "Saturday";
       break;
};

const displayDate = document.querySelector("#today");
displayDate.innerText = `${year}-${month}-${date}, ${resultDay}`;


let clock = () => {
    const current = new Date();
    let hour = current.getHours();
    let min = current.getMinutes();
    let sec = current.getSeconds();
    
    let period = "AM";
    
    if (hour > 12) {
        period= "PM";
        hour = hour - 12;
    };
    
    const displayTime = document.querySelector("#clock");
    displayTime.innerText = `${period} ${hour}:${min}:${sec}`;

};

setInterval(clock, 1000);











