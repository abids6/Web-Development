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

