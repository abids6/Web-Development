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

        <img src="images/pizza${i}.jpg" class="pizza">

        <p>Price: $${price}</p>

        Quantity:
        <input type="text" class="quantity" id="qty${i}">

        <input type="button" value="Buy" onclick="calculate(${price}, ${i})">

      </div>
    `;
  }

  output.innerHTML = html;
}

// Calculate total price
function calculate(price, pizzaNumber){
  let quantity = parseInt(document.getElementById("qty" + pizzaNumber).value);
  let total = price * quantity;
  alert("Total: $" + total.toFixed(2));
}
