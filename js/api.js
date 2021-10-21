const apiKey = 'x7Gip5NstAUT2IRcLBkGgWGmHHSUGKwVr0hzJpCw'; //national state park api
const apiKey2 ="bea611428821d3ac08d2f293893ff247"; //weather api

document.getElementById("state").innerHTML = stateList.map(state => `<option data-name="${state.name}" value="${state.value}" ${state.value === 'ca' && 'selected=selected'}>${state.name}</option>`).join('');

async function fetchData() {
    const stateCode = document.getElementById("state").value; 
    const nameCity = document.querySelector(`[value=${stateCode}]`).getAttribute('data-name');
    
    const url = 'https://developer.nps.gov/api/v1/parks?stateCode=' + stateCode + '&limit=12&api_key='; //national park url
    const urlWeather = 'https://api.openweathermap.org/data/2.5/weather?q=' + nameCity + '&units=imperial&appid='; //weather api url
    try {
        const responses = await Promise.all([fetch(url + apiKey),fetch(urlWeather + apiKey2 )]);
        const data = responses.map(response => response.json());
        const finalData=  await Promise.all(data);
        renderData (finalData[0]);
        renderWeatherData(finalData[1]);
    }    
    catch (error) {
        console.log(error)
    }
}

fetchData();



        // const response = await fetch(url + apiKey);
        // const data = await response.json();
        // renderData(data);
        // const responseWeather = await fetch(urlWeather + apiKey2);
        // const dataWeather = await responseWeather.json();
        // renderWeatherData(dataWeather);