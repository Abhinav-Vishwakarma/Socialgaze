const platformData = {
    instagram: {
        platformLogo: "fa-brands fa-instagram platform-logo",
        followers: '120.5k',
        impressions: '39k',
        likes: '1,600',
        comments: '217',
        engagementRate: '4.11%',
        traffic: [5000, 10000, 15000, 20000],
        subscribers: [2000, 4000, 3000, 5000],
        deviceSplit: [60, 25, 15], // Mobile, Desktop, Tablet
        genderSplit: [55, 45], // Male, Female
    },
    youtube: {
        platformLogo: "fa-brands fa-youtube platform-logo yt",
        followers: '1.2M',
        impressions: '500k',
        likes: '20k',
        comments: '5k',
        engagementRate: '7.5%',
        traffic: [10000, 20000, 25000, 30000],
        subscribers: [10000, 20000, 15000, 25000],
        deviceSplit: [50, 30, 20],
        genderSplit: [60, 40],
    },
    facebook: {
        platformLogo: "fa-brands fa-facebook platform-logo",
        followers: '800k',
        impressions: '300k',
        likes: '10k',
        comments: '2.5k',
        engagementRate: '5.2%',
        traffic: [8000, 12000, 18000, 22000],
        subscribers: [5000, 8000, 7000, 10000],
        deviceSplit: [55, 30, 15],
        genderSplit: [50, 50],
    },
    twitter: {
        platformLogo: "fa-brands fa-twitter platform-logo",
        followers: '600k',
        impressions: '200k',
        likes: '8k',
        comments: '1.2k',
        engagementRate: '6.3%',
        traffic: [4000, 7000, 9000, 12000],
        subscribers: [3000, 5000, 4000, 6000],
        deviceSplit: [65, 20, 15],
        genderSplit: [45, 55],
    },
};

// Function to Render Dashboard Content
function renderDashboard(platform) {
    const data = platformData[platform];

    // Generate HTML Content
    const htmlContent = `
      <div class="header">
        <div class="platform-info">
          <i class="${data.platformLogo}"></i>
          <div>
            <h1>${data.followers}</h1>
            <p>Followers</p>
          </div>
        </div>
        <div class="metric">
          <h3>${data.impressions}</h3>
          <p>Impressions</p>
        </div>
        <div class="metric">
          <h3>${data.likes}</h3>
          <p>Likes</p>
        </div>
        <div class="metric">
          <h3>${data.comments}</h3>
          <p>Comments</p>
        </div>  
        <div class="engagement">
          <h3>${data.engagementRate}</h3>
          <p>Engagement rate</p>
        </div>
      </div>
      <div class="analytics">
        <div class="card traffic">
          <h3>Website Traffic (${platform} This Month)</h3>
          <canvas id="trafficChart"></canvas>
        </div>
        <div class="card subscriber-growth">
          <h3>Subscriber Growth (${platform} This Month)</h3>
          <canvas id="subscriberChart"></canvas>
        </div>
        <div class="card device-usage">
          <h3>Device Usage Breakdown</h3>
          <canvas id="deviceChart"></canvas>
        </div>
        <div class="card gender-split">
          <h3>Gender Split</h3>
          <canvas id="genderChart"></canvas>
        </div>
      </div>
    `;

    // Inject HTML into Dashboard
    const dashboardContent = document.getElementById('dashboard-content');
    dashboardContent.innerHTML = htmlContent;

    // Render Charts
    renderCharts(data.traffic, data.subscribers, data.deviceSplit, data.genderSplit);
}

// Function to Render Charts
function renderCharts(trafficData, subscriberData, deviceData, genderData) {
    // Traffic Chart
    const trafficCtx = document.getElementById('trafficChart').getContext('2d');
    new Chart(trafficCtx, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: 'Sessions',
                data: trafficData,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
            }],
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false },
            },
        },
    });

    // Subscriber Growth Chart
    const subscriberCtx = document.getElementById('subscriberChart').getContext('2d');
    new Chart(subscriberCtx, {
        type: 'bar',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: 'Subscribers',
                data: subscriberData,
                backgroundColor: '#3498db',
            }],
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false },
            },
        },
    });

    // Device Usage Pie Chart
    const deviceCtx = document.getElementById('deviceChart').getContext('2d');
    new Chart(deviceCtx, {
        type: 'pie',
        data: {
            labels: ['Mobile', 'Desktop', 'Tablet'],
            datasets: [{
                data: deviceData,
                backgroundColor: ['#1abc9c', '#3498db', '#9b59b6'],
            }],
        },
        options: {
            responsive: true,
        },
    });

    // Gender Split Doughnut Chart
    const genderCtx = document.getElementById('genderChart').getContext('2d');
    new Chart(genderCtx, {
        type: 'doughnut',
        data: {
            labels: ['Male', 'Female'],
            datasets: [{
                data: genderData,
                backgroundColor: ['#2980b9', '#e74c3c'],
            }],
        },
        options: {
            responsive: true,
        },
    });
}

// Event Listeners for Platform Tabs
document.querySelectorAll('.platform-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        document.querySelectorAll('.platform-tab').forEach(t => t.classList.remove('active'));

        // Add active class to clicked tab
        tab.classList.add('active');

        // Render Dashboard for Selected Platform
        const platform = tab.getAttribute('data-platform');
        renderDashboard(platform);
    });
});

// Initial Render
renderDashboard('instagram');