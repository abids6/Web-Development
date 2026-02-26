/* ===== AREA ===== */
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

/* ===== PETS ===== */
function pet() {
  let animal = document.getElementById("animal").value;
  let emotion = document.getElementById("emotion").value;
  let output = document.getElementById("output");

  if (!animal || !emotion) {
    output.innerHTML = "Please select an animal and an emotion.";
    return;
  }

  let imageName = emotion + animal + ".jpg";

  output.innerHTML = `
    <h3>${emotion} ${animal}</h3>
    <img src="${imageName}" alt="${emotion} ${animal}" style="max-width:250px;">
  `;
}
