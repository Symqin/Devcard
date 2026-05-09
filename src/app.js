import { renderLanding } from './pages/landing.js';
import { renderMain } from './pages/main.js';

const appContainer = document.getElementById('app');

const navigate = (page) => {
  appContainer.innerHTML = ''; // clear dom
  
  if (page === 'landing') {
    renderLanding(appContainer, navigate);
  } else if (page === 'main') {
    renderMain(appContainer, navigate);
  }
};

// jalankan app
document.addEventListener('DOMContentLoaded', () => {
  navigate('landing');
});