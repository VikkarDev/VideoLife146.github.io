document.addEventListener('DOMContentLoaded', function() {
    let data = [
        { country: 'Albania', locations: 400 },
        { country: 'Andorra', locations: 133 },
        { country: 'Argentina', locations: 2830 },
        { country: 'Australia', locations: 3301 },
        { country: 'Austria', locations: 960 },
        { country: 'Bangladesh', locations: 844 },
        { country: 'Belgium', locations: 678 },
        { country: 'Bolivia', locations: 1006 },
        { country: 'Botswana', locations: 600 },
        { country: 'Brazil', locations: 3365 },
        { country: 'Bulgaria', locations: 890 },
        { country: 'Cambodia', locations: 1070 },
        { country: 'Canada', locations: 3650 },
        { country: 'Chile', locations: 1700 },
        { country: 'Colombia', locations: 1850 },
        { country: 'Croatia', locations: 800 },
        { country: 'Czechia', locations: 900 },
        { country: 'Denmark', locations: 900 },
        { country: 'Ecuador', locations: 1050 },
        { country: 'Estonia', locations: 600 },
        { country: 'Eswatini', locations: 350 },
        { country: 'Finland', locations: 1122 },
        { country: 'France', locations: 2235 },
        { country: 'Germany', locations: 1444 },
        { country: 'Ghana', locations: 1014 },
        { country: 'Greece', locations: 1250 },
        { country: 'Guatemala', locations: 800 },
        { country: 'Hungary', locations: 900 },
        { country: 'Iceland', locations: 550 },
        { country: 'India', locations: 1689 },
        { country: 'Indonesia', locations: 2200 },
        { country: 'Ireland', locations: 900 },
        { country: 'Israel', locations: 560 },
        { country: 'Italy', locations: 1749 },
        { country: 'Japan', locations: 1880 },
        { country: 'Jordan', locations: 600 },
        { country: 'Kenya', locations: 1449 },
        { country: 'Kyrgyzstan', locations: 600 },
        { country: 'Laos', locations: 46 },
        { country: 'Latvia', locations: 600 },
        { country: 'Lesotho', locations: 300 },
        { country: 'Lithuania', locations: 600 },
        { country: 'Luxemburg', locations: 211 },
        { country: 'Malaysia', locations: 1900 },
        { country: 'Mexico', locations: 2800 },
        { country: 'Mongolia', locations: 233 },
        { country: 'Montenegro', locations: 342 },
        { country: 'Netherlands', locations: 812 },
        { country: 'New Zealand', locations: 1086 },
        { country: 'Nigeria', locations: 890 },
        { country: 'North Macedonia', locations: 250 },
        { country: 'Norway', locations: 1050 },
        { country: 'Panama', locations: 330 },
        { country: 'Peru', locations: 1670 },
        { country: 'Philippines', locations: 2011 },
        { country: 'Poland', locations: 1700 },
        { country: 'Portugal', locations: 850 },
        { country: 'Romania', locations: 1500 },
        { country: 'Russia', locations: 4500 },
        { country: 'Senegal', locations: 994 },
        { country: 'Serbia', locations: 560 },
        { country: 'Singapore', locations: 205 },
        { country: 'Slovakia', locations: 600 },
        { country: 'Slovenia', locations: 480 },
        { country: 'South Africa', locations: 2637 },
        { country: 'South Korea', locations: 128 },
        { country: 'Spain', locations: 2389 },
        { country: 'Sri Lanka', locations: 890 },
        { country: 'Sweden', locations: 1550 },
        { country: 'Switzerland', locations: 720 },
        { country: 'Taiwan', locations: 870 },
        { country: 'Thailand', locations: 2250 },
        { country: 'Tunisia', locations: 500 },
        { country: 'Turkey', locations: 1833 },
        { country: 'Ukraine', locations: 1200 },
        { country: 'United Kingdom', locations: 2505 },
        { country: 'United States of America', locations: 5300 },
        { country: 'Uruguay', locations: 900 }
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
