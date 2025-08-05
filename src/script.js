const users = [
    {
        place: "📍 Hanakusa Vending Walk",
        bio: "Cold drinks & cherry vibes 🌸🥤 A vending spot worth the stroll.",
        url: "https://images.unsplash.com/photo-1746555697990-3a405a5152b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
    },
    {
        place: "📍 Torii Mist Trail",
        bio: "Foggy trails, red gates 🌫️⛩️ Nature whispers here.",
        url: "https://images.unsplash.com/photo-1601823984263-b87b59798b70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8amFwYW58ZW58MHx8MHx8fDA%3D",
    },
    {
        place: "📍 Sakuramachi Steps",
        bio: "Petals, rooftops & quiet corners 🌸🏘️ Spring lives here.",
        url: "https://images.unsplash.com/photo-1542931287-023b922fa89b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGphcGFufGVufDB8fDB8fHww",
    },
    {
        place: "📍 Kojika Teahouse Lane",
        bio: "Silk, tea, and timeless charm 🍵👘 Stories in every step.",
        url: "https://images.unsplash.com/photo-1494588024300-e9df7ff98d78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGphcGFufGVufDB8fDB8fHww",
    },
    {
        place: "📍 Neon Yoru District",
        bio: "Lights, crowds & late-night tales 🌆🚕 Tokyo's electric pulse.",
        url: "https://plus.unsplash.com/premium_photo-1666700698946-fbf7baa0134a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fGphcGFufGVufDB8fDB8fHww",
    },
    {
        place: "📍 Akazuki Lantern Street",
        bio: "Lanterns glow, noodles flow 🍜🏮 Magic in every alley.",
        url: "https://images.unsplash.com/photo-1596713109885-c94bdfd7f19d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGphcGFufGVufDB8fDB8fHww",
    },
];

const cardsContainer = document.querySelector(".cards");
const searchInput = document.querySelector("#inp");

function createCard(user) {
    const card = document.createElement("div");
    card.className = "card group relative overflow-hidden rounded shadow-lg";

    card.innerHTML = `
        <img src="${user.url}" alt="${user.place}" class="bg-img w-full h-full object-cover block" />
        <div class="blurred-layer absolute bottom-0 w-full h-full bg-cover bg-bottom blur-[10px] z-1" style="background-image: url('${user.url}');"></div>
        <div class="content absolute bottom-[20px] left-[20px] text-white z-2">
            <h3 class="text-lg">${user.place}</h3>
        </div>
        <div class="absolute inset-0 bg-black bg-opacity-60 opacity-0 transition-opacity duration-500 ease-in-out flex items-center justify-center group-hover:opacity-90 p-2">
            <p class="text-[#ddd] leading-[1.2rem]">${user.bio}</p>
        </div>
    `;

    cardsContainer.appendChild(card);
}

function showUsers(arr) {
    cardsContainer.innerHTML = "";
    arr.forEach(createCard);
}

function debounce(fn, delay = 300) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args), delay);
    };
}

const handleSearch = debounce(() => {
    const val = searchInput.value.slice(0, 100).toLowerCase();
    searchInput.value = val;

    const filtered = users.filter((user) =>
        user.place.toLowerCase().includes(val)
    );

    if (filtered.length === 0) {
        document.querySelector(".msg").classList.remove("hidden");
        document.querySelector(".msg span").textContent = searchInput.value;
    } else {
        document.querySelector(".msg").classList.add("hidden");
    }

    showUsers(filtered);
}, 300);

searchInput.addEventListener("input", handleSearch);

// Initial render
showUsers(users);
