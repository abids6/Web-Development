function BHS(){
  let school = {
    name: "Bayside High School",
    image: "https://imagescdn.homes.com/i2/DR3rh3ZAFGmxdce_vrcZB-VfI1qR7cPIq11ixKmzhCY/117/bayside-high-school-bayside-ny-2-schoolphoto.jpg",
    address: "32-24 Corporal Kennedy Street, Bayside NY 11361"
  };

  let output = document.getElementById("output");
  // Challenge 1: Create and display a card of the information contained in the JSON variable school
  let build = `
    <div class="card">
      <h2>${school.name}</h2>
      <img src="${school.image}" alt="${school.name}">
      <p>${school.address}</p>
    </div>
  `;
  output.innerHTML = build;
}

function artist(){
  // Challenge 2: Fill the JSON below with the specified information
  let artist = {
    name: "Taylor Swift",
    album: "Midnights",
    image: "https://upload.wikimedia.org/wikipedia/en/f/f4/Taylor_Swift_-_Midnights.png",
    url: "https://en.wikipedia.org/wiki/Taylor_Swift"
  };

  let output = document.getElementById("output");
  // Challenge 3: Build a card for the information in the JSON. Make the image a hyperlink to the url provided.
  let build = `
    <div class="card">
      <h2>${artist.name}</h2>
      <p><strong>Album:</strong> ${artist.album}</p>
      <a href="${artist.url}" target="_blank" rel="noopener noreferrer">
        <img src="${artist.image}" alt="${artist.album}">
      </a>
      <p><a href="${artist.url}" target="_blank" rel="noopener noreferrer">More about ${artist.name}</a></p>
    </div>
  `;
  output.innerHTML = build;
}
