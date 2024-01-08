// Set the date we're counting down to
var countDownDate = new Date("Jan 04, 2024 09:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  function prependZero(number) {
    if (number <= 9)
      if (number < 0) {
        return "00";
      } else {
        return "0" + number;
      }
    else return number;
  }

  days = prependZero(days);
  hours = prependZero(hours);
  minutes = prependZero(minutes);
  seconds = prependZero(seconds);

  // Display the result in the element with id="demo"

  document.getElementById("days1").innerHTML = days.toString().slice(0, 1);

  document.getElementById("days2").innerHTML = days.toString().slice(1, 2);

  document.getElementById("hours1").innerHTML = hours.toString().slice(0, 1);

  document.getElementById("hours2").innerHTML = hours.toString().slice(1, 2);

  document.getElementById("minutes1").innerHTML = minutes
    .toString()
    .slice(0, 1);
  document.getElementById("minutes2").innerHTML = minutes
    .toString()
    .slice(1, 2);

  document.getElementById("seconds1").innerHTML = seconds
    .toString()
    .slice(0, 1);
  document.getElementById("seconds2").innerHTML = seconds
    .toString()
    .slice(1, 2);

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
