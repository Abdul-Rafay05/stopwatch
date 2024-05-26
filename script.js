let Second_section = document.getElementById("Second-section");
let Times_section = document.getElementById("Times-section");
let second = 0;
let time = 0;
let interval;

// clearInterval(interval);
function startbtn() {
    interval = setInterval(() => {
        starttime()
    }, 10);
}

function stopbtn() {
    clearInterval(interval);
}

function resetbtn() {
    second = "00";
    time = "00";
    Second_section.innerHTML = second
    Times_section.innerHTML = time
}

function starttime() {
    time++;
    if (time <= 9) {
        Times_section.innerHTML = "0" + time;
        // console.log(time);
    }
    if (time >= 10) {
        Times_section.innerHTML = time;
        // console.log(time);
    }
    if (time >= 99) {
        second++
        Second_section.innerHTML = "0" + second;
        // console.log(second);
        time = 0
        Times_section.innerHTML = "0" + time;
        // console.log(time);
    }
    if (second > 9) {
        Second_section.innerHTML = second;
    }
}