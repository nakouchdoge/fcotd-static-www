document.addEventListener('DOMContentLoaded', () => {
  // Get the current page's URL path
  const currentPath = window.location.pathname;

  // Remove the .html extension (if present) from the current path for comparison
  const sanitizedCurrentPath = currentPath.endsWith('.html') 
      ? currentPath.slice(0, -5) // Remove .html extension
      : currentPath;

  // Select all anchor elements
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
      // Get the href attribute of the link
      const linkPath = new URL(link.href).pathname;

      // Remove the .html extension (if present) from the link path for comparison
      const sanitizedLinkPath = linkPath.endsWith('.html')
          ? linkPath.slice(0, -5) // Remove .html extension
          : linkPath;

      // Compare the sanitized paths
      if (sanitizedCurrentPath === sanitizedLinkPath) {
          link.classList.add('active');
      } else {
          link.classList.remove('active'); // Optional: Ensures only one active class
      }
  });
});
