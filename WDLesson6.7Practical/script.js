let data;

async function init(){

  let link = "https://data.cityofnewyork.us/resource/h9gi-nx95.json?$limit=100";
  info = await fetch(link);
  data = await info.json();

  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let collision = data[i];

    let street = collision.on_street_name;

    if(street == undefined){
      street = collision.off_street_name;
    }

    if(street == undefined){
      street = collision.cross_street_name;
    }

    let factor = collision.contributing_factor_vehicle_1;

    if(factor == undefined){
      factor = "No Cause Listed";
    }

    let vehicle = collision.vehicle_type_code1;

    if(vehicle == undefined){
      vehicle = "No Vehicle Listed";
    }

    if(collision.borough != undefined && street != undefined){

      build += `<div class="fitted card">
                  <h3>${collision.borough}</h3>
                  <p>${collision.crash_date}</p>
                  <p>${collision.crash_time}</p>
                  <p>${street}</p>
                  <p>Injured: ${collision.number_of_persons_injured}</p>
                  <p>Killed: ${collision.number_of_persons_killed}</p>
                  <p>${factor}</p>
                  <p>${vehicle}</p>
                </div>`;

    }
  }

  output.innerHTML = build;
}

function filterByBorough(){
  let output = document.getElementById("output");
  let borough = document.getElementById("borough").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let collision = data[i];

    let street = collision.on_street_name;

    if(street == undefined){
      street = collision.off_street_name;
    }

    if(street == undefined){
      street = collision.cross_street_name;
    }

    let factor = collision.contributing_factor_vehicle_1;

    if(factor == undefined){
      factor = "No Cause Listed";
    }

    let vehicle = collision.vehicle_type_code1;

    if(vehicle == undefined){
      vehicle = "No Vehicle Listed";
    }

    if(collision.borough == borough && street != undefined){

      build += `<div class="fitted card">
                  <h3>${collision.borough}</h3>
                  <p>${collision.crash_date}</p>
                  <p>${collision.crash_time}</p>
                  <p>${street}</p>
                  <p>Injured: ${collision.number_of_persons_injured}</p>
                  <p>Killed: ${collision.number_of_persons_killed}</p>
                  <p>${factor}</p>
                  <p>${vehicle}</p>
                </div>`;

      ct += 1;
    }
  }

  result.innerHTML = `${ct} Results found.`;
  output.innerHTML = build;
}

function filterByBoroughAndInjuries(){
  let output = document.getElementById("output");
  let borough = document.getElementById("borough2").value;
  let injuries = document.getElementById("injuries").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let collision = data[i];

    let street = collision.on_street_name;

    if(street == undefined){
      street = collision.off_street_name;
    }

    if(street == undefined){
      street = collision.cross_street_name;
    }

    let factor = collision.contributing_factor_vehicle_1;

    if(factor == undefined){
      factor = "No Cause Listed";
    }

    let vehicle = collision.vehicle_type_code1;

    if(vehicle == undefined){
      vehicle = "No Vehicle Listed";
    }

    if(collision.borough == borough && injuries == "1" && collision.number_of_persons_injured == 1 && street != undefined){

      build += `<div class="fitted card">
                  <h3>${collision.borough}</h3>
                  <p>${collision.crash_date}</p>
                  <p>${collision.crash_time}</p>
                  <p>${street}</p>
                  <p>Injured: ${collision.number_of_persons_injured}</p>
                  <p>Killed: ${collision.number_of_persons_killed}</p>
                  <p>${factor}</p>
                  <p>${vehicle}</p>
                </div>`;

      ct += 1;
    }

    if(collision.borough == borough && injuries == "2" && collision.number_of_persons_injured == 2 && street != undefined){

      build += `<div class="fitted card">
                  <h3>${collision.borough}</h3>
                  <p>${collision.crash_date}</p>
                  <p>${collision.crash_time}</p>
                  <p>${street}</p>
                  <p>Injured: ${collision.number_of_persons_injured}</p>
                  <p>Killed: ${collision.number_of_persons_killed}</p>
                  <p>${factor}</p>
                  <p>${vehicle}</p>
                </div>`;

      ct += 1;
    }
  }

  result.innerHTML = `${ct} Results found.`;
  output.innerHTML = build;
}