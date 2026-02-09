function area() {
  let length = Number(document.getElementById("length").value);
  let width = Number(document.getElementById("width").value);
  let output = document.getElementById("output");

  if (length <= 0 || width <= 0) {
    output.innerHTML = "Inappropriate measurement";
  } else {
    output.innerHTML = "Area: " + (length * width);
  }
}

/* Pets Challenge */
function pet() {
  // These ids MUST exist in pets.html:
  // dropdown id="mood"  (happy/sad/etc)
  // dropdown id="petType" (cat/dog/bear)
  // output div id="petOutput"

  let mood = document.getElementById("mood").value;       // example: "funny" or "sad"
  let petType = document.getElementById("petType").value; // example: "cat" "dog" "bear"
  let out = document.getElementById("petOutput");

  // Build the image filename like: funnyCat.jpg, sadDog.jpg, etc.
  // Make sure your file names match EXACTLY.
  let file = mood + petType + ".jpg";  // example: "funnyCat.jpg"

  out.innerHTML = `
    <h3>Your Pet:</h3>
    <img src="${file}" alt="${mood} ${petType}" style="max-width:250px;">
  `;
}
