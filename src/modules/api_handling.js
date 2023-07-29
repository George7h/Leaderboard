const gameId = 'fP8nbfmUckE8B4DDn5YC';
const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

export const fetchScores = async () => {
  const response = await fetch(`${baseURL}games/${gameId}/scores/`);
  const data = await response.json();
  return data;
};

export const addNewScore = async (scoreData) => {
  // Send data to the API
  const response = await fetch(`${baseURL}games/${gameId}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(scoreData),
  });

  const result = await response.json();
  return result;
};
