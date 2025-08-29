function getWeatherDescription(code) {
  const weather = {
    0: 'Ясно',
    3: 'Пасмурно',
    65: 'Сильный дождь',
    75: 'Сильный снег',
    82: 'Сильный ливень',
    95: 'Гроза',
  };
  return weather[code];
}

function getWeatherIcon(code) {
  const iconMap = {
    0: './02_clear.svg',
    3: './04_cloudy.svg',
    65: './12_rain.svg',
    75: './15_snow_rn.svg',
    82: './12_rain.svg',
    95: './16_storms.svg',
  };
  return iconMap[code] || iconMap[0];
}

const today = new Date().toISOString().split('T')[0];

fetch(`https://api.open-meteo.com/v1/forecast?latitude=50.06&longitude=19.94&hourly=temperature_2m,weathercode&start_date=${today}&end_date=${today}`)
  .then(response => response.json())
  .then(data => {
    const weatherTemperature = document.querySelectorAll('.temperature');
    const weatherImages = document.querySelectorAll('.weather-chager img');
    const targetHours = [6, 8, 10, 12, 14, 16];
    let temperatureIndex = 0;
    
    data.hourly.time.forEach((time, i) => {
      const hour = parseInt(time.split('T')[1].substring(0, 2));
      if (targetHours.includes(hour)) {
        weatherTemperature[temperatureIndex].textContent = `${data.hourly.temperature_2m[i]}°C`;
        
        const weatherCode = data.hourly.weathercode[i];
        weatherImages[temperatureIndex].src = getWeatherIcon(weatherCode);
        
        temperatureIndex++;
      }
    });
});