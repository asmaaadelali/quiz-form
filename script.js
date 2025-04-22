
let duration = 120;
const timerElement = document.getElementById("timer");

const countdown = setInterval(() => {
  let minutes = Math.floor(duration / 60);
  let seconds = duration % 60;

  timerElement.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  if (duration === 0) {
    clearInterval(countdown);
    document.getElementById("quizForm").submit();
  }

  duration--;
}, 1000);

document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("result").textContent = "تم إرسال إجابتك بنجاح ✅";
});
