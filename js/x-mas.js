let now = new Date();
        let xmas = new Date("2022-12-25");

        let toNow = now.getTime();
        let toXmas = xmas.getTime();
        
        let days = toXmas - toNow;
        
        let dday = document.querySelector(".dday");
        dday.innerText = `${Math.ceil(days / (1000*60*60*24))} days`;