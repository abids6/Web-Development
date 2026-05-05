let data;

async function init(){

  let link = "https://data.cityofnewyork.us/resource/h9gi-nx95.json?$limit=100";
  info = await fetch(link);
  data = await info.json();

  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let collision = data[i];

    build += `<div class="fitted card">
                <h3>${collision.borough}</h3>
                <hr>
                <p>${collision.crash_date}</p>
                <p>${collision.crash_time}</p>
                <p>${collision.on_street_name}</p>
                <hr>
                <p>Injured: ${collision.number_of_persons_injured}</p>
                <p>Killed: ${collision.number_of_persons_killed}</p>
                <hr>
                <p>${collision.contributing_factor_vehicle_1}</p>
                <p>${collision.vehicle_type_code1}</p>
              </div>`;
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

    if(collision.borough == borough){
      build += `<div class="fitted card">
                  <h3>${collision.borough}</h3>
                  <hr>
                  <p>${collision.crash_date}</p>
                  <p>${collision.crash_time}</p>
                  <p>${collision.on_street_name}</p>
                  <hr>
                  <p>Injured: ${collision.number_of_persons_injured}</p>
                  <p>Killed: ${collision.number_of_persons_killed}</p>
                  <hr>
                  <p>${collision.contributing_factor_vehicle_1}</p>
                  <p>${collision.vehicle_type_code1}</p>
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

    if(collision.borough == borough && injuries == "1" && collision.number_of_persons_injured == 1){
      build += `<div class="fitted card">
                  <h3>${collision.borough}</h3>
                  <hr>
                  <p>${collision.crash_date}</p>
                  <p>${collision.crash_time}</p>
                  <p>${collision.on_street_name}</p>
                  <hr>
                  <p>Injured: ${collision.number_of_persons_injured}</p>
                  <p>Killed: ${collision.number_of_persons_killed}</p>
                  <hr>
                  <p>${collision.contributing_factor_vehicle_1}</p>
                  <p>${collision.vehicle_type_code1}</p>
                </div>`;

      ct += 1;
    }

    if(collision.borough == borough && injuries == "2" && collision.number_of_persons_injured == 2){
      build += `<div class="fitted card">
                  <h3>${collision.borough}</h3>
                  <hr>
                  <p>${collision.crash_date}</p>
                  <p>${collision.crash_time}</p>
                  <p>${collision.on_street_name}</p>
                  <hr>
                  <p>Injured: ${collision.number_of_persons_injured}</p>
                  <p>Killed: ${collision.number_of_persons_killed}</p>
                  <hr>
                  <p>${collision.contributing_factor_vehicle_1}</p>
                  <p>${collision.vehicle_type_code1}</p>
                </div>`;

      ct += 1;
    }
  }

  result.innerHTML = `${ct} Results found.`;
  output.innerHTML = build;
}