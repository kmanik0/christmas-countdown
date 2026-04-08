document.addEventListener("DOMContentLoaded", () => {
  const countdown = document.getElementById("countdown");
  const message = document.getElementById("message");

  if (!countdown) {
    console.error("Countdown element not found!");
    return;
  }

  const christmas = new Date("December 25, 2026 00:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = christmas - now;

    if (distance < 0) {
      countdown.innerHTML = "🎄 Merry Christmas! 🎅";
      message.textContent = "Hope your holidays are merry and bright!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (distance % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `
      <div class="time-box"><span>${days}</span><p>Days</p></div>
      <div class="time-box"><span>${hours}</span><p>Hours</p></div>
      <div class="time-box"><span>${minutes}</span><p>Minutes</p></div>
      <div class="time-box"><span>${seconds}</span><p>Seconds</p></div>
    `;

    message.textContent = `Only ${days} day${days === 1 ? "" : "s"} left until Christmas! 🎁`;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
});
