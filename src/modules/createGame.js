// Function to create a new game and get the unique game ID
// async function createGame(name) {
//   const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
//   const data = { name };

//   try {
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     });

//     const result = await response.json();
//     return result.result;
//   } catch (error) {
//     console.error('Error creating game:', error);
//     return null;
//   }
// }

// const gameName = 'Leaderboardgh7Test2';
// createGame(gameName)
//   .then(gameId => {
//     if (gameId) {
//       console.log('Game created with ID:', gameId);
//     } else {
//       console.log('Failed to create game.');
//     }
//   });

// run with node createGame.js

// Leaderboardgh7Test
// ho1EXTRshBRr9YYQv72S

// I reset the list
// Leaderboardgh7Test2
// fP8nbfmUckE8B4DDn5YC

// 9sFIa9suxiYW1WEqzyyE