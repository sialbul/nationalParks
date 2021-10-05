const apiKey = 'x7Gip5NstAUT2IRcLBkGgWGmHHSUGKwVr0hzJpCw';

async function fetchData() {
    const stateCode = document.getElementById("parks").value;
    const url = 'https://developer.nps.gov/api/v1/parks?stateCode=' + stateCode + '&limit=12&api_key=';
    try {
        const response = await fetch(url + apiKey);
        const data = await response.json();
        renderData(data);
    } catch (error) {
        console.log(error)
    }
}

fetchData();