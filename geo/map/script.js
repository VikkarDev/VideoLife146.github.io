document.addEventListener('DOMContentLoaded', function() {
    let data = [
        { country: 'Laos', locations: 100 },
        { country: 'United States of America', locations: 5000 },
        { country: 'Canada', locations: 3650 },
        { country: 'Australia', locations: 40 }
    ];

    // Sort data alphabetically based on country names
    data.sort((a, b) => a.country.localeCompare(b.country));

    // Calculate total number of locations
    let totalLocations = 0;
    data.forEach(item => {
        totalLocations += item.locations;
    });

    // Display data in the table
    const tableBody = document.querySelector('#locationsTable tbody');
    data.forEach(item => {
        const percentage = ((item.locations / totalLocations) * 100).toFixed(2); // Calculate percentage
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.country}</td>
            <td>${item.locations}</td>
            <td>${percentage}%</td>
        `;
        tableBody.appendChild(row);
    });

    // Display total number of locations
    document.querySelector('#totalLocations').textContent = totalLocations;
});
