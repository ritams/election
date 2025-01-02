// Path to the folder containing images
const imgFolder = "/assets/";

// Get references to elements
const countrySelector = document.getElementById("country-selector");
const indianElectionSelector = document.getElementById("indian-election-selector");
const margin = document.getElementById("margin-image");
const vote = document.getElementById("vote-image");

countrySelector.value = "India";
indianElectionSelector.value = "AEACwinner";

// Add event listener to the dropdown menu
countrySelector.addEventListener("change", function () {
    // Get the selected value
    const selectedValue = this.value;

    // Construct the new image source
    const marginSrc = imgFolder + selectedValue + "-margin.jpg";
    // Update the image's src attribute
    margin.src = marginSrc;
});

// Add event listener to the dropdown menu
indianElectionSelector.addEventListener("change", function () {
    // Get the selected value
    const selectedValue = this.value;

    // Construct the new image source
    const voteSrc = imgFolder + selectedValue + ".jpg";

    // Update the image's src attribute
    vote.src = voteSrc;
});

function toggle() {
    var x = document.getElementById("hidden");
    var y = document.getElementById("insight")

    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.display = "block"
    } else {
        x.style.display = "block";
        y.style.display = "none"

    }
}
