const convertGPS = (deg, dir) => Math.abs(parseFloat(deg)).toFixed(3) + ' ' + (dir === 'latitude' ? deg >= 0 ? 'N' : 'S' : deg >= 0 ? 'E' : 'W');
document.getElementById("state").innerHTML = stateList.map(state => `<option value="${state.value}">${state.name}</option>`).join('');

function renderData(data) {
    if (!data) return;

    let mappedDiv = '';
    data.data.map(park => {
        console.log(data)

        mappedDiv +=
            `<div class="card">
            <div>
                <img class="image" src="${park.images[0].url}" alt="${park.images[0].altText}" />
            </div>
            <h2>${park.fullName}</h2>
            <p class=description>${park.description}</p>
            <hr/>
            <div id="activity">
                <h3>Activities:</h3>
                <p>${park.activities.slice(0, 3).map(a => a.name).join(', ')}</p>
                <hr/>
                <h3>Location:</h3> <p>${convertGPS(park.latitude, 'latitude')} ${convertGPS(park.longitude, 'longitude')}</p>
                <hr/>
                <h3 id="linkPage"><a href=${park.url} target="_blank">More info...</a></h3>
            </div>
        </div>`;
    });
    document.getElementById('bottomSection').innerHTML = mappedDiv;
}
renderData();

function renderWeatherData(dataWeather) {
    if (!dataWeather) return;
    const { name } = dataWeather;
    const { icon, description } = dataWeather.weather[0];
    const { temp, humidity } = dataWeather.main;
    const { speed } = dataWeather.wind;
    console.log(icon)
    document.getElementById('nameState').innerText = "Welcome to " + name + " parks! Today`s weather";
    document.getElementById("iconDiv").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.getElementById("description").innerText = description;
    document.getElementById("description").innerText = description;
    document.getElementById("humidity").innerText = "Humidity: " + humidity;
    document.getElementById("wind").innerText = "Speed: " + speed;
    document.getElementById("arrow").innerText = "Scroll down to see the parks U+02193";

}

renderWeatherData();