
document.addEventListener('DOMContentLoaded', function() {
    // Fetch leaderboard data from the API
    fetch('http://localhost:8000/users/leaderboard')
        .then(response => response.json())
        .then(data => {
            // Clear any previous content
            const dataContainer = document.getElementById('data');
            dataContainer.innerHTML = '';  // Clear previous leaderboard data

            // Loop through the data and create a row for each user
            data.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.username}</td>
                    <td>${user.points}</td>
                `;
                dataContainer.appendChild(row); // Add the row to the table
            });
        })
        .catch(error => {
            console.error(`Error fetching leaderboard data: ${error}`);
        });
});
