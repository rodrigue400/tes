/*// Registration form submission
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate form inputs
    if (password !== confirmPassword) {
        document.getElementById('registrationMessage').textContent = "Ijambo ry' ibanga riratandukanye.";
        
    }

    // Simulate registration (replace this with actual registration logic)
    document.getElementById('registrationMessage').textContent = `Murakoze, ${username}. Wiyandikishije neza!`;

    // Optionally, clear the form
    document.getElementById('registrationForm').reset();
});

// Search functionality
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const searchLocation = document.getElementById('searchLocation').value;

    // Simulate search result (replace with actual search logic)
    document.getElementById('searchResults').innerHTML = `<p>Ukoresheje "Shaka", wifuza serivisi muri: <strong>${searchLocation}</strong></p>`;
    
    // Clear the search input field
    document.getElementById('searchLocation').value = '';
});

// Bootstrap validation
(function() {
    'use strict';
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation');
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function(form) {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
})();
