const convertGPS = (deg, dir) => Math.abs(parseFloat(deg)).toFixed(3) + ' ' + (dir === 'latitude' ? deg >= 0 ? 'N' : 'S' : deg >= 0 ? 'E' : 'W');

document.getElementById("state").innerHTML = stateList.map(state => `<option data-name="${state.name}" value="${state.value}" ${state.value === 'ca' && 'selected=selected'}>${state.name}</option>`).join('');

function renderData(data) {
    if (!data) return;
    scroll(0, 0);
    let mappedDiv = '';
    data.data.map(park => {
        mappedDiv +=
            `<div class="card">
                <div>
                    <img class="image" src="${park.images[0].url}" alt="${park.images[0].altText}" />
                </div>
                <h2 class="name cardTop">${park.fullName}</h2>
                <p class="description cardTop">${park.description}</p>
                <hr/>
                <div id="activity">
                    <h3>
                        <i class="fa fa-tree" aria-hidden="true"></i>
                        Activities
                    </h3>
                    <p>
                        ${park.activities.slice(0, 3).map(a => a.name).join(', ')}
                    </p>
                    <hr/>
                    <h3>
                        <i class="fa fa-map-pin" aria-hidden="true"></i>
                        Location
                    </h3> 
                    <p>
                        ${convertGPS(park.latitude, 'latitude')} ${convertGPS(park.longitude, 'longitude')}
                    </p>
                    <hr/>
                    <h3 id="linkPage">
                        <a href=${park.url} target="_blank"> 
                            <i class="fa fa-info-circle" aria-hidden="true"></i> More info...
                    </a>
                </h3>
            </div>
        </div>`;
    });
    document.getElementById('bottomSection').innerHTML = mappedDiv;
}
renderData();

function renderWeatherData(dataWeather) {
    if (!dataWeather) return;

    let mappedDivWeather = `
    <div class="weatherCard">
        <h1 id="nameState">Welcome to <br/>
         <span id="nameBig">${dataWeather.name}</span> parks!</h1>
        <div class="weatherSec">
            <h3> Today's weather</h3>
            <img id="iconDiv" src="https://openweathermap.org/img/wn/${dataWeather.weather[0].icon}.png"></span>
            <h3 id="description">${dataWeather.weather[0].description}</h3>
                <div class="symbols">
                    <h3 id="temp"><i class="fas fa-thermometer-three-quarters"></i> ${dataWeather.main.temp} °F</h3>
                    <h3 id="humidity"><i class="fas fa-tint"></i> ${dataWeather.main.humidity}</h3>
                    <h3 id="wind"><i class="fas fa-wind"></i> ${dataWeather.wind.speed}</h3>
                </div>
        </div>
    </div>   
    `;
    document.getElementById('hero').innerHTML = mappedDivWeather;
}
renderWeatherData();