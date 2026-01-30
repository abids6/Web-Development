// For each challenge fix the error and explain the correction in the comment

/* Challenge 4: Does the function name match the event handler referenced in the event listener? */
function calculateVolume() {
  // FIX: The function name must match the name used in the HTML onclick event

  /* Challenge 5: Are there any errors in retrieving and parsing the information from the text inputs? */
  let radius = parseFloat(document.getElementById("radius").value);
  let height = parseFloat(document.getElementById("height").value);
  // FIX: parseFloat is better than parseInt because radius and height can be decimals

  /* Challenge 6: Does the variable output correctly create a reference to the output container? */
  let output = document.getElementById("output");
  // FIX: Added semicolon and confirmed the ID matches the HTML element

  /* Challenge 7: Is the following calculation for volume of a cylinder correct? */
  let v = Math.PI * Math.pow(radius, 2) * height;
  // FIX: Math must be capitalized and variables must match radius and height

  /* Challenge 8: Are there any errors in displaying the output? */
  output.innerHTML = "Volume of the cylinder is " + v.toFixed(2);
  // FIX: Added a space in the sentence and rounded the result for readability
}
