// static/js/about.js

// This function runs when the page finishes loading
window.onload = function() {
  // Find the paragraph with the id 'description'
  const desc = document.getElementById('description');

  // Append more text to the existing paragraph describing the app
  desc.textContent += ' Stay productive and never miss important tasks!';

  // Show a pop-up alert welcoming users to the About page
  alert('Welcome to the About page of your To-Do List App!');
};
