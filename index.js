function renderData(data) {
    if (!data) return;
    console.log(data.data);

    let mappedDiv = '';

    data.data.map(park => {
        // console.log('fullname:', park.fullName);
        mappedDiv += `<div class="card">
        <div><img class="image" src="${park.images[0].url}" alt="${park.images[0].altText}" /></div>

            <h3>${park.fullName}</h3>
            <p class=description>${park.description}</p>
            <h2>${park.activities[0].name}</h2>
        </div>`;
    });
    document.getElementById('bottomSection').innerHTML = mappedDiv;
}