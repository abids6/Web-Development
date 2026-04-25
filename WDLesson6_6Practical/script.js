let data;
async function init(){
  
  //let link = "https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=1000"
  let link = "311.json"
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let complaint = data[i];
    build += `<div class="fitted card">
                 <h3>${complaint.complaint_type}</h3>
                 <hr>
                 <p>${complaint.borough}</p>
                 <p>${complaint.incident_zip}</p>
                 <p>${complaint.descriptor}</p>
                 <hr>
                 <p>${complaint.created_date}</p>
                 <hr>
                 <p>${complaint.agency}</p>
              </div>`    
  }
  output.innerHTML = build;
}

// Code below demonstrates the basic process to filter information.  Use as a guide for Challenge 2 and 4.
function filterByBorough(){
  let output = document.getElementById("output");
  let borough = document.getElementById("borough").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let complaint = data[i];
    if(complaint.borough == borough){
      build += `<div class="fitted card">
                    <h3>${complaint.complaint_type}</h3>
                    <hr>
                    <p>${complaint.borough}</p>
                    <p>${complaint.incident_zip}</p>
                    <p>${complaint.descriptor}</p>
                    <hr>
                    <p>${complaint.created_date}</p>
                    <hr>
                    <p>${complaint.agency}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

// Challenge 2: Create an event handler to filter the 311 Service Request by zip code
function filterByZip(){
  let output = document.getElementById("output");
  let zip = document.getElementById("zip").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;
  
  for(let i = 0; i < data.length; i+=1){
    let complaint = data[i];
    if(complaint.incident_zip == zip){
      build += `<div class="fitted card">
                    <h3>${complaint.complaint_type}</h3>
                    <hr>
                    <p>${complaint.borough}</p>
                    <p>${complaint.incident_zip}</p>
                    <p>${complaint.descriptor}</p>
                    <hr>
                    <p>${complaint.created_date}</p>
                    <hr>
                    <p>${complaint.agency}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

// Challenge 4: Create an event handler to filter the 311 Service Request by complaint type
function filterByComplaint(){
  let output = document.getElementById("output");
  let complaintType = document.getElementById("complaint").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;
  
  for(let i = 0; i < data.length; i+=1){
    let complaint = data[i];
    if(complaint.complaint_type == complaintType){
      build += `<div class="fitted card">
                    <h3>${complaint.complaint_type}</h3>
                    <hr>
                    <p>${complaint.borough}</p>
                    <p>${complaint.incident_zip}</p>
                    <p>${complaint.descriptor}</p>
                    <hr>
                    <p>${complaint.created_date}</p>
                    <hr>
                    <p>${complaint.agency}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

