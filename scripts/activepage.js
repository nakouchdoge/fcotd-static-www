document.addEventListener('DOMContentLoaded', () => {
    // Get the current page's URL path
    const currentPath = window.location.pathname;
  
    // Select all anchor elements
    const navLinks = document.querySelectorAll('nav a');
  
    navLinks.forEach(link => {
      // Get the href attribute of the link
      const linkPath = new URL(link.href).pathname;
  
      // Compare the link's path with the current path
      if (currentPath === linkPath) {
        link.classList.add('active');
      } else {
        link.classList.remove('active'); // Optional: Ensures only one active class
      }
    });
  });