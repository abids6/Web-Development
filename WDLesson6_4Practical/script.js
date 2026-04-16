async function init(){
  // Challenge 1: Retrieve the FBI data from https://raw.githubusercontent.com/rcastro2/WebDevelopment/refs/heads/main/data/fbi.json
  const link = "https://raw.githubusercontent.com/rcastro2/WebDevelopment/refs/heads/main/data/fbi.json";

  try {
    const info = await fetch(link);
    if (!info.ok) {
      throw new Error(`Network response was not OK (${info.status})`);
    }

    const data = await info.json();
    const output = document.getElementById("output");
    let build = "";

    /* Challenge 2: 
            1) Traverse the data.  
            2) Create a variable to extract each criminal from data.
            3) Using the variable created, generate HTML to display the information for each criminal
       Note: For the pdf of the criminal poster include the following before the string interpolated url
       into a hyperlink in order to actually display the pdf in a new tab
       https://mozilla.github.io/pdf.js/web/viewer.html?file=${...}
    */

    const criminals = data.items || [];

    if (criminals.length === 0) {
      build = "<p>No criminal records were found in the FBI data.</p>";
    } else {
      for (const criminal of criminals) {
        const title = criminal.title || "Unknown Subject";
        const description = criminal.description || "No description available.";
        const caseUrl = criminal.url || "";
        const rewardText = criminal.reward_text || "No reward information provided.";
        const aliases = Array.isArray(criminal.aliases) ? criminal.aliases.join(", ") : criminal.aliases || "No aliases listed.";
        const subjects = Array.isArray(criminal.subjects)
          ? criminal.subjects.map(subject => subject.name).filter(Boolean).join(", ")
          : "";
        const posterUrl = (criminal.images && criminal.images[0] && criminal.images[0].original) || "";
        const posterViewer = posterUrl
          ? `https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(posterUrl)}`
          : "";

        build += `
          <section class="criminal-card">
            <h2>${title}</h2>
            ${posterUrl ? `<img src="${posterUrl}" alt="${title} poster" class="criminal-image" />` : ""}
            <p><strong>Description:</strong> ${description}</p>
            ${subjects ? `<p><strong>Subjects:</strong> ${subjects}</p>` : ""}
            <p><strong>Aliases:</strong> ${aliases}</p>
            <p><strong>Reward:</strong> ${rewardText}</p>
            ${caseUrl ? `<p><a target="_blank" rel="noopener noreferrer" href="${caseUrl}">View FBI case page</a></p>` : ""}
            ${posterViewer ? `<p><a class="poster-link" target="_blank" rel="noopener noreferrer" href="${posterViewer}">View poster in PDF.js</a></p>` : ""}
          </section>
        `;
      }
    }

    output.innerHTML = build;
  } catch (error) {
    document.getElementById("output").innerHTML = `<p class="error">Unable to load FBI data: ${error.message}</p>`;
  }
}

