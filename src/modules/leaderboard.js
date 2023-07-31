import { fetchScores, addNewScore } from './api_handling.js';

export const scoreList = async () => {
  const scoreUl = document.querySelector('.scorelist');

  // Fetch data from the API to get the actual scores
  const data = await fetchScores();
  // Sort the scores from high to low
  const sortedScores = data.result.sort((a, b) => b.score - a.score);

  scoreUl.innerHTML = ''; // Clear existing list items
  sortedScores.forEach((scoreData) => {
    const li = document.createElement('li');
    li.textContent = `${scoreData.user} ${scoreData.score}`;
    scoreUl.appendChild(li);
  });
};

export const addScore = async () => {
  const userNameInput = document.getElementById('YourName');
  const userScoreInput = document.getElementById('YourScore');

  const userName = userNameInput.value;
  const userScore = parseInt(userScoreInput.value, 10);

  // Get the elements for displaying failure messages or create them if they don't exist
  let nameError = document.getElementById('name-error');
  if (!nameError) {
    nameError = document.createElement('div');
    nameError.id = 'name-error';
    userNameInput.parentNode.insertBefore(nameError, userNameInput);
  }

  let scoreError = document.getElementById('score-error');
  if (!scoreError) {
    scoreError = document.createElement('div');
    scoreError.id = 'score-error';
    userScoreInput.parentNode.insertBefore(scoreError, userScoreInput);
  }

  // Reset previous failure messages
  nameError.textContent = '';
  scoreError.textContent = '';

  let isValid = true;

  // Check if the name is entered
  if (!userName) {
    nameError.textContent = 'Please enter your name.';
    isValid = false;
  }

  // Check if the score is entered and is a valid positive number
  if (Number.isNaN(userScore) || userScore <= 0) {
    scoreError.textContent = 'Please enter a score.';
    isValid = false;
  }

  // If any validation fails, exit the function
  if (!isValid) {
    return;
  }

  // Prepare data for the API request
  const data = {
    user: userName,
    score: userScore,
  };

  try {
    // Send data to the API
    const result = await addNewScore(data);

    // Check if the score was successfully recorded
    if (result.result === 'Leaderboard score created correctly.') {
      // Display the success message
      const successMessage = document.querySelector('.success-message');
      successMessage.textContent = 'Score recorded';
      successMessage.style.display = 'block';

      // Clear the input fields after successful submission
      userNameInput.value = '';
      userScoreInput.value = '';

      // Wait for 3 seconds and then hide the success message
      setTimeout(() => {
        successMessage.style.display = 'none';
      }, 3000); // 3 seconds
    }
  } catch (error) {
    // console.error('Error recording score:', error);
  }
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
