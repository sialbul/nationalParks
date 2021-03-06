const convertGPS = (deg, dir) => Math.abs(parseFloat(deg)).toFixed(3) + ' ' + (dir === 'latitude' ? deg >= 0 ? 'N' : 'S' : deg >= 0 ? 'E' : 'W');

function renderParkData(data) {
    if (!data) return;
    scroll(0, 0);
    let mappedDiv = '';
    data.data.map(park => {

                mappedDiv +=
                    `<div class="card">
                        <div>
                            ${park.images[0]?.url ? `<img class="image" src="${park.images[0].url}" alt="${park.images[0].altText}" />` : 'src="./img/back3.jpg"'}
                        </div>
                        <h2 class="name cardTop">${park.fullName}</h2>
                        <p class="description cardTop">${park.description}</p>
                        <hr/>
                        <div id="activity">
                            <h3><i class="fa fa-tree" aria-hidden="true"></i> Activities</h3>
                            <ul id="activites">
                                    ${park.activities?.length > 0 ? `${park.activities.slice(0, 3).map(a =>`<li>${a.name}</li>`).join(' ')}` : '<p>No activities are available</p>'}
                            </ul>
                                <hr/>
                            <h3><i class="fa fa-map-pin" aria-hidden="true"></i> Location</h3> 
                            <p>${convertGPS(park.latitude, 'latitude')} ${convertGPS(park.longitude, 'longitude')}</p>
                                <hr/>
                            <h3 id="linkPage"><a href=${park.url} target="_blank"><i class="fa fa-info-circle" aria-hidden="true"></i> More info...</a></h3>
                        </div>
                    </div>`;
    });
    document.getElementById('bottomSection').innerHTML = mappedDiv;
}
renderParkData();


function renderWeatherData(dataWeather) {
    if (!dataWeather) return;
    let mappedDivWeather=[];
    let weatherPart;
    const stateCode = document.getElementById("state").value;
    const stateName = document.querySelector(`[value=${stateCode}]`).getAttribute('data-name');

    const userWeather= document.getElementById('daysSelect').value;

    let namePart = `<h1 id="nameState">Welcome to <br/>
    <span id="nameBig">${stateName}</span> parks!</h1>
    <h3>Weather forecast for the next ${userWeather} days... </h3>`;

    const daysLength = (dataWeather.list.length)/5*userWeather;
    for(let i=0;i<daysLength;i++){
       
        var date =new Date((dataWeather.list[i].dt_txt).replace(/-/g,'/')); //fixing invalid date
        if(date.getHours() == 15){ //getting the weather forecast at 3pm 
  
            weatherPart= `<div class="weatherSec">
                            <img id="iconDiv" src="https://openweathermap.org/img/wn/${dataWeather.list[i].weather[0].icon}.png">
                            <h3 id="description">${dataWeather.list[i].weather[0].description}</h3>
                            <h3>${date.toLocaleDateString('en-US')}</h3>
                      </div>`
            mappedDivWeather.push(weatherPart);
        };

        let weatherList = `<div class="weatherCard">
                                ${namePart}
                                <div class="symbolCard">
                                ${mappedDivWeather.join("")}
                                </div>
                            </div>   
                        `;
        document.getElementById('hero').innerHTML = weatherList;
        }
    }
renderWeatherData();

document.getElementById("year").innerHTML = new Date().getFullYear();