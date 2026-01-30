// For each challenge fix the error and explain the correction in the comment

/* Challenge 4: Does the function name match the event handler referenced in the event listener? */
function calculateVolume() {
  // FIX: Function name matches the onclick event in the HTML

  /* Challenge 5: Are there any errors in retrieving and parsing the information from the text inputs? */
  let radius = parseFloat(document.getElementById("radius").value);
  let height = parseFloat(document.getElementById("height").value);
  // FIX: parseFloat allows decimal values

  /* Challenge 6: Does the variable output correctly create a reference to the output container? */
  let output = document.getElementById("output");
  // FIX: ID correctly references the output paragraph

  /* Challenge 7: Is the following calculation for volume of a cylinder correct? */
  let v = Math.PI * Math.pow(radius, 2) * height;
  // FIX: Correct formula and proper Math capitalization

  /* Challenge 8: Are there any errors in displaying the output? */
  output.innerHTML = "Volume of the cylinder is " + v.toFixed(2);
  // FIX: Output displays correctly with spacing and rounding
}
