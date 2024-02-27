document.addEventListener('DOMContentLoaded', function() {
    let data = [
        { country: 'Laos', locations: 46 },
        { country: 'United States of America', locations: 5000 },
        { country: 'Canada', locations: 3650 },
        { country: 'New Zealand', locations: 1086 },
        { country: 'Japan', locations: 1880 },
        { country: 'Argentina', locations: 2830 },
        { country: 'Chile', locations: 1700 },
        { country: 'Sweden', locations: 1550 },
        { country: 'Norway', locations: 1050 },
        { country: 'Finland', locations: 1122 },
        { country: 'Russia', locations: 4500 },
        { country: 'Brazil', locations: 3365 },
        { country: 'Bolivia', locations: 1006 },
        { country: 'Peru', locations: 1670 },
        { country: 'Netherlands', locations: 812 },
        { country: 'Poland', locations: 1700 },
        { country: 'Iceland', locations: 550 },
        { country: 'Indonesia', locations: 2200 },
        { country: 'Mongolia', locations: 233 },
        { country: 'India', locations: 1689 },
        { country: 'Italy', locations: 1599 },
        { country: 'Australia', locations: 3301 }
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
