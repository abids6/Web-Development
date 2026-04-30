let data;

async function init() {
  let link = "https://data.cityofnewyork.us/resource/h9gi-nx95.json?$limit=100";
  let info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i += 1) {
    let collision = data[i];
    let date = collision.crash_date ? collision.crash_date : "N/A";
    let time = collision.crash_time ? collision.crash_time : "N/A";
    let borough = collision.borough ? collision.borough : "N/A";
    let street = collision.on_street_name ? collision.on_street_name : "N/A";
    let injured = collision.number_of_persons_injured ? collision.number_of_persons_injured : "0";
    let killed = collision.number_of_persons_killed ? collision.number_of_persons_killed : "0";
    
    build += "<div class='fitted card'>";
    build += "<div class='card-title'>Motor Vehicle Collision</div>";
    build += "<div class='card-section'>" + borough + "</div>";
    build += "<div class='card-section'>" + injured + " Injured</div>";
    build += "<div class='card-section'>" + street + "</div>";
    build += "<div class='card-divider'></div>";
    build += "<div class='card-section'>" + date + " " + time + "</div>";
    build += "<div class='card-divider'></div>";
    build += "<div class='card-section'>Casualties: " + killed + "</div>";
    build += "</div>";
  }
  
  output.innerHTML = build;
}

function filterByBorough() {
  let output = document.getElementById("output");
  let borough = document.getElementById("boroughFilter").value;
  let result = document.getElementById("result");
  let ct = 0;

  for(let i = 0; i < data.length; i += 1) {
    let collision = data[i];
    if(collision.borough == borough || borough == "") {
      let date = collision.crash_date ? collision.crash_date : "N/A";
      let time = collision.crash_time ? collision.crash_time : "N/A";
      let borough_name = collision.borough ? collision.borough : "N/A";
      let street = collision.on_street_name ? collision.on_street_name : "N/A";
      let injured = collision.number_of_persons_injured ? collision.number_of_persons_injured : "0";
      let killed = collision.number_of_persons_killed ? collision.number_of_persons_killed : "0";
      
      build += "<div class='fitted card'>";
      build += "<div class='card-title'>Motor Vehicle Collision</div>";
      build += "<div class='card-section'>" + borough_name + "</div>";
      build += "<div class='card-section'>" + injured + " Injured</div>";
      build += "<div class='card-section'>" + street + "</div>";
      build += "<div class='card-divider'></div>";
      build += "<div class='card-section'>" + date + " " + time + "</div>";
      build += "<div class='card-divider'></div>";
      build += "<div class='card-section'>Casualties: " + killed + "</div>";
      build += "</div>";
      ct += 1;
    }
  }

  output.innerHTML = build;
}

let applyBtn = document.getElementById("applyBtn");

applyBtn.addEventListener("click", filterByBorough);

init();

