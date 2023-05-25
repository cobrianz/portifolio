// Get the menu toggle button and the menu itself
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Add click event listener to the menu toggle button
menuToggle.addEventListener('click', function() {
  // Toggle the menu's display property
  if (menu.style.display === 'none') {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
});
