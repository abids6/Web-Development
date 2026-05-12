//Data Source: https://data.cityofnewyork.us/City-Government/Open-Parking-and-Camera-Violations/nc67-uf89

let data, output, result;
function init(){
  $.ajaxSetup({async: false});
  data = $.getJSON("data.js").responseJSON;

  output = get("output");

  //Challenge 2: Test the card( ) developed in Challenge 1 by displaying the first violation to the webpage.
  for(let i = 0; i < data.length; i+=1){
    let violation = data[i];
    bulid+=card(violation);
  }
  output.innerHTML = build;


  //Challenge 4: Display all the Open Parking and Camera Violations to the web page using the cards( ) from Challenge 3.
  
  
}


