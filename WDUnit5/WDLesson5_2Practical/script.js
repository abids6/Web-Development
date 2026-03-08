// init() function is called when the page loads
function init(){

  let output = document.getElementById("output");

  let html = "";

  // loop to create 5 pizza cards
  for(let i = 1; i <= 5; i++){

    // random price between 10–20
    let price = (Math.random() * 10 + 10).toFixed(2);

    html += `
      <div class="pizzaCard">

        <img src="images/title${i}.png" class="title">

        <img src="images/pizza${i}.png" class="pizza">

        <p>Price: $${price}</p>

        Quantity:
        <input type="text">

        <input type="button" value="Buy">

      </div>
    `;
  }

  output.innerHTML = html;
}
