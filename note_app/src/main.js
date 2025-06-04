import './style.css';
import { initializeApp } from './app.js';

const appRoot = document.querySelector('#app');

if (appRoot) {
  initializeApp(appRoot);
} else {
  console.error('Failed to find the #app element in the DOM.');
}
