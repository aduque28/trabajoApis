function buscarClima() {
  var ciudad = document.getElementById('cityInput').value;
  var claveAPI = '6d337ecbeb0a97f6ec2e28891f4c2034';
  var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ciudad + '&appid=' + claveAPI + '&lang=es'; // Agregar '&lang=es' para obtener datos en español

  fetch(url)
      .then(response => response.json())
      .then(data => {
          document.getElementById('cityName').textContent = 'Ciudad: ' + data.name;
          document.getElementById('weather').textContent = 'Clima: ' + data.weather[0].description;
          document.getElementById('temperature').textContent = 'Temperatura: ' + Math.round(data.main.temp - 273.15) + '°C';
          document.getElementById('humidity').textContent = 'Humedad: ' + data.main.humidity + '%';
      })
      .catch(error => {
          console.error('Error al obtener datos del clima:', error);
      });
}
