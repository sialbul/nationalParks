const apiKey = 'x7Gip5NstAUT2IRcLBkGgWGmHHSUGKwVr0hzJpCw';
const apiKey2 ="bea611428821d3ac08d2f293893ff247";

async function fetchData() {
    const stateCode = document.getElementById("state").value; 
    const nameCity = document.querySelector(`[value=${stateCode}]`).getAttribute('data-name');
       
    const url = 'https://developer.nps.gov/api/v1/parks?stateCode=' + stateCode + '&limit=12&api_key=';
    const urlWeather = 'https://api.openweathermap.org/data/2.5/weather?q=' + nameCity + '&units=imperial&appid=';
    try {
        const response = await fetch(url + apiKey);
        const data = await response.json();
        renderData(data);
        const responseWeather = await fetch(urlWeather + apiKey2);
        const dataWeather = await responseWeather.json();
        renderWeatherData(dataWeather);
    }    
    catch (error) {
        console.log(error)
    }
}

fetchData();
