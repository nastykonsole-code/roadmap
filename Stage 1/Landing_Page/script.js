import menu from "./menu.js";

const sections = {
    drinks: document.getElementById("drinks"),
    desserts: document.getElementById("desserts"),
    extras: document.getElementById("extras")
};


for (const category of Object.keys(menu)) {

    for (const element of menu[category]) {

        const product_card = document.createElement("div");

        product_card.className = `${category}-card ${element.id}`;

        product_card.innerHTML = `
            <h3>${element.name}</h3>
            <h4>${element.price}€</h4>
            <p>
                <i>${element.category}</i> • 
                ${element.description}
            </p>
        `;

        sections[category].appendChild(product_card);
    }
}