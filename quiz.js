// Define the correct answers for the quiz
const correctAnswers = {
    q1: "correct_answer_1",
    // Add more correct answers as needed
};

// Function to calculate the user's score
function calculateScore(formData) {
    let score = 0;
    for (let key in formData) {
        if (correctAnswers[key] && formData[key].toLowerCase() === correctAnswers[key]) {
            score++;
        }
    }
    return score;
}

// Function to handle quiz submission
function handleQuizSubmission(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const score = calculateScore(formData);
    
    // Redirect to the score page and pass the score as a query parameter
    window.location.href = `score.html?score=${score}`;
}

// Attach event listener to the form submission
document.getElementById("quizForm").addEventListener("submit", handleQuizSubmission);
