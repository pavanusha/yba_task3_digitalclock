function updateClock() {
  const clockElement = document.getElementById('clock');
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

function toggleDayNightMode() {
  document.body.classList.toggle('day-mode');
}

document.getElementById('toggleButton').addEventListener('click', toggleDayNightMode);
updateClock();
setInterval(updateClock, 1000);
