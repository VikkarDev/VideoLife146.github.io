document.addEventListener('DOMContentLoaded', function() {
    // Sample data (replace with your own data)
    const data = [
        { country: 'USA', locations: 50 },
        { country: 'Canada', locations: 30 },
        { country: 'UK', locations: 20 },
        { country: 'Australia', locations: 40 },
        { country: 'Germany', locations: 30 }
    ];

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
