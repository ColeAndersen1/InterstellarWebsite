document.addEventListener('DOMContentLoaded', function () {
  // Set the target date and time (October 22, 2024 at 2:00 PM Pacific Time)
  var targetDate = new Date('October 22, 2024 14:00:00 GMT-0700');

  function updateCountdown() {
    var currentDate = new Date();
    var timeDifference = targetDate - currentDate;

    if (timeDifference > 0) {
      var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      // Display the countdown in the format Days:Hours:Minutes:Seconds
      document.getElementById('countdown').innerHTML = pad(days, 3) + ' : ' + pad(hours, 2) + ' : ' + pad(minutes, 2) + ' : ' + pad(seconds, 2);
    } else {
      // Display a message when the countdown reaches zero
      document.getElementById('countdown').innerHTML = 'The wait is over!';
    }
  }

  // Update the countdown every second
  setInterval(updateCountdown, 1000);

  // Initial call to set the countdown when the page loads
  updateCountdown();

  // Function to pad numbers with leading zeros
  function pad(number, length) {
    return ('000' + number).slice(-length);
  }
});
