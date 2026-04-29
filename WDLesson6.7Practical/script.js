var allCollisions = [];
var filteredCollisions = [];

var API_URL = "https://data.cityofnewyork.us/resource/h9gi-nx95.json?$limit=100";

var cardsContainer = document.getElementById("cardsContainer");
var resultCount = document.getElementById("resultCount");
var loadingMessage = document.getElementById("loadingMessage");
var errorMessage = document.getElementById("errorMessage");
var boroughFilter = document.getElementById("boroughFilter");
var injuredFilter = document.getElementById("injuredFilter");
var killedFilter = document.getElementById("killedFilter");
var filterLogic = document.getElementById("filterLogic");
var applyBtn = document.getElementById("applyBtn");
var resetBtn = document.getElementById("resetBtn");

function loadData() {
    loadingMessage.classList.remove("hidden");
    errorMessage.classList.add("hidden");
    cardsContainer.innerHTML = "";
    resultCount.innerHTML = "";

    fetch(API_URL)
        .then(function(response) {
            if (!response.ok) {
                throw new Error("Failed to load data");
            }
            return response.json();
        })
        .then(function(data) {
            allCollisions = data;
            filteredCollisions = data;
            loadingMessage.classList.add("hidden");
            displayCards(filteredCollisions);
        })
        .catch(function(error) {
            loadingMessage.classList.add("hidden");
            errorMessage.classList.remove("hidden");
            errorMessage.textContent = "Error: " + error.message;
        });
}

function displayCards(collisions) {
    cardsContainer.innerHTML = "";

    if (collisions.length === 0) {
        cardsContainer.innerHTML = "<div class='no-results'><p>No collisions found with these filters.</p></div>";
        resultCount.textContent = "Results: 0 collisions";
        return;
    }

    var build = "";

    for (var i = 0; i < collisions.length; i += 1) {
        var collision = collisions[i];
        var date = collision.crash_date ? collision.crash_date : "N/A";
        var time = collision.crash_time ? collision.crash_time : "N/A";
        var borough = collision.borough ? collision.borough : "N/A";
        var street = collision.on_street_name ? collision.on_street_name : "N/A";
        var injured = collision.number_of_persons_injured ? collision.number_of_persons_injured : "0";
        var killed = collision.number_of_persons_killed ? collision.number_of_persons_killed : "0";
        var killedClass = "";

        if (killed > 0) {
            killedClass = "warning";
        }

        build += "<div class='card'>";
        build += "<h3>Collision Report</h3>";

        build += "<div class='card-info'>";
        build += "<span class='card-label'>Date</span>";
        build += "<span class='card-value'>" + date + "</span>";
        build += "</div>";

        build += "<div class='card-info'>";
        build += "<span class='card-label'>Time</span>";
        build += "<span class='card-value'>" + time + "</span>";
        build += "</div>";

        build += "<div class='card-info'>";
        build += "<span class='card-label'>Borough</span>";
        build += "<span class='card-value'>" + borough + "</span>";
        build += "</div>";

        build += "<div class='card-info'>";
        build += "<span class='card-label'>Location</span>";
        build += "<span class='card-value'>" + street + "</span>";
        build += "</div>";

        build += "<div class='card-info'>";
        build += "<span class='card-label'>Persons Injured</span>";
        build += "<span class='card-value'>" + injured + "</span>";
        build += "</div>";

        build += "<div class='card-info'>";
        build += "<span class='card-label'>Persons Killed</span>";
        build += "<span class='card-value " + killedClass + "'>" + killed + "</span>";
        build += "</div>";

        build += "</div>";
    }

    cardsContainer.innerHTML = build;
    resultCount.textContent = "Results: " + collisions.length + " collisions found";
}

function applyFilters() {
    var borough = boroughFilter.value;
    var minInjured = injuredFilter.value;
    var hasKilled = killedFilter.checked;
    var logic = filterLogic.value;
    filteredCollisions = [];

    for (var i = 0; i < allCollisions.length; i += 1) {
        var collision = allCollisions[i];
        var matchesBoroughFilter = false;
        var matchesInjuredFilter = false;
        var matchesKilledFilter = false;

        if (borough === "") {
            matchesBoroughFilter = true;
        } else {
            if (collision.borough === borough) {
                matchesBoroughFilter = true;
            }
        }

        if (minInjured === "") {
            matchesInjuredFilter = true;
        } else {
            var injured = parseInt(collision.number_of_persons_injured);
            if (isNaN(injured)) {
                injured = 0;
            }
            var minValue = parseInt(minInjured);
            if (injured >= minValue) {
                matchesInjuredFilter = true;
            }
        }

        if (hasKilled === false) {
            matchesKilledFilter = true;
        } else {
            var killed = parseInt(collision.number_of_persons_killed);
            if (isNaN(killed)) {
                killed = 0;
            }
            if (killed > 0) {
                matchesKilledFilter = true;
            }
        }

        var shouldInclude = false;
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

function resetFilters() {
    boroughFilter.value = "";
    injuredFilter.value = "";
    killedFilter.checked = false;
    filterLogic.value = "AND";
    filteredCollisions = allCollisions;
    displayCards(filteredCollisions);
}

applyBtn.onclick = applyFilters;
resetBtn.onclick = resetFilters;

loadData();

