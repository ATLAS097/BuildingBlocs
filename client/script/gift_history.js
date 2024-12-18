document.addEventListener('DOMContentLoaded', async () => {
    const historyTableBody = document.querySelector('#history-table tbody');

    try {
        // Fetch the gift history from the API
        const historyResponse = await fetch('http://localhost:8000/gifts/history');
        if (!historyResponse.ok) {
            throw new Error(`HTTP error! Status: ${historyResponse.status}`);
        }
        const history = await historyResponse.json();

        // Dynamically create table rows for each history entry
        history.forEach(entry => {
            const row = document.createElement('tr');

            const usernameCell = document.createElement('td');
            usernameCell.textContent = entry.username;
            row.appendChild(usernameCell);

            const itemCell = document.createElement('td');
            itemCell.textContent = entry.item;
            row.appendChild(itemCell);

            const pointsCell = document.createElement('td');
            pointsCell.textContent = entry.total_points;
            row.appendChild(pointsCell);

            const giftedTimeCell = document.createElement('td');
            giftedTimeCell.textContent = new Date(entry.gifted_time).toLocaleString();
            row.appendChild(giftedTimeCell);

            historyTableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        historyTableBody.innerHTML = '<tr><td colspan="4" class="text-danger">Failed to load history. Please try again later.</td></tr>';
    }
});