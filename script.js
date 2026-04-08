document.addEventListener("DOMContentLoaded", () => {
  const countdown = document.getElementById("countdown");
  const message = document.getElementById("message");

  if (!countdown) {
    console.error("Countdown element not found!");
    return;
  }

  // Using the ISO format (YYYY-MM-DD) is safer for all browsers
  const christmas = new Date("2026-12-25T00:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = christmas - now;

    // Logic for when the date is reached
    if (distance <= 0) {
      countdown.innerHTML = "🎄 Merry Christmas! 🎅";
      message.textContent = "Hope your holidays are merry and bright!";
      return;
    }

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the results in the time-box divs
    countdown.innerHTML = `
      <div class="time-box"><span>${days}</span><p>Days</p></div>
      <div class="time-box"><span>${hours}</span><p>Hours</p></div>
      <div class="time-box"><span>${minutes}</span><p>Minutes</p></div>
      <div class="time-box"><span>${seconds}</span><p>Seconds</p></div>
    `;

    message.textContent = `Only ${days} day${days === 1 ? "" : "s"} left until Christmas! 🎁`;
  }

  // Run immediately and then every second
  updateCountdown();
  setInterval(updateCountdown, 1000);
});
