console.log("Portfolio loaded!");

// Add smooth scrolling to all nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // Prevent default jump
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
const toggleBtn = document.getElementById('toggle-theme');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');

  // Optional: change button text dynamically
  if (document.body.classList.contains('light-mode')) {
    toggleBtn.textContent = "Switch to Dark Mode";
  } else {
    toggleBtn.textContent = "Switch to Light Mode";
  }
});
