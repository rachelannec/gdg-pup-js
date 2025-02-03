// app.js

// ========== DOM ELEMENTS ==========
// Grab the Start button element
let startButton = document.getElementById('startButton'); // using getElementById
let userChoiceDisplay = document.querySelector('#userChoice'); // using querySelector
let computerChoiceDisplay = document.getElementById('computerChoice'); // grab the computerChoice id
let resultDisplay = document.getElementById('result'); // grab the result id
let winsDisplay = document.getElementById('wins'); // grab the wins id
let lossesDisplay = document.getElementById('losses'); // grab the losses id
let tiesDisplay = document.getElementById('ties'); // grab the ties id

// ========== GAME STATE VARIABLES ==========
// Track the state of the game
let userChoice = ''; // Store the user's choice

// Track the score: wins, losses, and ties initialized to 0
let wins = 0;
let losses = 0; // initialize losses to 0
let ties = 0; // initialize ties to 0

// Available choices for the game
const choices = ['rock', 'paper', 'scissors'];

// ========== EVENT LISTENERS ==========
// add an event listener to rock button in your index.html
document.getElementById('rock').addEventListener('click', () => selectChoice('rock'));
// add an event listener to paper button in your index.html
document.getElementById('paper').addEventListener('click', () => selectChoice('paper'));
// add an event listener to scissors button in your index.html
document.getElementById('scissors').addEventListener('click', () => selectChoice('scissors'));
// add an event listener to the Start button and call the playGame function
startButton.addEventListener('click', playGame);
// add an event listener to the reset button and call the resetGame function
document.getElementById('resetButton').addEventListener('click', resetGame); // Added this line

// ========== FUNCTIONS ==========
/**
 * Updates the user's choice and enables the Start button.
 * This function has a parameter "choice"
 */
function selectChoice(choice) {
    // Update the user's choice with the selected choice
    userChoice = choice;

    // Update the user's choice display by adding an image of the choice to the userChoiceDisplay html element
    userChoiceDisplay.innerHTML = `<img src="./assets/images/icon-${choice}.png" alt="${choice}" class='choice--img'/>`;

    // Enable the Start button
    startButton.disabled = false;
}

/**
 * A function that generates a random choice for the computer.
 * This function returns a random choice from the choices array
 * Here's the randomizer: Math.floor(Math.random() * choices.length)
 **/
function getComputerChoice() {
    // Return a random choice from the 'choices' array
    const randomIndex = Math.floor(Math.random() * choices.length); // generate a random index
    const computerChoice = choices[randomIndex]; // get the choice using the index
    // Update the computer choice display
    computerChoiceDisplay.innerHTML = `<img src="./assets/images/icon-${computerChoice}.png" alt="${computerChoice}" class='choice--img'/>`;

    return computerChoice; // return the choice
}
// console.log(getComputerChoice());

/**
 * Determines the winner of the game.
 * This function has two parameters: userChoice and computerChoice
 * This function returns 'win', 'lose', or 'draw'
 */
function determineWinner(userChoice, computerChoice) {
    // Add logic to compare choices and return the result
    if (userChoice === computerChoice) {
        return 'draw'; // It's a tie
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')
    ) {
        return 'win'; // It's a win
    } else {
        return 'lose'; // It's a loss
    }
}

/**
 * Updates the score based on the result of the game.
 * This function has a parameter "result"
 */
function updateScore(result) {
    // Update the score based on the result
    if (result === 'win') {
        wins++; // increment wins by 1
        winsDisplay.textContent = wins; // update the winsDisplay with the new value
    } else if (result === 'lose') {
        losses++; // increment losses by 1
        lossesDisplay.textContent = losses; // update the lossesDisplay with the new value
    } else {
        ties++; // increment ties by 1
        tiesDisplay.textContent = ties; // update the tiesDisplay with the new value
    }
}

/**
 * Main game function triggered when the Start button is clicked.
 */
function playGame() {
    // Step 1: Get the computer's choice
    const computerChoice = getComputerChoice(); // call the computer choice function

    console.log(getComputerChoice());

    // Step 2: Compare the user's choice and the computer's choice
    const result = determineWinner(userChoice, computerChoice); // determine the winner (win, lose, draw)

    // Step 3: Display the result of the game (win, lose, draw)
    if (result === 'draw') {
        resultDisplay.textContent = 'It\'s a Draw!'; // Display draw message
    } else if (result === 'win') {
        resultDisplay.textContent = 'It\'s a Win!'; // Display win message
    } else {
        resultDisplay.textContent = 'It\'s a Loss!'; // Display loss message
    }

    // Step 4: Update the score
    updateScore(result);
}

/**
 * Resets the game to its initial state.
 */
function resetGame() {
    // Reset the user's choice
    userChoice = '';

    // Reset the userChoiceDisplay
    userChoiceDisplay.innerHTML = `<img src="./assets/images/icon-user.png" alt="user" class="choice--img">`;

    // Reset the computerChoiceDisplay
    computerChoiceDisplay.innerHTML = `<img src="./assets/images/icon-computer.png" alt="computer" class="choice--img">`;

    // Reset the resultDisplay to 'Choose your weapon!'
    resultDisplay.textContent = 'Choose your weapon!';

    // Reset the all score variables to 0
    wins = 0;
    losses = 0;
    ties = 0;

    // Update the score displays
    winsDisplay.textContent = wins;
    lossesDisplay.textContent = losses;
    tiesDisplay.textContent = ties;

    // Disable the Start button
    startButton.disabled = true;
}