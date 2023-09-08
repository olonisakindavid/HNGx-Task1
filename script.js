const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function updateDateTime() {
  const currentTime = new Date();

  const currentDay = days[currentTime.getUTCDay()];
  document.querySelector(".day").textContent = currentDay;

  const hours = currentTime.getUTCHours().toString().padStart(2, "0");
  const minutes = currentTime.getUTCMinutes().toString().padStart(2, "0");
  const seconds = currentTime.getUTCSeconds().toString().padStart(2, "0");
  const milliseconds = currentTime
    .getUTCMilliseconds()
    .toString()
    .padStart(3, "0");
  const formattedTime = `${hours}:${minutes}:${seconds}.${milliseconds}`;

  document.querySelector(".utc-time").textContent = formattedTime;
}

// Call the function initially
updateDateTime();

// Set up an interval to update the time every 100 milliseconds
setInterval(updateDateTime, 100);
