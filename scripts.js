fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/oklahoma?unitGroup=metric&key=XEJKBQRJ2QVRHHZ45N34CGYHA&contentType=json')
    .then(function (response) {
        return response.json();
    })
    .then(function (response) {
        console.log(response);
    }); // lines 1-7 successfully fetch the weather info for oklahoma and log to the console.

async function fetchData(){ //reads input from the location search bar and logs json info to the console
    const location = document.getElementById('locationSearch').value;
  try {
    await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=XEJKBQRJ2QVRHHZ45N34CGYHA&contentType=json`)
    .then(function (response) {
        return response.json();
    })
    .then(function (response) {
        console.log(response);
    });
  } catch (error) {
    return;
  }
}