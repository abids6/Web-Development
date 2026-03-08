    function calculateInterest(){

    // Get values from inputs
    let p = parseFloat(document.getElementById("principal").value);
    let r = parseFloat(document.getElementById("rate").value) / 100;
    let n = parseFloat(document.getElementById("times").value);
    let t = parseInt(document.getElementById("years").value);

    let output = "";

    // Loop through each year
    for(let year = 1; year <= t; year++){

        // Compound interest formula
        let amount = p * Math.pow((1 + r / n), n * year);

        // Build output string
        output += "Year " + year + ": $" + amount.toFixed(2) + "<br>";
  }

  // Display result
  document.getElementById("output").innerHTML = output;

}