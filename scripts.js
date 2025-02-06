async function fetchData() { //reads input from the location search bar and logs json info to the console
  const location = document.getElementById('locationSearch').value;
  try {
    await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=XEJKBQRJ2QVRHHZ45N34CGYHA&contentType=json`)
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        console.log(response);
      })

    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }

    const data = JSON.parse(response);
    document.getElementById("location").innerHTML = data.address;


  } catch (error) {
    document.getElementById('weatherDisplay').innerHTML = 'Failed to load weather data.';
  }
}