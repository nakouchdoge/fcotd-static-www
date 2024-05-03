// Function to toggle dark mode
function darkModeToggle() {
    // Toggle dark mode class on body
    document.body.classList.toggle('dark-mode');

    // Check if dark mode is enabled and store the preference in local storage
    var darkModeEnabled = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', darkModeEnabled);
}
// Event listener for the dark mode toggle button
document.getElementById('darkModeToggler').addEventListener('click', function() {
    darkModeToggle();
});

setCheckboxState();