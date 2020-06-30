// Step 1 - assign elements from HTML and assign it to javascript variables
const btnSearch = document.getElementById('btnSearch');
const txtSearch = document.getElementById('food');
const resultArea = document.getElementById('result');
// This is where we will store out output as its process 
var out = "";
//=========================
// i changed var from let bcz of scope // i am not sure though
//========================

// an onclick function runs when the button is clicked
btnSearch.onclick = function () {
    out = "";
    //===========================
    // this will clear your result and add new result here
    //===========================

    // this returns the user input from the searchbar
    var searchTerm = txtSearch.value;
    const url = `https://api.punkapi.com/v2/beers?food=${searchTerm}`

    console.log(url);
    // fetch will go to the url
    fetch(url)
        .then(function (data) {
            // return jsonObject from the url
            txtSearch.value = "";
            //===========================
            // this will clear your input field
            //===========================
            return data.json();
        })
        .then(function (jsonObject) {
            console.log(jsonObject);
            for (beer in jsonObject) {
                const beerInfo = new Array(jsonObject[beer].name, jsonObject[beer].tagline, jsonObject[beer].description, jsonObject[beer].image_url)
                beerOut(beerInfo);
            }
            resultArea.innerHTML = out;
        })
        .catch(function (e) {
            console.log("Error: " + e);
        });
}

// This function we will use logic to take the array from beerOut and display it in HTML using template literals
function beerOut(beer) {
    console.log(beer);
    out += `<div class="beer">
    <div class="beerImage"><img src="${beer[3]}"/></div>
    <div class="beerText">
        <h2>${beer[0]}</h2>
        <h3>${beer[1]}</h3>
        <p><em>${beer[2]}</em></p>
        </div><!--beerText-->
        </div><!--beer-->
    `
    //This will go back to the resultArea.innerHTML = out; to display on the main page
}