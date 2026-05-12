//get( ) accepts an id of an element and returns the actual element with that id. This functions serves to shorten the code required to get an element
function get(id){
  return document.getElementById(id);
}

//Challeng 1: Create a function card that accepts a JSON of a 311 complaint, generates and returns an appropriate card for the complaint
function card(complaint){
  return `<div class="card">
    <h2>${info.plate}</h2>
    <p>${info.violation}</p>
    <p><a href="${info.summons_image}" target="_blank">View Summons Image</a></p>
  </div>`;
}


//Challenge 2: Create a function cards that accepts an array of JSON of Open Parking and Camera Violations, generates and return cards for each violation


