const button = document.getElementById("toggleButton");
const brawlers = document.querySelectorAll(".brawler");

let showingTop3 = false;

button.addEventListener("click", function () {

    showingTop3 = !showingTop3;

    brawlers.forEach(function (brawler, index) {

        if (showingTop3 && index >= 3) {
            brawler.style.display = "none";
        } else {
            brawler.style.display = "block";
        }

    });

    if (showingTop3) {
        button.textContent = "Show All";
    } else {
        button.textContent = "Show Top 3";
    }
});