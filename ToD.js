function updateDay() {
    let today = new Date();
    let day = today.getDay();
    let dayList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday ",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  document.getElementById("today").innerText = dayList[day];
}

function displayTime() {
    let time = new Date();
    let hour = time.getHours();
    let minutes = time.getMinutes();

    hour = hour < 10 ? "0" + hour : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    let clock = hour + ":" + minutes;

    document.getElementById("time").innerText = clock;
}

function displayDate() {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let currentDate = year + " / " + month + " / " +day;

    document.getElementById("date").innerText = currentDate;
}

  // Updates time
setInterval(displayTime, 1000)

displayDate();
updateDay();