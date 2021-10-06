const convertGPS = (deg, dir) => Math.abs(parseFloat(deg)).toFixed(3) + ' ' + (dir === 'latitude' ? deg >= 0 ? 'N' : 'S' : deg >= 0 ? 'E' : 'W');

function renderData(data) {
    if (!data) return;
    console.log(data.data);

    let mappedDiv = '';

    data.data.map(park => {
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

// function showWeather(data){
//     document.getElementById('latter').style.backgroundImage= ${data.data[1].images[1].url}
// }