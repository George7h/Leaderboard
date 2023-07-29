import { fetchScores, addNewScore } from './api_handling.js';

export const scoreList = async () => {
  const scoreUl = document.querySelector('.scorelist');

  // Fetch data from the API to get the actual scores
  const data = await fetchScores();

  scoreUl.innerHTML = ''; // Clear existing list items
  data.result.forEach((scoreData) => {
    const li = document.createElement('li');
    li.textContent = `${scoreData.user} ${scoreData.score}`;
    scoreUl.appendChild(li);
  });
};

export const addScore = async () => {
  const userName = document.getElementById('YourName').value;
  const userScore = parseInt(document.getElementById('YourScore').value, 10);

  // Prepare data for the API request
  const data = {
    user: userName,
    score: userScore,
  };

  // Send data to the API
  await addNewScore(data);
};

export const refreshButtonListener = () => {
  const refreshButton = document.querySelector('.refresh');
  refreshButton.addEventListener('click', async () => {
    await scoreList(); // Fetch and display scores
  });
};

export const submitButtonListener = () => {
  const submitButton = document.querySelector('#submit');
  submitButton.addEventListener('click', async () => {
    await addScore();
  });
};
