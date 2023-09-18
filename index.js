// Write your code in this file!
const currentUser = 'Irene Annah'; // index.js

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

const excitedWelcomeMessage = `WELCOME TO FLATBOOK, ${currentUser.toUpperCase()}!`;

module.exports = {
  welcomeMessage,
  excitedWelcomeMessage,
};

const I = currentUser.charAt(0);
const shortGreeting = "Welcome, ${I}!" ;

module.exports = {
  welcomeMessage,
  excitedWelcomeMessage,
  shortGreeting,
};

