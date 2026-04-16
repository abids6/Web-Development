async function init(){
  // Challenge 1: Retrieve the FBI data from https://raw.githubusercontent.com/rcastro2/WebDevelopment/refs/heads/main/data/fbi.json
  const link = "https://raw.githubusercontent.com/rcastro2/WebDevelopment/main/data/fbi.json";

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

    let criminals = Array.isArray(data)
      ? data
      : data.items || data.results || data.records || data.people || [];

    if ((!Array.isArray(criminals) || criminals.length === 0) && typeof data === 'object' && data !== null) {
      const firstArray = Object.values(data).find(value => Array.isArray(value) && value.length > 0);
      if (firstArray) {
        criminals = firstArray;
      }
    }

    if (!Array.isArray(criminals) || criminals.length === 0) {
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
        const posterData = criminal.images && criminal.images[0] ? criminal.images[0] : null;
        const posterUrl = posterData ? posterData.original || posterData.large || posterData.thumb || "" : "";
        const isPdf = posterUrl.toLowerCase().includes(".pdf");
        const posterViewer = isPdf
          ? `https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(posterUrl)}`
          : "";

        const posterMarkup = posterUrl
          ? isPdf
            ? `<p><a class="poster-link" target="_blank" rel="noopener noreferrer" href="${posterViewer}">View poster in PDF.js</a></p>`
            : `<img src="${posterUrl}" alt="${title} poster" class="criminal-image" />`
          : "";

        build += `
          <section class="criminal-card">
            <h2>${title}</h2>
            ${posterMarkup}
            <p><strong>Description:</strong> ${description}</p>
            ${subjects ? `<p><strong>Subjects:</strong> ${subjects}</p>` : ""}
            <p><strong>Aliases:</strong> ${aliases}</p>
            <p><strong>Reward:</strong> ${rewardText}</p>
            ${caseUrl ? `<p><a target="_blank" rel="noopener noreferrer" href="${caseUrl}">View FBI case page</a></p>` : ""}
          </section>
        `;
      }
    }

    output.innerHTML = build;
  } catch (error) {
    document.getElementById("output").innerHTML = `<p class="error">Unable to load FBI data: ${error.message}</p>`;
  }
}

