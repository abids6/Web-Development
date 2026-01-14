/* Challenge 2: Complete the area and perimeter functions below for the rectangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function recArea(){
 let 1=document.getElementById("length");
 let 2=document.getElementById("width");
 let output=document.getElementById("output)")

 let area=1.value * w.value;

 output.innerHTML area;
}

function recPerimeter(){
  let L = parseFloat(document.getElementById("length").value);
  let W = parseFloat(document.getElementById("width").value);
  let output = document.getElementById("output");


}


/* Challenge 4: Complete the area and circumference functions below for the circle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 3.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
let pi = 3.1415926;

function cirArea() {
  let r = parseFloat(document.getElementById("radius").value);
  let output = document.getElementById("output");

  if (isNaN(r)) {
    output.innerHTML = "Please enter a number.";
    return;
  }

  let area = pi * r * r;
  output.innerHTML = area;


}

function cirPerimeter() {
  let r = parseFloat(document.getElementById("radius").value);
  let output = document.getElementById("output");

  if (isNaN(r)) {
    output.innerHTML = "Please enter a number.";
    return;
  }

  let circumference = 2 * pi * r;
  output.innerHTML = circumference;
}



/* Challenge Bonus: Complete the area and perimeter functions below for the triangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function triArea(){

}

function triPerimeter(){

}