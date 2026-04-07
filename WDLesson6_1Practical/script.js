/*
  List of all the images. "beeftips.jpg","brisket.jpg","ribeye.jpg","steak.jpg","clams.jpg","crabs.jpg","lobster.png","scallops.jpg","shrimp.jpg","tuna.jpg","flan.jpg","passionberry.jpeg","oreocup.jpg"
*/ 
//Challenge 1: Add the appropriate images to each array below from the list above.
//Challenge 2: Add appropriate prices for each food in their corresponding array.
//Challenge 3: Add appropriate titles for each food in their corresponding array.  Use the image names as a hint for the food title.
let meat_titles = ["Beef Tips","Brisket","Ribeye","Steak"];
let meats = ["beeftips.jpg","brisket.jpg","ribeye.jpg","steak.jpg"];
let meat_prices = [21.99, 19.99, 24.99, 29.99];
let seafood_titles = ["Clams","Crabs","Lobster","Scallops","Shrimp","Tuna"];
let seafood = ["clams.jpg","crabs.jpg","lobster.png","scallops.jpg","shrimp.jpg","tuna.jpg"];
let seafood_prices = [15.99, 18.99, 25.99, 22.99, 16.99, 20.99];
let dessert_titles = ["Flan","Passionberry","Oreo Cup"];
let dessert = ["flan.jpg","passionberry.jpeg","oreocup.jpg"];
let dessert_prices = [8.99, 9.99, 7.99];

function init(){
  //Each food has its own output container
  let m = document.getElementById("meats");
  let s = document.getElementById("seafood");
  let d = document.getElementById("dessert");
  let build = ``;
  //Challenge 4:  Build cards for the meats. Place the build in the meat container. 
for(let i = 0; i < meats.length; i+=1){
  build += ` <div class="card">
  <h2> ${meat_titles[i]}</h2>
  <img src="images/${meats[i]}" class="food"> 
  <span>$${meat_prices[i]}</span>
  </div>`;
}
  m.innerHTML = build;
  //Challenge 5:  Build cards for the seafoods. Place the build in the seafood container.
  build = ``;
  for(let i = 0; i < seafood.length; i+=1){
    build += ` <div class="card">
    <h2> ${seafood_titles[i]}</h2>
    <img src="images/${seafood[i]}" class="food"> 
    <span>$${seafood_prices[i]}</span>
    </div>`;
  }
  s.innerHTML = build;
  //Challenge 6:  Build cards for the desserts. Place the build in the dessert container.
  build = ``;
  for(let i = 0; i < dessert.length; i+=1){
    build += ` <div class="card">
    <h2> ${dessert_titles[i]}</h2>
    <img src="images/${dessert[i]}" class="food"> 
    <span>$${dessert_prices[i]}</span>
    </div>`;
  }
  d.innerHTML = build;
}
