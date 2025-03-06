document.getElementById("logout").addEventListener("click", function() {
    alert("Logging out...");
    window.location.href = "login.html"; // Redirect to login page
});


let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active'); // Hide all slides
        if (index === slideIndex) {
            slide.classList.add('active'); // Show current slide
        }
    });

    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0; // Loop back to first slide
    }
}

// Auto-slide every 5 seconds
setInterval(showSlides, 5000);

// Show first slide on load
showSlides();


function updateData() {
    document.getElementById("temp").innerText = (20 + Math.random() * 10).toFixed(1) + " °C";
    document.getElementById("humidity").innerText = (40 + Math.random() * 20).toFixed(1) + " %";
    document.getElementById("ph").innerText = (5.5 + Math.random() * 2).toFixed(1);
    document.getElementById("tds").innerText = (500 + Math.random() * 300).toFixed(0) + " ppm";
    document.getElementById("water").innerText = (50 + Math.random() * 50).toFixed(0) + " %";
    document.getElementById("lamps").innerText = Math.random() > 0.5 ? "ON" : "OFF";
}

// Auto-update every 3 seconds
setInterval(updateData, 3000);

// Initialize on page load
updateData();


function toggleFullscreen() {
    let videoFrame = document.getElementById("farm-camera");
    if (videoFrame.requestFullscreen) {
        videoFrame.requestFullscreen();
    } else if (videoFrame.mozRequestFullScreen) { // Firefox
        videoFrame.mozRequestFullScreen();
    } else if (videoFrame.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        videoFrame.webkitRequestFullscreen();
    } else if (videoFrame.msRequestFullscreen) { // IE/Edge
        videoFrame.msRequestFullscreen();
    }
}



function toggleWaterPump() {
    let pumpStatus = document.getElementById("waterPumpToggle").checked;
    if (pumpStatus) {
        alert("✅ Water Pump TURNED ON!");
    } else {
        alert("❌ Water Pump TURNED OFF!");
    }
}

function updatePH() {
    let phValue = document.getElementById("phLevel").value;
    document.getElementById("phValue").innerText = phValue;
}

function startNutrientCycle() {
    alert("🌱 Nutrient Cycle Started!");
}

function stopNutrientCycle() {
    alert("🛑 Nutrient Cycle Stopped!");
}

function updateLED() {
    let ledValue = document.getElementById("ledIntensity").value;
    document.getElementById("ledValue").innerText = ledValue + "%";
}


function addAlert(type, message) {
    let alertsContainer = document.getElementById("alerts-container");

    let alertDiv = document.createElement("div");
    alertDiv.classList.add("alert", type);

    let alertMessage = document.createElement("span");
    alertMessage.innerText = message;

    let closeButton = document.createElement("button");
    closeButton.innerText = "❌";
    closeButton.classList.add("close-btn");
    closeButton.onclick = function () {
        alertDiv.remove();
    };

    alertDiv.appendChild(alertMessage);
    alertDiv.appendChild(closeButton);
    alertsContainer.appendChild(alertDiv);
}

// Simulating Alerts (You can replace these with real-time alerts later)
setTimeout(() => addAlert("warning", "⚠️ pH Level is too low!"), 3000);
setTimeout(() => addAlert("danger", "🚨 Water Level is critically low!"), 6000);
setTimeout(() => addAlert("success", "✅ Nutrient cycle completed successfully!"), 9000);

function clearAlerts() {
    document.getElementById("alerts-container").innerHTML = "";
}


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

  
  window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        slides.style.height = '250px'; // Adjust for smaller screens
    } else {
        slides.style.height = '400px'; // Default height
    }
});


function updateData() {
    document.getElementById("temp").innerText = (20 + Math.random() * 10).toFixed(1) + " °C";
    document.getElementById("humidity").innerText = (40 + Math.random() * 20).toFixed(1) + " %";
    document.getElementById("ph").innerText = (5.5 + Math.random() * 2).toFixed(1);
    document.getElementById("tds").innerText = (500 + Math.random() * 300).toFixed(0) + " ppm";
    document.getElementById("water").innerText = (50 + Math.random() * 50).toFixed(0) + " %";
    document.getElementById("lamps").innerText = Math.random() > 0.5 ? "ON" : "OFF";
}

// Auto-update every 3 seconds
setInterval(updateData, 3000);

// Initialize on page load
updateData();



document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById('analysisChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Temperature (°C)',
                data: [22, 24, 23, 25, 26, 24],
                borderColor: '#ff5733',
                backgroundColor: 'rgba(255, 87, 51, 0.2)',
                fill: true
            }, {
                label: 'Humidity (%)',
                data: [60, 62, 58, 65, 67, 63],
                borderColor: '#33b5e5',
                backgroundColor: 'rgba(51, 181, 229, 0.2)',
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
});
