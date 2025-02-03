fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/oklahoma?unitGroup=metric&key=XEJKBQRJ2QVRHHZ45N34CGYHA&contentType=json')
    .then(function (response) {
        return response.json();
    })
    .then(function (response) {
        console.log(response);
    }); // lines 1-7 successfully fetch the weather info for oklahoma and log to the console.

//code past this point does not console log correctly. debug asap.
let searchInput = document.getElementById('locationSearch').value; 
let submitButton = document.getElementById('submitButton').addEventListener('click',search());

async function search(){ 
  let results = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + searchInput + '?unitGroup=metric&key=XEJKBQRJ2QVRHHZ45N34CGYHA&contentType=json')
  console.log(results);
} 