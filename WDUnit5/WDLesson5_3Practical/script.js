function balance(){
  alert("Function called");
  // Get input values from form
  let p = parseFloat(document.getElementById("p").value);
  let r = parseFloat(document.getElementById("r").value) / 100;
  let t = parseInt(document.getElementById("t").value);
  
  // Validate inputs
  if (isNaN(p) || isNaN(r) || isNaN(t) || p <= 0 || r <= 0 || t <= 0) {
    alert("Please enter valid positive numbers for Principal, Interest Rate, and Time.");
    return;
  }
  
  // n = 1 because yearly compounding
  let n = 1;

  let output = document.getElementById("output");
  if (!output) {
    alert("Output element not found");
    return;
  }

  // Build table HTML
  let build = `
  <table border="1" cellpadding="10">
    <tr>
      <th>Year</th>
      <th>Balance</th>
    </tr>
  `;

  // Calculate balance for each year
  for(let year = 1; year <= t; year++){
    // A = P(1 + r/n)^(nt)
    let a = p * Math.pow((1 + r/n), (n * year));

    // Add row to table
    build += `
      <tr>
        <td>${year}</td>
        <td>$${a.toFixed(2)}</td>
      </tr>
    `;
  }

  // Close table
  build += "</table>";

  // Display the results
  output.innerHTML = build;
}
