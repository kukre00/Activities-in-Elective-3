// Get the 'Services' menu item and the dropdown menu
const servicesItem = document.getElementById('services');
const dropdownMenu = servicesItem.nextElementSibling;

// Show the dropdown menu when hovering over 'Services'
servicesItem.addEventListener('mouseenter', () => {
    dropdownMenu.style.display = 'block';
});

// Hide the dropdown menu when the mouse leaves 'Services' or the dropdown menu
servicesItem.addEventListener('mouseleave', () => {
    setTimeout(() => {
        if (!dropdownMenu.matches(':hover')) {
            dropdownMenu.style.display = 'none';
        }
    }, 200);
});

dropdownMenu.addEventListener('mouseleave', () => {
    dropdownMenu.style.display = 'none';
});

dropdownMenu.addEventListener('mouseenter', () => {
    dropdownMenu.style.display = 'block';
});
