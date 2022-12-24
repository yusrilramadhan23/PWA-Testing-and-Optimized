/* eslint-disable import/no-unresolved */
import 'regenerator-runtime';
import '../styles/main.css';
import swRegister from './utils/sw-register';
import App from './views/app';
import 'lazysizes';
// import a plugin
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  content: document.querySelector('#content'),
  main: document.querySelector('main'),
  menu: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
