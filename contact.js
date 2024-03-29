{
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();

    let error = false;

    if (name === '') {
        showError('name', 'Please enter your name.');
        error = true;
    } else {
        removeError('name');
    }

    if (email === '') {
        showError('email', 'Please enter your email address.');
        error = true;
    } else if (!isValidEmail(email)) {
        showError('email', 'Please enter a valid email address.');
        error = true;
    } else {
        removeError('email');
    }

    if (message === '') {
        showError('message', 'Please enter your message.');
        error = true;
    } else {
        removeError('message');
    }

    if (!error) {
        // Form submission logic can go here
        alert('Form submitted successfully!');
        document.getElementById('contact-form').reset();
    }
});

function showError(field, errorMessage) {
    let inputField = document.getElementById(field);
    let errorElement = document.createElement('span');
    errorElement.className = 'error';
    errorElement.textContent = errorMessage;
    inputField.parentNode.appendChild(errorElement);
}

function removeError(field) {
    let inputField = document.getElementById(field);
    let errorElement = inputField.parentNode.querySelector('.error');
    if (errorElement) {
        inputField.parentNode.removeChild(errorElement);
    }
}

function isValidEmail(email) {
    // Basic email validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

}
