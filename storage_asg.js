// Initialize scores from storage

let localScore = localStorage.getItem('localScore') ? parseInt(localStorage.getItem('localScore')) : 0;
let sessionScore = sessionStorage.getItem('sessionScore') ? parseInt(sessionStorage.getItem('sessionScore')) : 0;

// Display initial scores
document.getElementById('localScore').textContent = localScore;
document.getElementById('sessionScore').textContent = sessionScore;

// Function to increment scores
function incrementScores() {
    // Increment scores
    localScore++;
    sessionScore++;

    // Update storage
    localStorage.setItem('localScore', localScore);
    sessionStorage.setItem('sessionScore', sessionScore);

    // Update displayed scores
    document.getElementById('localScore').textContent = localScore;
    document.getElementById('sessionScore').textContent = sessionScore;
}