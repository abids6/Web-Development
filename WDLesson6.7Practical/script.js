let allCollisions = [];
let filteredCollisions = [];

const API_URL = "https://data.cityofnewyork.us/resource/h9gi-nx95.json?$limit=100";

const cardsContainer = document.getElementById("cardsContainer");
const resultCount = document.getElementById("resultCount");
const loadingMessage = document.getElementById("loadingMessage");
const errorMessage = document.getElementById("errorMessage");
const boroughFilter = document.getElementById("boroughFilter");
const injuredFilter = document.getElementById("injuredFilter");
const killedFilter = document.getElementById("killedFilter");
const filterLogic = document.getElementById("filterLogic");
const applyBtn = document.getElementById("applyBtn");
const resetBtn = document.getElementById("resetBtn");

// Load data when page starts
async function loadData() {
    loadingMessage.classList.remove("hidden");
    errorMessage.classList.add("hidden");
    cardsContainer.innerHTML = "";
    resultCount.innerHTML = "";

    try {
        let response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error("Failed to load data");
        }
        let data = await response.json();
        allCollisions = data;
        filteredCollisions = data;
        loadingMessage.classList.add("hidden");
        displayCards(filteredCollisions);
    } catch (error) {
        loadingMessage.classList.add("hidden");
        errorMessage.classList.remove("hidden");
        errorMessage.textContent = "Error: " + error.message;
    }
}

// Display cards on the page
function displayCards(collisions) {
    cardsContainer.innerHTML = "";

    if (collisions.length === 0) {
        cardsContainer.innerHTML = "<div class='no-results'><p>No collisions found with these filters.</p></div>";
        resultCount.textContent = "Results: 0 collisions";
        return;
    }

    let cardsHTML = "";

    for (let i = 0; i < collisions.length; i++) {
        let collision = collisions[i];

        let date = collision.crash_date ? collision.crash_date : "N/A";
        let time = collision.crash_time ? collision.crash_time : "N/A";
        let borough = collision.borough ? collision.borough : "N/A";
        let street = collision.on_street_name ? collision.on_street_name : "N/A";
        let injured = collision.number_of_persons_injured ? collision.number_of_persons_injured : "0";
        let killed = collision.number_of_persons_killed ? collision.number_of_persons_killed : "0";

        let killedClass = "";
        if (killed > 0) {
            killedClass = "warning";
        }

        cardsHTML += "<div class='card'>";
        cardsHTML += "<h3>Collision Report</h3>";

        cardsHTML += "<div class='card-info'>";
        cardsHTML += "<span class='card-label'>Date</span>";
        cardsHTML += "<span class='card-value'>" + date + "</span>";
        cardsHTML += "</div>";

        cardsHTML += "<div class='card-info'>";
        cardsHTML += "<span class='card-label'>Time</span>";
        cardsHTML += "<span class='card-value'>" + time + "</span>";
        cardsHTML += "</div>";

        cardsHTML += "<div class='card-info'>";
        cardsHTML += "<span class='card-label'>Borough</span>";
        cardsHTML += "<span class='card-value'>" + borough + "</span>";
        cardsHTML += "</div>";

        cardsHTML += "<div class='card-info'>";
        cardsHTML += "<span class='card-label'>Location</span>";
        cardsHTML += "<span class='card-value'>" + street + "</span>";
        cardsHTML += "</div>";

        cardsHTML += "<div class='card-info'>";
        cardsHTML += "<span class='card-label'>Persons Injured</span>";
        cardsHTML += "<span class='card-value'>" + injured + "</span>";
        cardsHTML += "</div>";

        cardsHTML += "<div class='card-info'>";
        cardsHTML += "<span class='card-label'>Persons Killed</span>";
        cardsHTML += "<span class='card-value " + killedClass + "'>" + killed + "</span>";
        cardsHTML += "</div>";

        cardsHTML += "</div>";
    }

    cardsContainer.innerHTML = cardsHTML;
    resultCount.textContent = "Results: " + collisions.length + " collisions found";
}

// Apply filters to collisions
function applyFilters() {
    let borough = boroughFilter.value;
    let minInjured = injuredFilter.value;
    let hasKilled = killedFilter.checked;
    let logic = filterLogic.value;

    filteredCollisions = [];

    for (let i = 0; i < allCollisions.length; i++) {
        let collision = allCollisions[i];
        let matchesBoroughFilter = false;
        let matchesInjuredFilter = false;
        let matchesKilledFilter = false;

        // Check borough filter
        if (borough === "") {
            matchesBoroughFilter = true;
        } else {
            if (collision.borough === borough) {
                matchesBoroughFilter = true;
            }
        }

        // Check injured filter
        if (minInjured === "") {
            matchesInjuredFilter = true;
        } else {
            let injured = parseInt(collision.number_of_persons_injured);
            if (isNaN(injured)) {
                injured = 0;
            }
            let minValue = parseInt(minInjured);
            if (injured >= minValue) {
                matchesInjuredFilter = true;
            }
        }

        // Check killed filter
        if (hasKilled === false) {
            matchesKilledFilter = true;
        } else {
            let killed = parseInt(collision.number_of_persons_killed);
            if (isNaN(killed)) {
                killed = 0;
            }
            if (killed > 0) {
                matchesKilledFilter = true;
            }
        }

        // Apply AND or OR logic
        let shouldInclude = false;

        if (logic === "AND") {
            if (matchesBoroughFilter && matchesInjuredFilter && matchesKilledFilter) {
                shouldInclude = true;
            }
        } else if (logic === "OR") {
            if (matchesBoroughFilter || matchesInjuredFilter || matchesKilledFilter) {
                shouldInclude = true;
            }
        }

        if (shouldInclude) {
            filteredCollisions.push(collision);
        }
    }

    displayCards(filteredCollisions);
}

// Reset all filters
function resetFilters() {
    boroughFilter.value = "";
    injuredFilter.value = "";
    killedFilter.checked = false;
    filterLogic.value = "AND";
    filteredCollisions = allCollisions;
    displayCards(filteredCollisions);
}

// Event listeners
applyBtn.addEventListener("click", applyFilters);
resetBtn.addEventListener("click", resetFilters);

// Load data when page loads
loadData();

