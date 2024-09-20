// Function to open the side menu
function openmenu() {
    document.getElementById('sidemenu').style.width = '250px';
}

// Function to close the side menu
function closemenu() {
    document.getElementById('sidemenu').style.width = '0';
}

// Function to handle tab switching
function opentab(tabName) {
    const tabs = document.querySelectorAll('.tab-contents');
    tabs.forEach(tab => tab.classList.remove('active-tab'));
    
    const links = document.querySelectorAll('.tab-links');
    links.forEach(link => link.classList.remove('active-link'));
    
    document.getElementById(tabName).classList.add('active-tab');
    document.querySelector(`.tab-links[onclick="opentab('${tabName}')"]`).classList.add('active-link');
}

// Form submission handler
document.querySelector('form[name="submit-to-google-sheet"]').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Assuming you handle form submission via Google Sheets or some API here
    
    // Redirect to the thank you page after submission
    window.location.href = 'thankyou.html';
});
