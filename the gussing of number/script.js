let randomNumber;
let attemptsLeft;

function startGame() {
  const level = document.getElementById("level").value;
  document.getElementById("message").textContent = "";
  document.getElementById("guess").value = "";

  if (level === "easy") {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    attemptsLeft = 5;
    document.getElementById("info").textContent =
      "Guess a number between 1 and 10";
  } else if (level === "medium") {
    randomNumber = Math.floor(Math.random() * 50) + 1;
    attemptsLeft = 4;
    document.getElementById("info").textContent =
      "Guess a number between 1 and 50";
  } else if (level === "hard") {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attemptsLeft = 3;
    document.getElementById("info").textContent =
      "Guess a number between 1 and 100";
  } else {
    return;
  }

  document.getElementById("attempts").textContent =
    "Attempts Left: " + attemptsLeft;
}

function checkGuess() {
  const userGuess = Number(document.getElementById("guess").value);

  if (!userGuess) {
    document.getElementById("message").textContent = "Please enter a number!";
    return;
  }

  if (userGuess === randomNumber) {
    document.getElementById("message").textContent =
      "🎉 Congratulations! You won!";
    document.getElementById("attempts").textContent = "";
    return;
  }

  attemptsLeft--;

  if (attemptsLeft === 0) {
    document.getElementById("message").textContent =
      "❌ Game Over! The number was " + randomNumber;
    document.getElementById("attempts").textContent = "";
    return;
  }

  if (userGuess > randomNumber) {
    document.getElementById("message").textContent = "📉 Too High!";
  } else {
    document.getElementById("message").textContent = "📈 Too Low!";
  }

  document.getElementById("attempts").textContent =
    "Attempts Left: " + attemptsLeft;
}
