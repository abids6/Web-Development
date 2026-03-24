/* Challenge 2: Complete the area and perimeter functions below for the rectangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function recArea(){
 let length=document.getElementById("length");
 let width=document.getElementById("width");
 let output=document.getElementById("output")

 let area=length.value * width.value;

 output.innerHTML = area;
}

function recPerimeter(){
  let L = parseFloat(document.getElementById("length").value);
  let W = parseFloat(document.getElementById("width").value);
  let output = document.getElementById("output");

  let perimeter = 2 * (L + W);
  output.innerHTML = perimeter;
}


/* Challenge 4: Complete the area and circumference functions below for the circle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 3.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
let pi = 3.1415926;

function cirArea() {
  let r = parseFloat(document.getElementById("radius").value);
  let output = document.getElementById("cirAreaOutput");

  if (isNaN(r)) {
    output.innerHTML = "Please enter a number.";
    return;
  }

  let area = pi * r * r;
  output.innerHTML = area;


}

function cirPerimeter() {
  let r = parseFloat(document.getElementById("radius").value);
  let output = document.getElementById("cirPerimeterOutput");

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
  let base = parseFloat(document.getElementById("base").value);
  let height = parseFloat(document.getElementById("height").value);
  let output = document.getElementById("triAreaOutput");

  if (isNaN(base) || isNaN(height)) {
    output.innerHTML = "Please enter valid numbers.";
    return;
  }

  let area = (base * height) / 2;
  output.innerHTML = "Area: " + area;
}

function triPerimeter(){
  let a = parseFloat(document.getElementById("sideA").value);
  let b = parseFloat(document.getElementById("sideB").value);
  let c = parseFloat(document.getElementById("sideC").value);
  let output = document.getElementById("triPerimeterOutput");

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    output.innerHTML = "Please enter valid numbers.";
    return;
  }

  let perimeter = a + b + c;
  output.innerHTML = "Perimeter: " + perimeter;
}