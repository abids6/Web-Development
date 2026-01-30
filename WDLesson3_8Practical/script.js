// For each challenge fix the error and explain the correction in the comment

/* Challenge 4: Does the function name match the event handler referenced in the event listener? */
function calculateVolume() {
  // FIX: The function name matches the onclick event in the HTML

  /* Challenge 5: Are there any errors in retrieving and parsing the information from the text inputs? */
  let radius = parseFloat(document.getElementById("radius").value);
  let height = parseFloat(document.getElementById("height").value);
  // FIX: parseFloat is used so decimal values work correctly

  /* Challenge 6: Does the variable output correctly create a reference to the output container? */
  let output = document.getElementById("output");
  // FIX: The ID matches the paragraph element in the HTML

  /* Challenge 7: Is the following calculation for volume of a cylinder correct? */
  let v = Math.PI * Math.pow(radius, 2) * height;
  // FIX: Math must be capitalized and the correct variable names are used

  /* Challenge 8: Are there any errors in displaying the output? */
  output.innerHTML = "Volume of the cylinder is " + v.toFixed(2);
  // FIX: Added a space in the string and formatted the number
}
