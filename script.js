const brawlers = [
    {
        name: "Edgar",
        rank: 1,
        gameplay: 10,
        fun: 10,
        design: 9,
        mode: "Solo Showdown",
        achievement: "9 kills in Solo Showdown",
        image: "images/edgar.png"
    },

    {
        name: "Colt",
        rank: 2,
        gameplay: 9,
        fun: 7,
        design: 8,
        mode: "Gem Grab, Brawl Ball",
        achievement: "Triple kill with Super",
        image: "images/colt.png"
    },

    {
        name: "Surge",
        rank: 3,
        gameplay: 10,
        fun: 8,
        design: 8,
        mode: "Showdown",
        achievement: "Chained 3 Supers in a row",
        image: "images/surge.png"
    },
    {
        name: "Griff",
        rank: 4,
        gameplay: 9,
        fun: 7,
        design: 8,
        mode: "Gem Grab",
        achievement: "18 kills in one game",
        image: "images/griff.png"
    },

    {
        name: "Fang",
        rank: 5,
        gameplay: 8,
        fun: 10,
        design: 9,
        mode: "3v3s",
        achievement: "Triple kill",
        image: "images/fang.png"
    },

    {
        name: "8-Bit",
        rank: 6,
        gameplay: 8,
        fun: 9,
        design: 8,
        mode: "Gem Grab",
        achievement: "No personal achievement yet",
        image: "images/8-bit.png"
    },

    {
        name: "Brock",
        rank: 7,
        gameplay: 6,
        fun: 5,
        design: 7,
        mode: "3v3s",
        achievement: "No personal achievement yet",
        image: "images/brock.png"
    },

    {
        name: "Crow",
        rank: 8,
        gameplay: 10,
        fun: 7,
        design: 10,
        mode: "Showdown and Haste",
        achievement: "No personal achievement yet",
        image: "images/crow.png"
    },

    {
        name: "Bibi",
        rank: 9,
        gameplay: 7,
        fun: 7,
        design: 7,
        mode: "Knockout and Brawl Ball",
        achievement: "No personal achievement yet",
        image: "images/bibi.png"
    },

    {
        name: "Tick",
        rank: 10,
        gameplay: 7,
        fun: 7,
        design: 8,
        mode: "3v3s",
        achievement: "No personal achievement yet",
        image: "images/tick.png"
    }
];

const container = document.getElementById("brawlerContainer");

brawlers.forEach(function (brawler) {

    const overall = (brawler.gameplay + brawler.fun + brawler.design) / 3;

    const card = document.createElement("div");

    card.classList.add("brawler");
    card.dataset.rank = brawler.rank;
    card.dataset.overall = overall;
    card.dataset.gameplay = brawler.gameplay;
    card.dataset.fun = brawler.fun;
    card.dataset.design = brawler.design;

    card.innerHTML = `
        <img src="${brawler.image}" alt="${brawler.name}">

        <h3>#${brawler.rank}: ${brawler.name}</h3>

        <div class="rating">
            <span>Gameplay</span>
            <span>${brawler.gameplay}/10</span>
        </div>

        <div class="rating-bar">
            <div class="rating-fill" style="width: ${brawler.gameplay * 10}%;"></div>
        </div>

        <div class="rating">
            <span>Fun</span>
            <span>${brawler.fun}/10</span>
        </div>

        <div class="rating-bar">
            <div class="rating-fill" style="width: ${brawler.fun * 10}%;"></div>
        </div>

        <div class="rating">
            <span>Design</span>
            <span>${brawler.design}/10</span>
        </div>

        <div class="rating-bar">
            <div class="rating-fill" style="width: ${brawler.design * 10}%;"></div>
        </div>
        <p class="overall">Overall: ${overall.toFixed(1)}/10</p>

        <p>Favorite mode: ${brawler.mode}</p>

        <p>Achievement: ${brawler.achievement}</p>
    `;

    container.appendChild(card);
});

const sortSelect = document.getElementById("sortSelect");

sortSelect.addEventListener("change", function () {

    const cards = Array.from(container.children);

    const sortBy = sortSelect.value;

    cards.sort(function (a, b) {
        return Number(b.dataset[sortBy]) - Number(a.dataset[sortBy]);
    });

    cards.forEach(function (card) {
        container.appendChild(card);
    });

});

const searchInput = document.getElementById("searchInput");
const toggleButton = document.getElementById("toggleButton");

let showingTop3 = false;

function updateDisplay() {

    const searchTerm = searchInput.value.toLowerCase();

    const cards = Array.from(container.children);

    let visibleCards = cards.filter(function (card) {

        const brawlerName = card.querySelector("h3").textContent.toLowerCase();

        return brawlerName.includes(searchTerm);

    });

    cards.forEach(function (card) {
        card.style.display = "none";
    });

    visibleCards.forEach(function (card, index) {

        if (!showingTop3 || index < 3) {
            card.style.display = "block";
        }

    });
}

searchInput.addEventListener("input", function () {
    updateDisplay();
});

toggleButton.addEventListener("click", function () {

    showingTop3 = !showingTop3;

    if (showingTop3) {
        toggleButton.textContent = "Show All";
    } else {
        toggleButton.textContent = "Show Top 3";
    }

    updateDisplay();

});