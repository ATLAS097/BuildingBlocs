document.getElementById('giftForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const formData = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        gift: document.getElementById('gift').value,
        amount: document.getElementById('amount').value
    };

    // Send POST request
    fetch('http://localhost:8000/users/gifts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        alert('Gift submitted successfully!');
        console.log(data);
    })
    .catch(error => {
        alert('Error submitting gift.', error);
        console.error(error);
    });
});