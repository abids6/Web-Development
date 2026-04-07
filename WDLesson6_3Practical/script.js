/* Challenges 4,5, and 6 below task you to transform the following parallel arrays into arrays of JSON
let meat_titles = ["Beef Tips","Brisket","Ribeye","Steak"]
let meats = ["beeftips.jpg","brisket.jpg","ribeye.jpg","steak.jpg"];
let meat_prices = [18.99,27.99,21.99,15.99];
let seafood_titles = ["Clams","Crabs","Lobster","Scallop","Shrimp","Tuna"]
let seafood = ["clams.jpg","crabs.jpg","lobster.png","scallops.jpg","shrimp.jpg","tuna.jpg"];
let seafood_prices = [8.99,12.99,30.59,23.95,10.99,5.99];
let dessert_titles = ["Flan","Passion Berry","Oreo Cup"]
let dessert = ["flan.jpg","passionberry.jpeg","oreocup.jpg"];
let dessert_prices = [4.15,3.99,2.99];
*/

// Challenge 4: Create an array of JSON where each JSON contains the title, a link to an image and price for each meat.  let desserts = [
  { title: "Flan", image: "flan.jpg", price: 4.15 },
  { title: "Passion Berry", image: "passionberry.jpeg", price: 3.99 },
  { title: "Oreo Cup", image: "oreocup.jpg", price: 2.99 }
];// Solution to Challenge 4 provided below as an example in order to complete Challenges 5 and 6
let meats = [
  { title: "Beef Tips", image: "beeftips.jpg", price: 18.99 },
  { title: "Brisket", image: "brisket.jpg", price: 27.99 },
  { title: "Ribeye", image: "ribeye.jpg", price: 21.99 },
  { title: "Steak", image: "steak.jpg", price: 15.99 }
];
// Challenge 5: Create an array of JSON where each JSON contains the title, a link to an image and price for each seafood.  
let seafood = [
  { title: "Clams", image: "clams.jpg", price: 8.99 },
  { title: "Crabs", image: "crabs.jpg", price: 12.99 },
  { title: "Lobster", image: "lobster.png", price: 30.59 },
  { title: "Scallops", image: "scallops.jpg", price: 23.95 },
  { title: "Shrimp", image: "shrimp.jpg", price: 10.99 },
  { title: "Tuna", image: "tuna.jpg", price: 5.99 }
];


function displayMeats(){
  let title = document.querySelector("#title");
  let output = document.querySelector("#items");
  let build = ``;
  /* Challenge 7
     1) Using the array of JSON from Challenge 4, produce cards for all the items.  
     2) Change the title to "Meats".
  */
  title.textContent = "Meats";
  for (let i=0; i < meats.length; i++){
    let m = meats[i];
    build += `<div class="card">
              <h2>${m.title}</h2>
              <img src="images/${m.image}" class="item">
              <p>$${m.price}</p>
              </div>`;
  }
  output.innerHTML = build;
}

function displaySeafood(){
  let title = document.querySelector("#title");
  let output = document.querySelector("#output");
  let build = ``;
  /* Challenge 8
     1) Using the array of JSON from Challenge 5, produce cards for all the items.  
     2) Change the title to "Seafood".
  */
  title.textContent = "Seafood";
  for (let i=0; i < seafood.length; i++){
    let s = seafood[i];
    build += `<div class="card">
              <h2>${s.title}</h2>
              <img src="images/${s.image}" class="item">
              <p>$${s.price}</p>
              </div>`;
  }
  output.innerHTML = build;
}

function dessert(){
  let title = document.querySelector("#title");
  let output = document.querySelector("#output");
  let build = ``;
  /* Challenge 9
     1) Using the array of JSON from Challenge 6, produce cards for all the items.  
     2) Change the title to "Desserts".
  */
  title.textContent = "Desserts";
  for (let i=0; i < desserts.length; i++){
    let d = desserts[i];
    build += `<div class="card">
              <h2>${d.title}</h2>
              <img src="images/${d.image}" class="item">
              <p>$${d.price}</p>
              </div>`;
  }
  output.innerHTML = build;
}