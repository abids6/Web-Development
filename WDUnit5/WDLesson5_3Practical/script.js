function balance(){

  // 1️⃣ retrieve values
  let p = parseFloat(document.getElementById("p").value);
  let r = parseFloat(document.getElementById("r").value) / 100;
  let t = parseInt(document.getElementById("t").value);

  // n = 1 because yearly compounding
  let n = 1;

  let output = document.getElementById("output");

  // 2️⃣ start table
  let build = `
  <table border="1" cellpadding="10">
    <tr>
      <th>Year</th>
      <th>Balance</th>
    </tr>
  `;

  // 3️⃣ loop through years
  for(let year = 1; year <= t; year++){

    // 4️⃣ compound interest formula
    let a = p * Math.pow((1 + r/n), (n * year));

    // 5️⃣ build row
    build += `
      <tr>
        <td>${year}</td>
        <td>$${a.toFixed(2)}</td>
      </tr>
    `;
  }

  // 6️⃣ close table
  build += "</table>";

  // display
  output.innerHTML = build;

}
