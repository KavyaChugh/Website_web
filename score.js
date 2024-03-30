// Function to parse query parameters from the URL
function parseQueryParameters() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('score');
}

// Function to display the user's score
function displayScore() {
    const score = parseQueryParameters();
    document.getElementById("userScore").textContent = `You scored ${score}/${Object.keys(correctAnswers).length}`;
}

// Function to display correct answers
function displayCorrectAnswers() {
    const answersList = document.getElementById("correctAnswers");
    for (let key in correctAnswers) {
        const listItem = document.createElement("li");
        listItem.textContent = `Question ${key.slice(1)}: ${correctAnswers[key]}`;
        answersList.appendChild(listItem);
    }
}

// Call functions to display score and correct answers when the page loads
window.onload = function() {
    displayScore();
    displayCorrectAnswers();
};
