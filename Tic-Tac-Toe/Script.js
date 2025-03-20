let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X"; // The human player starts with X
let gameOver = false;
let isPlayerTurn = true;  // Variable to control the player's turn

const cells = document.querySelectorAll(".cell");
const statusDisplay = document.getElementById("status");
const replayButton = document.getElementById("replay-btn");
const winSound = document.getElementById("win-sound");
const loseSound = document.getElementById("lose-sound");

cells.forEach((cell, index) => {
  cell.addEventListener("click", () => handleCellClick(index));
});

function handleCellClick(index) {
  if (board[index] === "" && !gameOver && isPlayerTurn) {  // Check if it's the player's turn
    board[index] = currentPlayer;
    cells[index].textContent = currentPlayer;
    checkGameStatus();
    if (!gameOver && currentPlayer === "X") {
      isPlayerTurn = false;  // Disable player's turn
      currentPlayer = "O";
      setTimeout(aiMove, 1000);  // 1 second delay before AI moves
    }
  }
}

function checkGameStatus() {
  if (checkWinner("X")) {
    gameOver = true;
    statusDisplay.textContent = "Congratulations! You won!";
    winSound.play();
    replayButton.style.display = "block";  // Show replay button
    return;
  }
  if (checkWinner("O")) {
    gameOver = true;
    statusDisplay.textContent = "AI Won!";
    loseSound.play();
    replayButton.style.display = "block";  // Show replay button
    return;
  }
  if (board.every(cell => cell !== "")) {
    gameOver = true;
    statusDisplay.textContent = "Draw!";
    replayButton.style.display = "block";  // Show replay button
    return;
  }
}

function checkWinner(player) {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  return winPatterns.some(pattern => {
    return pattern.every(index => board[index] === player);
  });
}

function aiMove() {
  let move = findBestMove();
  board[move] = "O";
  cells[move].textContent = "O";
  checkGameStatus();
  currentPlayer = "X";
  isPlayerTurn = true;  // Reactivate player's turn
}

function findBestMove() {
  let move = findWinningMove("O");
  if (move !== -1) return move;

  move = findWinningMove("X");
  if (move !== -1) return move;

  if (Math.random() < 0.6) { // 60% chance for an easier move
    return getRandomMove();
  }

  return getRandomMove();
}

function findWinningMove(player) {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  for (let pattern of winPatterns) {
    let [a, b, c] = pattern;
    if (board[a] === player && board[b] === player && board[c] === "") return c;
    if (board[a] === player && board[c] === player && board[b] === "") return b;
    if (board[b] === player && board[c] === player && board[a] === "") return a;
  }
  return -1; // No winning move found
}

function getRandomMove() {
  let emptyCells = [];
  board.forEach((cell, index) => {
    if (cell === "") emptyCells.push(index);
  });

  return emptyCells[Math.floor(Math.random() * emptyCells.length)];
}

function replay() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameOver = false;
  isPlayerTurn = true;  // Reset player's turn
  cells.forEach(cell => cell.textContent = "");
  statusDisplay.textContent = "";
  replayButton.style.display = "none"; // Hide replay button
}

replayButton.style.display = "none";  // Hide replay button initially

// Create a starry background animation
function createStars() {
  const numberOfStars = 100; // Number of stars
  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 2 + 1}s`; // Random animation duration
    document.body.appendChild(star);
  }
}

createStars();  // Call function to create stars
