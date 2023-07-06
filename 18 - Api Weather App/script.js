const getWeatherData = async (city) => {
  const url = `https://open-weather13.p.rapidapi.com/city/${city}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "da09ec508fmsh1cd354d7ba2b2cfp120852jsnf13aec97b86d",
      "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

const searchCity = async () => {
  const city = document.getElementById("city-input").value;
  // console.log(city)
  const data = await getWeatherData(city);
  showWeatherData(data);
};

const showWeatherData = (weatherData) => {
  // console.log(weatherData, 'run')
  document.getElementById("temp").innerText = weatherData.main.temp;
  document.getElementById("min-temp").innerText = weatherData.main.temp_min;
  document.getElementById("max-temp").innerText = weatherData.main.temp_max;
  document.getElementById("city-name").innerText = weatherData.name;
  document.getElementById("weather-type").innerText =
    weatherData.weather[0].main;
};
