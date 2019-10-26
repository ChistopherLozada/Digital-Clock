// set varaible for dom class
const clock = document.querySelector('.clock');

const tick = () => {
    // set todays date
    const now = new Date();

    // get hours for todays date
    const h = now.getHours();


    // get minutes fo todays date
    const m = now.getMinutes();

    // get seconds of todays date
    const s = now.getSeconds();
    

    const html = `
        The time is <span>${h}</span> : <span>${m}</span> : <span>${s}</span>
    `
    clock.innerHTML = html
};

// set interval to call the new date
setInterval(tick, 1000);

