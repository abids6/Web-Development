/* Challenge 2: Area calculator */

function area() {
  // Step 1: Get inputs and output element
  let length = Number(document.getElementById("length").value);
  let width = Number(document.getElementById("width").value);
  let output = document.getElementById("output");

  // Step 2: Decision + calculation
  if (length <= 0 || width <= 0) {
    output.innerHTML = "Inappropriate measurement";
  } else {
    let area = length * width;
    output.innerHTML = "Area: " + area;
  }
}

/* Challenge 3: Pets function (to be completed on pets.html) */
function pet() {
  // placeholder – complete on pets.html
}
