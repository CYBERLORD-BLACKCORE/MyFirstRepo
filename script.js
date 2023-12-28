// Generate a random number between 1 and 10
const secretNumber = Math.floor(Math.random() * 10) + 1;

// Function to check the user's guess
function checkGuess() {
    const userGuess = document.getElementById('userGuess').value;
    const message = document.getElementById('message');

    if (userGuess == secretNumber) {
        message.textContent = 'Congratulations! You guessed the correct number!';
        message.style.color = 'green';
    } else {
        message.textContent = `Sorry, the correct number was ${secretNumber}. Try again!`;
        message.style.color = 'red';
    }
}
