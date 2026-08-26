import React, { useState } from "react";

const categories = [
  "All",
  "China Town Veg Appetizer",
  "Indian Main Course",
  "Rice & Breads",
  "Beverages",
  "Desserts",
];

const menuItems = [
  // ==============================
  // CHINA TOWN VEG APPETIZER
  // ==============================

  {
    id: 1,
    category: "China Town Veg Appetizer",
    name: "Chilli Paneer",
    price: "₹269 / ₹299",
    description: "Dry / Gravy",
    image:
      "https://images.unsplash.com/photo-1642821369314-100fece91d3c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: 2,
    category: "China Town Veg Appetizer",
    name: "Veg Manchurian",
    price: "₹249 / ₹289",
    description: "Dry / Gravy",
    image:
      "https://images.unsplash.com/photo-1676976197902-4a01ee87cd78?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: 3,
    category: "China Town Veg Appetizer",
    name: "Veg Noodle",
    price: "₹199",
    description: "Stir-fried noodles with fresh vegetables.",
    image:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 4,
    category: "China Town Veg Appetizer",
    name: "Chilli Garlic Noodle",
    price: "₹219",
    description: "Noodles tossed with chilli and garlic.",
    image:
      "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 5,
    category: "China Town Veg Appetizer",
    name: "Singapuri Noodle",
    price: "₹249",
    description: "Spicy Singapore-style vegetable noodles.",
    image:
      "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 6,
    category: "China Town Veg Appetizer",
    name: "Pasta",
    price: "₹249",
    description: "Available in Red Sauce and White Sauce.",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 7,
    category: "China Town Veg Appetizer",
    name: "Crispy Corn",
    price: "₹289",
    description: "Crispy golden corn tossed with spices.",
    image:
      "https://images.unsplash.com/photo-1774428755120-e1b2d2f208fe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: 8,
    category: "China Town Veg Appetizer",
    name: "Baby Corn",
    price: "₹279",
    description: "Crispy baby corn with oriental seasoning.",
    image:
      "https://images.unsplash.com/photo-1781332147287-191fcfbd52be?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: 9,
    category: "China Town Veg Appetizer",
    name: "Chilli Soya Chap",
    price: "₹249",
    description: "Soya chaap cooked in spicy chilli sauce.",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 10,
    category: "China Town Veg Appetizer",
    name: "Honey Chilli Potato",
    price: "₹239",
    description: "Crispy potatoes glazed with honey and chilli.",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 11,
    category: "China Town Veg Appetizer",
    name: "Paneer Green Garlic",
    price: "₹299",
    description: "Paneer prepared with fresh green garlic.",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 12,
    category: "China Town Veg Appetizer",
    name: "Mongolian Cottage Cheese",
    price: "₹299",
    description: "Cottage cheese prepared in Mongolian style.",
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 13,
    category: "China Town Veg Appetizer",
    name: "Mushroom Kung Pao",
    price: "₹289",
    description: "Mushrooms tossed in spicy Kung Pao sauce.",
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 14,
    category: "China Town Veg Appetizer",
    name: "Chinese Veg Platter",
    price: "₹299",
    description: "A delicious combination of Chinese vegetarian favourites.",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 15,
    category: "China Town Veg Appetizer",
    name: "Veg Spring Roll",
    price: "₹149",
    description: "Crispy spring rolls stuffed with vegetables.",
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 16,
    category: "China Town Veg Appetizer",
    name: "Veg Momo",
    price: "₹129",
    description: "6 pieces · Steam / Kurkure",
    image:
      "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 17,
    category: "China Town Veg Appetizer",
    name: "French Fries",
    price: "₹119",
    description: "Crispy golden fries served with dip.",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=85",
  },

  // ==============================
  // INDIAN MAIN COURSE
  // ==============================

  {
    id: 18,
    category: "Indian Main Course",
    name: "Paneer Butter Masala",
    price: "₹299",
    description: "Soft paneer cooked in rich tomato gravy.",
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 19,
    category: "Indian Main Course",
    name: "Kadai Paneer",
    price: "₹289",
    description: "Paneer cooked with capsicum and aromatic spices.",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 20,
    category: "Indian Main Course",
    name: "Malai Kofta",
    price: "₹279",
    description: "Soft kofta served in creamy gravy.",
    image:
      "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 21,
    category: "Indian Main Course",
    name: "Mix Veg",
    price: "₹249",
    description: "Fresh seasonal vegetables cooked with Indian spices.",
    image:
      "https://images.unsplash.com/photo-1766736590783-2636257e79ba?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: 22,
    category: "Indian Main Course",
    name: "Dal Makhani",
    price: "₹249",
    description: "Slow-cooked black lentils in a creamy buttery sauce.",
    image:
      "https://images.unsplash.com/photo-1736680056463-8b5e0fd9357e?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: 23,
    category: "Indian Main Course",
    name: "Shahi Paneer",
    price: "₹299",
    description: "Paneer cooked in a rich royal creamy gravy.",
    image:
      "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/16/b6/a1/f8/dd/v1_E10/E105EPL9.jpg?w=1600&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=a407fdaad272e85cfcb7b49b5dcd0eb9d73bfc30be08205c4fe8574fffbdf23f",
  },

  {
    id: 24,
    category: "Indian Main Course",
    name: "Palak Paneer",
    price: "₹289",
    description: "Paneer cooked in a creamy spinach gravy.",
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: 25,
    category: "Indian Main Course",
    name: "Jeera Aloo",
    price: "₹219",
    description: "Potatoes tossed with cumin and Indian spices.",
    image:
      "https://images.unsplash.com/photo-1642821372787-a18060c5a982?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: 26,
    category: "Indian Main Course",
    name: "Veg Kolhapuri",
    price: "₹259",
    description: "Mixed vegetables cooked in spicy Kolhapuri gravy.",
    image:
      "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/22/21/63/f2/85/v1_E10/E108PW8Z.jpg?w=1600&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=9ed567d0a65fd76383df3347b8772cddb19a3667cf79349b6fedf6d931512dec",
  },

  {
    id: 27,
    category: "Indian Main Course",
    name: "Veg Kofta Curry",
    price: "₹279",
    description: "Vegetable koftas served in rich Indian gravy.",
    image:
      "https://images.unsplash.com/photo-1683533738338-19b9a22c6405?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  // ==============================
  // RICE & BREADS
  // ==============================

  {
    id: 28,
    category: "Rice & Breads",
    name: "Veg Fried Rice",
    price: "₹199",
    description: "Fried rice tossed with fresh vegetables.",
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 29,
    category: "Rice & Breads",
    name: "Schezwan Fried Rice",
    price: "₹219",
    description: "Spicy fried rice prepared with Schezwan sauce.",
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 30,
    category: "Rice & Breads",
    name: "Steamed Rice",
    price: "₹129",
    description: "Freshly steamed aromatic rice.",
    image:
      "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 31,
    category: "Rice & Breads",
    name: "Jeera Rice",
    price: "₹159",
    description: "Fragrant basmati rice cooked with cumin.",
    image:
      "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 32,
    category: "Rice & Breads",
    name: "Veg Biryani",
    price: "₹249",
    description: "Aromatic rice layered with vegetables and spices.",
    image:
      "https://images.unsplash.com/photo-1630409346824-4f0e7b080087?q=80&w=1246&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: 33,
    category: "Rice & Breads",
    name: "Tandoori Roti",
    price: "₹25",
    description: "Freshly baked tandoori roti.",
    image:
      "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/14/1b/f7/09/b1/v1_E10/E10ATHIZ.jpg?w=1600&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=44be5ef2a6213b8608c8f45d15fb59eb73456b7f5ac58e13674f178d33c509fa",
  },

  {
    id: 34,
    category: "Rice & Breads",
    name: "Roti",
    price: "₹30",
    description: "Soft roti finished with butter.",
    image:
      "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/22/ba/8e/d7/d7/v1_E10/E108M8M7.jpg?w=1600&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=34f855f2a4ed9b464c9736467fc9771dd7542d24d9a7e3cffe4cd3a5a673d1a2",
  },

  {
    id: 35,
    category: "Rice & Breads",
    name: "Naan",
    price: "₹49",
    description: "Soft and freshly baked Indian bread.",
    image:
      "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/72/87/87/92/c8/v1_E10/E101DROS.jpg?w=1600&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=48b51c013234b27734f9130bf662160c247d6e7db2226058ac9e7d0e15064732",
  },

  {
    id: 36,
    category: "Rice & Breads",
    name: "Butter Naan",
    price: "₹59",
    description: "Soft naan finished with melted butter.",
    image:
      "https://images.unsplash.com/photo-1559561724-4ea348cd867f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: 37,
    category: "Rice & Breads",
    name: "Garlic Naan",
    price: "₹69",
    description: "Naan topped with fresh garlic and herbs.",
    image:
      "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/c5/9e/7b/1f/ac/v1_E11/E117NXAD.jpg?w=1600&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=2503bda3254fe35aa666f25fffdda957b05fe6be50b7ba19f290c6de6063c328",
  },

  {
    id: 38,
    category: "Rice & Breads",
    name: "Laccha Paratha",
    price: "₹49",
    description: "Flaky layered Indian flatbread.",
    image:
      "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/c0/1f/26/ea/37/v1_E10/E104T0BQ.jpg?w=1600&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=1b6f89b35573f84ed6f0bbb4b76b689ab25f8b5786f159ac648905da1ffb5e42",
  },

  // ==============================
  // BEVERAGES
  // ==============================

  {
    id: 39,
    category: "Beverages",
    name: "Cold Coffee",
    price: "₹149",
    description: "Creamy chilled coffee.",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 40,
    category: "Beverages",
    name: "Mint Mojito",
    price: "₹139",
    description: "Refreshing mint and lime cooler.",
    image:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 41,
    category: "Beverages",
    name: "Fresh Lime Soda",
    price: "₹119",
    description: "Refreshing fresh lime soda.",
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 42,
    category: "Beverages",
    name: "Ice Tea",
    price: "₹119",
    description: "Chilled refreshing iced tea.",
    image:
      "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 43,
    category: "Beverages",
    name: "Chocolate Shake",
    price: "₹149",
    description: "Rich and creamy chocolate shake.",
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 44,
    category: "Beverages",
    name: "Strawberry Shake",
    price: "₹149",
    description: "Creamy strawberry milkshake.",
    image:
      "https://images.unsplash.com/photo-1553787499-6f9133860278?auto=format&fit=crop&w=900&q=85",
  },

  // ==============================
  // DESSERTS
  // ==============================

  {
    id: 45,
    category: "Desserts",
    name: "Ice Cream",
    price: "₹149",
    description: "Warm gulab jamun served with creamy ice cream.",
    image:
      "https://images.unsplash.com/photo-1719935509365-c3eab392913d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: 46,
    category: "Desserts",
    name: "Chocolate Brownie with Ice Cream",
    price: "₹149",
    description: "Warm chocolate brownie served with ice cream.",
    image:
      "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 47,
    category: "Desserts",
    name: "Hot Chocolate Lava Cake",
    price: "₹149",
    description: "Warm chocolate lava cake with molten centre.",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=85",
  },
];

function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <div className="min-h-screen bg-[#071412] text-white">

      {/* ================= HERO ================= */}

      <section className="relative min-h-[65vh] overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=2000&q=90"
          alt="Nacho G restaurant"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#071412]/75" />

        <div className="relative z-10 flex min-h-[65vh] items-center justify-center px-5 text-center">

          <div>

            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#D7AE4D] sm:text-base">
              NACHO G · THE DINING SPACE
            </p>

            <h1 className="font-serif text-5xl uppercase tracking-wide text-white sm:text-7xl lg:text-8xl">
              Our Menu
            </h1>

            <div className="mx-auto my-6 h-[1px] w-24 bg-[#D7AE4D]" />

            <p className="font-serif text-xl italic text-[#E8D29A] sm:text-2xl">
              Good food made with passion,
              <br />
              served with love.
            </p>

          </div>

        </div>
      </section>

      {/* ================= MENU SECTION ================= */}

      <section className="mx-auto max-w-[1500px] px-4 py-12 sm:px-6 lg:px-10 lg:py-20">

        {/* Section heading */}

        <div className="mb-10 text-center">

          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#D7AE4D]">
            Taste The Difference
          </p>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl">
            Explore Our Menu
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/60 sm:text-base">
            Discover carefully prepared dishes made from
            fresh ingredients and served with passion.
          </p>

        </div>

        {/* ================= CATEGORY BUTTONS ================= */}

        <div className="mb-14 overflow-x-auto pb-3">

          <div className="flex min-w-max justify-start gap-3 lg:justify-center">

            {categories.map((category) => (

              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap border px-5 py-3 text-sm uppercase tracking-wide transition-all duration-300 ${
                  activeCategory === category
                    ? "border-[#D7AE4D] bg-[#D7AE4D] text-black"
                    : "border-[#D7AE4D]/40 bg-transparent text-white hover:border-[#D7AE4D] hover:text-[#D7AE4D]"
                }`}
              >
                {category}
              </button>

            ))}

          </div>

        </div>

        {/* ================= CATEGORY TITLE ================= */}

        <div className="mb-8 flex items-center justify-center gap-4">

          <span className="h-px w-10 bg-[#D7AE4D]" />

          <h2 className="font-serif text-2xl uppercase tracking-wider text-[#D7AE4D] sm:text-3xl">
            {activeCategory}
          </h2>

          <span className="h-px w-10 bg-[#D7AE4D]" />

        </div>

        {/* ================= FOOD GRID ================= */}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {filteredItems.map((item) => (

            <article
              key={item.id}
              className="group overflow-hidden border border-[#D7AE4D]/30 bg-[#0B1C19] transition-all duration-500 hover:-translate-y-2 hover:border-[#D7AE4D] hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)]"
            >

              {/* Image */}

              <div className="relative aspect-[4/3] overflow-hidden">

                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              </div>

              {/* Content */}

              <div className="p-5">

                <div className="flex items-start justify-between gap-3">

                  <h3 className="font-serif text-xl leading-tight text-white">
                    {item.name}
                  </h3>

                  <span className="whitespace-nowrap text-sm font-semibold text-[#D7AE4D]">
                    {item.price}
                  </span>

                </div>

                <div className="my-3 h-px bg-[#D7AE4D]/20" />

                <p className="text-sm leading-6 text-white/60">
                  {item.description}
                </p>

              </div>

            </article>

          ))}

        </div>

        {/* No result */}

        {filteredItems.length === 0 && (

          <div className="py-20 text-center">

            <p className="text-white/60">
              No dishes found in this category.
            </p>

          </div>

        )}

      </section>

      {/* ================= CHEF CTA ================= */}

      <section className="border-y border-[#D7AE4D]/20 bg-[#0B1C19]">

        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-12 text-center sm:px-8 md:flex-row md:text-left">

          <div>

            <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[#D7AE4D]">
              Chef's Recommendation
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl">
              Can't decide what to order?
            </h2>

            <p className="mt-2 text-sm text-white/60">
              Ask our chef for today's special recommendation.
            </p>

          </div>

          <button className="border border-[#D7AE4D] bg-[#D7AE4D] px-8 py-3 font-semibold uppercase tracking-wide text-black transition hover:bg-transparent hover:text-[#D7AE4D]">
            Book a Table
          </button>

        </div>

      </section>


    </div>
  );
}

export default Menu;