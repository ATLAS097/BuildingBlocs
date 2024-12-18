document.addEventListener('DOMContentLoaded', async () => {
    const giftList = document.getElementById('gift-list');

    try {
        // Fetch the list of gifts from the API
        const giftResponse = await fetch('http://localhost:8000/gifts');
        if (!giftResponse.ok) {
            throw new Error(`HTTP error! Status: ${giftResponse.status}`);
        }
        const gifts = await giftResponse.json();

        // Divide the gifts into four equal parts
        const partSize = Math.ceil(gifts.length / 4);
        const col1 = gifts.slice(0, partSize);
        const col2 = gifts.slice(partSize, partSize * 2);
        const col3 = gifts.slice(partSize * 2, partSize * 3);
        const col4 = gifts.slice(partSize * 3);

        // Create four columns for the gift items
        const columns = [col1, col2, col3, col4];


        columns.forEach((column, index) => {
            const colDiv = document.createElement('div');
            colDiv.className = 'col-md-3';  // Create a column for each set of gifts

            column.forEach(gift => {
                const card = document.createElement('div');
                card.className = "card mb-2";
                const img = document.createElement('img');
                img.className = 'card-img-top';  // Add some margin between images
                img.src = gift.url;  // Assuming 'url' contains the image URL
                img.alt = gift.name;
                card.appendChild(img)

                const cardBody = document.createElement('div');
                cardBody.className = "card-body";
                const cardText = document.createElement('h5');
                cardText.className = "card-title";
                cardText.textContent = gift.name;
                cardBody.append(cardText);
                card.append(cardBody);
                colDiv.appendChild(card);  // Append each image vertically in the column
            });

            giftList.appendChild(colDiv);  // Append the column to the main container
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        giftList.innerHTML = '<div class="text-danger">Failed to load gifts. Please try again later.</div>';
    }
});