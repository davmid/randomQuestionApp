let persons = [];
let questions = [];
let pairs = [];

document.addEventListener("DOMContentLoaded", function() {
    fetchData();
});

function fetchData() {
    Promise.all([
        fetch('js/persons.json').then(response => response.json()),
        fetch('js/questions.json').then(response => response.json())
    ]).then(data => {
        persons = data[0];
        questions = data[1];
        shuffleArray(questions);
    }).catch(error => console.error('Error loading data:', error));
}

function drawQuestion() {
    if (persons.length === 0 || questions.length === 0) {
        alert("No more persons available.");
        return;
    }

    let person = persons.pop();
    let question = questions.pop();

    const resultDiv = document.createElement("div");
    resultDiv.className = "question-result";
    resultDiv.innerHTML = `<span>${person}</span><span>${question}</span>`;
    document.getElementById("results-container").appendChild(resultDiv);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
