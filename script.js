// API key and base URL
//const apiKey = '7d996a557f3e510fdb564a765c7825';
const apiKey = '8d1cd2540eb1130ee34099c332e6a22e';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Select DOM elements
const searchBox = document.getElementById('search-box');
const btn = document.getElementById('btn');
const loadingSpinner = document.getElementById('loading-spinner');
const temperature = document.getElementById('temperature');
const wind = document.getElementById('wind');
const humidity = document.getElementById('humidity');
const rain = document.getElementById('rain');
const snow = document.getElementById('snow');
const cloud = document.getElementById('cloud');

// Add event listener for button click
btn.addEventListener('click', getWeatherData);

function getWeatherData() {
    const location = searchBox.value;
    if (!location) {
        alert('Please enter a location');
        return;
    }

    loadingSpinner.style.display = 'block'; // Show loading spinner

    const url = `${baseUrl}?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            displayWeatherData(data);
        })
        .catch(error => {
            alert(error.message);
            clearWeatherData();
        })
        .finally(() => {
            loadingSpinner.style.display = 'none'; // Hide loading spinner
        });
}

function displayWeatherData(data) {
    temperature.textContent = `${data.main.temp}°C`;
    wind.textContent = `${data.wind.speed} km/h`;
    humidity.textContent = `${data.main.humidity} %`;
    rain.textContent = `${data.rain ? data.rain['1h'] : 0} mm`;
    snow.textContent = `${data.snow ? data.snow['1h'] : 0} inch`;
    cloud.textContent = `${data.clouds.all} %`;
}

function clearWeatherData() {
    temperature.textContent = '0°C';
    wind.textContent = '0 km/h';
    humidity.textContent = '0 %';
    rain.textContent = '0 mm';
    snow.textContent = '0 inch';
    cloud.textContent = '0 %';
}


function updateWeatherUI(weatherData) {
    const temperature = weatherData.main.temp;
    const windSpeed = weatherData.wind.speed;
    const humidity = weatherData.main.humidity;
    const rain = weatherData.rain ? weatherData.rain["1h"] : 0; // Rain for last hour
    const snow = weatherData.snow ? weatherData.snow["1h"] : 0; // Snow for last hour
    const clouds = weatherData.clouds.all;

    // Update UI elements
    document.getElementById('temperature').textContent = `${temperature}°C`;
    document.getElementById('wind').textContent = `${windSpeed} km/h`;
    document.getElementById('humidity').textContent = `${humidity} %`;
    document.getElementById('rain').textContent = `${rain} mm`;
    document.getElementById('snow').textContent = `${snow} inch`;
    document.getElementById('cloud').textContent = `${clouds} %`;

    // Change background based on weather condition
    const weatherCondition = weatherData.weather[0].main.toLowerCase();
    
    // Remove existing weather classes
    document.body.classList.remove('clear', 'rain', 'snow', 'cloudy', 'thunderstorm');

    // Add new background class based on weather condition
    if (weatherCondition.includes("clear")) {
        document.body.classList.add('clear');
    } else if (weatherCondition.includes("rain")) {
        document.body.classList.add('rain');
    } else if (weatherCondition.includes("snow")) {
        document.body.classList.add('snow');
    } else if (weatherCondition.includes("cloud")) {
        document.body.classList.add('cloudy');
    } else if (weatherCondition.includes("thunderstorm")) {
        document.body.classList.add('thunderstorm');
    }
}




function updateWeatherUI(weatherData) {
    const temperature = weatherData.main.temp;
    const windSpeed = weatherData.wind.speed;
    const humidity = weatherData.main.humidity;
    const rain = weatherData.rain ? weatherData.rain["1h"] : 0; // Rain for last hour
    const snow = weatherData.snow ? weatherData.snow["1h"] : 0; // Snow for last hour
    const clouds = weatherData.clouds.all;

    // Update UI elements
    document.getElementById('temperature').textContent = `${temperature}°C`;
    document.getElementById('wind').textContent = `${windSpeed} km/h`;
    document.getElementById('humidity').textContent = `${humidity} %`;
    document.getElementById('rain').textContent = `${rain} mm`;
    document.getElementById('snow').textContent = `${snow} inch`;
    document.getElementById('cloud').textContent = `${clouds} %`;

    // Change background based on weather condition
    const weatherCondition = weatherData.weather[0].main.toLowerCase();
    
    // Remove existing weather classes
    document.body.classList.remove('clear', 'rain', 'snow', 'cloudy', 'thunderstorm');

    // Add new background class based on weather condition
    if (weatherCondition.includes("clear")) {
        document.body.classList.add('clear');
    } else if (weatherCondition.includes("rain")) {
        document.body.classList.add('rain');
    } else if (weatherCondition.includes("snow")) {
        document.body.classList.add('snow');
    } else if (weatherCondition.includes("cloud")) {
        document.body.classList.add('cloudy');
    } else if (weatherCondition.includes("thunderstorm")) {
        document.body.classList.add('thunderstorm');
    }
}





function updateWeatherUI(weatherData) {
    const temperature = weatherData.main.temp;
    const windSpeed = weatherData.wind.speed;
    const humidity = weatherData.main.humidity;
    const rain = weatherData.rain ? weatherData.rain["1h"] : 0; // Rain for last hour
    const snow = weatherData.snow ? weatherData.snow["1h"] : 0; // Snow for last hour
    const clouds = weatherData.clouds.all;

    // Update UI elements
    document.getElementById('temperature').textContent = `${temperature}°C`;
    document.getElementById('wind').textContent = `${windSpeed} km/h`;
    document.getElementById('humidity').textContent = `${humidity} %`;
    document.getElementById('rain').textContent = `${rain} mm`;
    document.getElementById('snow').textContent = `${snow} inch`;
    document.getElementById('cloud').textContent = `${clouds} %`;

    // Change background based on weather condition
    const weatherCondition = weatherData.weather[0].main.toLowerCase();
    
    // Remove existing weather classes
    document.body.classList.remove('clear', 'rain', 'snow', 'cloudy', 'thunderstorm');

    // Add new background class based on weather condition
    if (weatherCondition.includes("clear")) {
        document.body.classList.add('clear');
    } else if (weatherCondition.includes("rain")) {
        document.body.classList.add('rain');
    } else if (weatherCondition.includes("snow")) {
        document.body.classList.add('snow');
    } else if (weatherCondition.includes("cloud")) {
        document.body.classList.add('cloudy');
    } else if (weatherCondition.includes("thunderstorm")) {
        document.body.classList.add('thunderstorm');
    }
}
