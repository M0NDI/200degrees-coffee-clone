const productDetails = [
  {
    name: "ROASTER'S CHOICE SUBSCRIPTION",
    imagePath: "/assets/images/photos/products/home-page/product1.webp",
    description: "",
    price: 19.00,
  },
  {
    name: "KENYA NYERI KAMOINI",
    imagePath: "/assets/images/photos/products/home-page/product10-hover.webp",
    description: "The Othaya Farmers Cooperative Society operates 18 mills around Nyeri County. Thesociety was founded in 1956 and offers support and training to its members. It has a nursey, farm store, and offers agriculture and agronomy classes. Set in Kamoini village, this station was built in 1987 along the Ichamama River flowing from Karima forest. The average farmer tends farms that are less than 0.5 hectares, hand selecting only ripe cherry. This selection is washed, meaning the fruit of the cherry is removed and the seed is soakedfrom 12-48 hours. It is raked through channels to sort by density and then laid to dry in the sun for 12-14 days. ",
    price: 28.00,
    country: "Kenya",
    region: ["Kamoini", "Nyeri", "Kenya"],
    producer: ["Othaya Farmers", "Cooperative Society"],
    variety: "SL-28, Batian, Ruiru-11",
    procMethod: "Washed",
    altitude: "1,800 MASL",
    notes: ["Lemongrass", "Berry", "Red Wine"],
  },
  {
    name: "FELIX ESPRESSO",
    imagePath: "/assets/images/photos/products/home-page/product2.webp",
    description:
      "Our signature espresso is an easygoing and mellow blend of hand picked Ethiopian, Guatemalan and Brazilian coffees. Perfect as a daily-drinker and designed to be equally delicious black or with your milk of choice.",
    notes: ["Red Cherry", "Milk Chocolate", "Caramel", "Sweet Orange"],
    price: 22.00,
  },
  {
    name: "COLOMBIA NARINO - MERY ARMERO",
    imagePath: "/assets/images/photos/products/home-page/product3.webp",
    description:
      "Mery Armero owns the specialty coffee farm, El Guayacan, alongside her husband Alveiro Montilla. El Guayacan was started in 2015 when they joined a government program to subsidize replacement of illegal crops with coffee trees. Mery and Alveiro also have a young child who they hope will one day follow in the footsteps of their parents and become a coffee grower as well.",
    country: "Colombia",
    region: ["Buesaco", "Narino"],
    producer: ["Mery Armero", "El Guayacan"],
    variety: "Castillo",
    procMethod: "Washed",
    altitude: "2100 MASL",
    notes: ["Tangerine", "Almond"],
    price: 24.00,
  },
  {
    name: "ETHIOPIA WASHED YIRGACHEFFE WORKA SAKARO",
    imagePath: "/assets/images/photos/products/home-page/product4.webp",
    price: 24.00,
    description:
      "Mijane Woresa has worked in coffee for over 30 years. He recently started a new export company with his sons to allow them to offer lots directly from his processing stations. As a family owned business, Mijane and his sons emphasize social impact in the communities where they source coffee. They have invested in more localized cherry collection sites to reduce the transportation cost for smaller producers. They have also contributed to road construction projects that make travel for everyone a bit easier and they invest in school infrastructure projects. On arrival at the mill cherries are carefully sorted by handed and floated to remove defects. The cherry is depulped and fermented in tanks for 48 hours before being channel washed to sort by density. The fully washed coffee is then dried in the sun on raised bed for 12-15 days.",
    country: "Ethiopia",
    region: ["Gedeb", "Yirgacheffe"],
    producer: ["410 Farmers surrounding", "The Worka Sakaro Mill"],
    variety: "Heirloom",
    procMethod: "Washed",
    altitude: "2000 MASL",
    notes: ["Peach", "Apricot", "Black Tea"],
  },
  {
    name: "ETHIOPIA NATURAL SHANTAWENE",
    imagePath: "/assets/images/photos/products/home-page/product5.webp",
    price: 28.00,
    description:
      "This coffee is harvested from approximately 500 smallholders surrounding the Shantawene village. The coffee trees in this region may be over 200 years old. The Abore mill is owned and operated by the Dukamo family, who have become leaders in high quality coffee production. In 2020 at the inaugural Cup of Excellence of Ethiopia, one of their coffees took 7th place - an enormous accomplishment. This lot is naturally processed. Ripe cherry is picked and then floated in water to remove any defective cherries. It is laid in the sun for up to 14 days to dry on raised beds, being meticulously raked and turned to prevent the growth of mold. This method produces a fruit forward flavor profile that is vibrant and juicy.",
    country: "Ethiopia",
    region: ["Sidama zone", "Bensa woreda", "Shantawene kebele"],
    farm: "500 small farmers surrounding Shantawene Village",
    variety: ["74-110", "74-112"],
    procMethod: "Natural",
    altitude: "2000 MASL",
    notes: ["Strawberry", "Green Apple", "Floral"],
  },
  {
    name: "FELIX DECAF",
    imagePath: "/assets/images/photos/products/home-page/product6.webp",
    price: 24.00,
    description:
      "Our decaf is a rotating selection of Central and South American coffees. We use the Mountain Water Process to avoid any chemical flavors, leaving a coffee that is sweet, easygoing and mellow.",
  },
  {
    name: "CEREMONIAL MATCHA CANISTER",
    imagePath: "/assets/images/photos/products/home-page/product7.webp",
    price: 34.00,
    producer: ["Kobayashi"],
    origin: "Shizuoka, Japan",
    harvest: "May 10, 2020",
    process: "Stone Milling - Ceremonial Grade",
    cultivar: ["Blend Yabukita", "Saemidori"],
    description:
      "Since 1827, this tea producer has been refining the highest quality leaves from Kyoto and grinding them into matcha for the discerning tea lover of Japan. Today, head of operations is Mr. Kobayashi - one of 13 people in Japan to ever hold the top rank 10 level for tea leaf appraisal. His ability to judge the qualities of tea leaves and then blend the leaves in the best way, particularly for making matcha, is proven by the many awards bestowed upon him over the years.",
    notes: ["Strawberry Milk", "Vanilla", "Toasted Seaweed"],
  },
  {
    name: "E-GIFT CARD (ONLINE ONLY)",
    imagePath: "/assets/images/photos/products/home-page/product8.webp",
    description: "Good for any purchase on our website. -not valid in store-",
    price: 10.00,
  },
  {
    name: "NESPRESSO COMPATIBLE PODS: FELIX ESPRESSO",
    imagePath: "/assets/images/photos/products/home-page/product9.webp",
    description:
      "Our signature espresso is an easygoing and mellow blend of hand picked Ethiopian, Guatemalan and Colombian coffees. Perfect as a daily-drinker and designed to be equally delicious black or with your milk of choice.",
    notes: ["Red Cherry", "Milk Chocolate", "Caramel", "Sweet Orange"],
    price: 15.00,
  },
];

export default productDetails;
