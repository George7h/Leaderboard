import './index.css';
import {
  scoreList, refreshButtonListener, submitButtonListener,
} from './modules/leaderboard.js';

const init = () => {
  // Attach event listeners
  refreshButtonListener();
  submitButtonListener();

  // Initial call to load scores when the page is first loaded
  scoreList();
};

init();
