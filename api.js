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
    if (stateCode == "ca") {
        document.getElementById("topSection").style.backgroundImage = "url('./img//back2.jpg')"
    }
    else if (stateCode == "oh") {
        document.getElementById("topSection").style.backgroundImage = "url('./img/back3.jpg')"
    }
    else if (stateCode == "fl") {
        document.getElementById("topSection").style.backgroundImage = "url('./img/florida.jpeg')"
    }  
    else if (stateCode == "il") {
        document.getElementById("topSection").style.backgroundImage = "url('./img/back.jpg')"
    }  else {
        document.getElementById("topSection").style.backgroundImage = "url('./img/ohio.jpeg')"
    }

}

fetchData();