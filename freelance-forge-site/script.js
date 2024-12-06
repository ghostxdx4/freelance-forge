document.getElementById('project-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const category = document.getElementById('category').value;
    const details = document.getElementById('details').value;

    alert(`Thank you, ${name}! Your project has been submitted successfully.`);
    // Optional: You can also send the form data to a backend server via an API here
});
