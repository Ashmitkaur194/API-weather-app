async function getWeather() {
  const country = document.getElementById("countryInput").value.trim();
  const resultDiv = document.getElementById("weatherResult");

  if (!country) {
    resultDiv.innerHTML = "Please enter a country or city.";
    return;
  }

  const apiKey = "fa0decdb02c02bc24b27610d2ed33e48"; // Replace with your OpenWeatherMap API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    const weatherInfo = `
      <strong>${data.name}, ${data.sys.country}</strong><br/>
      🌡 Temperature: ${data.main.temp} °C<br/>
      ☁ Weather: ${data.weather[0].main}<br/>
      💧 Humidity: ${data.main.humidity}%<br/>
      💨 Wind Speed: ${data.wind.speed} m/s
    `;

    resultDiv.innerHTML = weatherInfo;
  } catch (error) {
    resultDiv.innerHTML = "Error fetching weather data. Please check the country/city name.";
  }
}
