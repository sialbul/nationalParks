const apiKey = 'x7Gip5NstAUT2IRcLBkGgWGmHHSUGKwVr0hzJpCw'; //national state park api
const apiKey2 = "bea611428821d3ac08d2f293893ff247"; //weather api

document.getElementById("state").innerHTML = stateList.map(state => `<option data-name="${state.name}" value="${state.value}" lat="${state.lat}" lot="${state.lon}" ${state.value === 'ca' && 'selected=selected'}>${state.name}</option>`).join('');

async function fetchData() {
    const stateCode = document.getElementById("state").value;
    const stateLat = document.querySelector(`[value=${stateCode}]`).getAttribute('lat');
    const stateLot = document.querySelector(`[value=${stateCode}]`).getAttribute('lot');

    const url = `https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&limit=12&api_key=`; //national park url 
    const urlWeather = `https://api.openweathermap.org/data/2.5/forecast?lat=${stateLat}&lon=${stateLot}&exclude=current,hourly,minutely,alerts&units=metric&appid=`; //weather api url

    try {
        const response = await fetch(url + apiKey);
        const data = await response.json();
        renderParkData(data);
        const responseWeather = await fetch(urlWeather + apiKey2);
        const dataWeather = await responseWeather.json();
        renderWeatherData(dataWeather);

    } catch (error) {
        console.log(error)
    }
}

fetchData();



// const responses = await Promise.all([fetch(url + apiKey), fetch(urlWeather + apiKey2)]);
// const data = responses.map(response => response.json());
// const finalData = await Promise.all(data);
// renderData(finalData[0]);
// renderWeatherData(finalData[1]);