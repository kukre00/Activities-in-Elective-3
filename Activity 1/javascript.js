// Service menu item and the dropdown
const ServiceMenu = document.getElementById('services');
const Dropdown = servicesItem.nextElementSibling;

// The hovering effect of the service menu
ServiceMenu.addEventListener('mouseenter', () => {
    Dropdown.style.display = 'block';
});

// To hides the dropdown when the mouse leaves
ServiceMenu.addEventListener('mouseleave', () => {
    setTimeout(() => {
        if (!Dropdown.matches(':hover')) {
            Dropdown.style.display = 'none';
        }
    }, 200);
});

Dropdown.addEventListener('mouseleave', () => {
    Dropdown.style.display = 'none';
});

Dropdown.addEventListener('mouseenter', () => {
    Dropdown.style.display = 'block';
});
