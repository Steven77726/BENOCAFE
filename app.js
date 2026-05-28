const categories = [
  {
    id: "cocktails",
    label: "Signature",
    kicker: "Section 1 : Cocktails",
    title: "Signature",
    items: [
      {
        name: "Porn Star",
        price: "20€",
        description: "Vodka, fruit de la passion, vanille, citron vert, shot de champagne"
      },
      {
        name: "Moscow Mule",
        price: "16€",
        description: "Vodka, ginger beer, citron vert, menthe fraîche"
      },
      {
        name: "Mandarin Sour",
        price: "20€",
        description: "Gin, purée de litchi, citron, sirop pamplemousse"
      },
      {
        name: "Beno Signature",
        price: "20€",
        description: "Lemonana, menthe fraîche, arak"
      },
      {
        name: "Gin Tonic Framboise",
        price: "18€",
        description: "Gin, tonic, framboise fraîche, baie rose, citron"
      },
      {
        name: "Spritz Limoncello",
        price: "18€",
        description: "Limoncello, prosecco, eau pétillante, citron frais"
      }
    ]
  },
  {
    id: "vins",
    label: "Vins",
    kicker: "Carte des vins",
    title: "Carte des vins",
    items: [
      {
        name: "Blanc",
        price: "Verre 12€ / Bouteille 48€",
        description: "Aben Chardonnay"
      },
      {
        name: "Rouge",
        price: "Verre 12€ / Bouteille 48€",
        description: "Petit Chaban, Bordeaux"
      },
      {
        name: "Rosé",
        price: "Verre 12€ / Bouteille 48€",
        description: "Montaud"
      }
    ]
  },
  {
    id: "diner",
    label: "Dîner",
    kicker: "Section 3",
    title: "Carte à dîner",
    items: [
      {
        name: "Italian Toast",
        price: "18,90€",
        description: "Toast grillé au choix, pesto maison, burrata, tomates séchées, tomates cerises, pignons grillés et basilic."
      },
      {
        name: "Avocado Toast",
        price: "18,90€",
        description: "Toast grillé au choix, mousse d’avocat maison, avocat, saumon fumé, œuf mollet, zeste de citron et piment d’Espelette."
      },
      {
        name: "Italian Salad",
        price: "20€",
        description: "Roquette, tomates cerises, tomates séchées, burrata, copeaux de parmesan, pignons de pin et crème de balsamique."
      },
      {
        name: "César Saumon",
        price: "20€",
        description: "Romaine, tomates cerises, œuf mollet, saumon fumé, parmesan et sauce César."
      }
    ]
  },
  {
    id: "privatisation",
    label: "Privatisation",
    kicker: "Sur demande",
    title: "Privatisation",
    items: [
      {
        name: "Anniversaire",
        price: "Sur demande",
        description: "Événement à partir de 16 personnes jusqu’à 36 personnes."
      }
    ]
  }
];

const state = {
  categoryId: "cocktails"
};

const categoryTabs = document.querySelector("#categoryTabs");
const sectionKicker = document.querySelector("#sectionKicker");
const sectionTitle = document.querySelector("#sectionTitle");
const menuGrid = document.querySelector("#menuGrid");

renderTabs();
renderMenu();

function renderTabs() {
  categoryTabs.innerHTML = categories
    .map((category) => {
      const isActive = category.id === state.categoryId;
      return `<button class="tab-btn${isActive ? " is-active" : ""}" type="button" data-category="${category.id}" aria-pressed="${isActive}">${category.label}</button>`;
    })
    .join("");

  categoryTabs.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.categoryId = button.dataset.category;
      renderTabs();
      renderMenu();
    });
  });
}

function renderMenu() {
  const category = getActiveCategory();

  sectionKicker.textContent = category.kicker;
  sectionTitle.textContent = category.title;
  menuGrid.dataset.category = category.id;
  menuGrid.innerHTML = category.items.map(renderItem).join("");
}

function renderItem(item) {
  return `
    <article class="menu-item">
      <div class="item-title">
        <h3>${item.name}</h3>
        <strong>${item.price}</strong>
      </div>
      <p>${item.description}</p>
    </article>
  `;
}

function getActiveCategory() {
  return categories.find((category) => category.id === state.categoryId) || categories[0];
}
