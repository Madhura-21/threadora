export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: "keychain" | "flower-pot" | "bouquet" | "flower";
  image: string;
}

export const products: Product[] = [
  // BOUQUETS
  {
    id: "sunflower-bouquet",
    name: "Sunflower Bouquet",
    price: 499,
    description: "A beautiful wrapped bouquet of two handmade crochet sunflowers with green stems and a satin ribbon.",
    category: "bouquet",
    image: "/images/sunflower-bouquet.jpg",
  },
  {
    id: "sunflower-single",
    name: "Giant Sunflower",
    price: 299,
    description: "A single oversized crochet sunflower with rich orange petals and a detailed brown center.",
    category: "bouquet",
    image: "/images/sunflower-single.jpg",
  },
  {
    id: "single-red-rose",
    name: "Single Red Rose",
    price: 199,
    description: "A beautifully wrapped single crochet red rose with a satin ribbon bow — a classic romantic gift.",
    category: "bouquet",
    image: "/images/single-red-rose.png",
  },
  {
    id: "red-rose-bouquet",
    name: "Red Rose Bouquet",
    price: 799,
    description: "A stunning bouquet of three handmade crochet red roses wrapped in elegant black paper with a green satin bow.",
    category: "bouquet",
    image: "/images/red-rose-bouquet.png",
  },

  // FLOWERS (per piece)
  {
    id: "sunflower-stems",
    name: "Sunflower Stem",
    price: 199,
    description: "A handmade crochet sunflower stem with leaves — perfect for a vase. Priced per piece.",
    category: "flower",
    image: "/images/sunflower-stems.jpg",
  },
  {
    id: "calla-lily",
    name: "Calla Lily Stem",
    price: 159,
    description: "Elegant white crochet calla lily with a bright orange stamen — timeless and graceful. Priced per piece.",
    category: "flower",
    image: "/images/calla-lily.jpg",
  },
  {
    id: "rose-stem",
    name: "Rose Stem",
    price: 159,
    description: "A handmade crochet rose with green leaves — timeless and romantic. Priced per piece.",
    category: "flower",
    image: "/images/rose-bouquet.jpg",
  },
  {
    id: "red-tulip",
    name: "Red Tulip",
    price: 149,
    description: "A vibrant red crochet tulip with green leaves — bold and everlasting. Priced per piece.",
    category: "flower",
    image: "/images/red-tulips.jpg",
  },
  {
    id: "pink-tulip",
    name: "Pink Tulip",
    price: 149,
    description: "A soft pink crochet tulip with a green stem — delicate and charming. Priced per piece.",
    category: "flower",
    image: "/images/pink-tulips.jpg",
  },
  {
    id: "lily-bunch",
    name: "Lily Flower",
    price: 199,
    description: "Handmade crochet lily with detailed yellow stamens — available in soft pastel shades. Priced per piece.",
    category: "flower",
    image: "/images/lily-bouquet.jpg",
  },
  {
    id: "bunny-flower",
    name: "Bunny Flower",
    price: 249,
    description: "An adorable crochet flower with a cute bunny face and carrot crown. A perfect gift for kids!",
    category: "flower",
    image: "/images/bunny-flower.jpg",
  },

  // FLOWER POTS
  {
    id: "sunflower-pot",
    name: "Sunflower Pot",
    price: 299,
    description: "A cheerful crochet sunflower in a cream pot with green leaves — a sunny little desk companion.",
    category: "flower-pot",
    image: "/images/sunflower-pot.jpg",
  },
  {
    id: "tulip-pot",
    name: "Tulip Pot",
    price: 299,
    description: "A charming purple crochet tulip in a cozy beige pot — a forever-blooming little gift.",
    category: "flower-pot",
    image: "/images/tulip-pot.jpg",
  },
  {
    id: "daisy-pot",
    name: "Daisy Pot",
    price: 299,
    description: "A sweet pink daisy in a white pot with a flower accent — adorable and full of charm.",
    category: "flower-pot",
    image: "/images/daisy-pot.jpg",
  },

  // KEYCHAINS (each reduced by ₹1)
  {
    id: "heart-keychain",
    name: "Heart Keychain",
    price: 148,
    description: "Adorable crochet heart keychain in red and pink — a sweet everyday accessory or gift.",
    category: "keychain",
    image: "/images/heart-keychain.png",
  },
  {
    id: "bear-keychain",
    name: "Bear Couple Keychain",
    price: 198,
    description: "A pair of adorable crochet teddy bears with red scarves — perfect matching keychains for couples.",
    category: "keychain",
    image: "/images/bear-keychain.png",
  },
  {
    id: "totoro-keychain",
    name: "Totoro Keychain",
    price: 199,
    description: "A cute crochet Totoro with a green leaf on its head — a must-have for Studio Ghibli fans.",
    category: "keychain",
    image: "/images/totoro-keychain.jpg",
  },
  {
    id: "coffee-cup-keychain",
    name: "Coffee Cup Keychain",
    price: 179,
    description: "A tiny crochet coffee cup with a happy face — the cutest companion for coffee lovers.",
    category: "keychain",
    image: "/images/coffee-cup-keychain.jpg",
  },
  {
    id: "bee-keychain",
    name: "Bee Keychain",
    price: 159,
    description: "A cheerful crochet bee with fluffy white wings — sweet, buzzy, and irresistibly cute.",
    category: "keychain",
    image: "/images/bee-keychain.jpg",
  },
  {
    id: "turtle-keychain",
    name: "Turtle Keychain",
    price: 178,
    description: "A sweet crochet turtle with a green shell and a tiny red flower — charming and detailed.",
    category: "keychain",
    image: "/images/turtle-keychain.jpg",
  },
  {
    id: "tulip-keychain",
    name: "Tulip Bunch Keychain",
    price: 198,
    description: "A colorful cluster of mini crochet tulips in pink, yellow, and white with green stems.",
    category: "keychain",
    image: "/images/tulip-keychain.jpg",
  },
  {
    id: "sunflower-keychain",
    name: "Sunflower Keychain",
    price: 149,
    description: "A pair of bright crochet sunflowers with a green leaf — a cheerful accessory for your keys.",
    category: "keychain",
    image: "/images/sunflower-clip-keychain.jpg",
  },
  {
    id: "penguin-keychain",
    name: "Penguin Keychain",
    price: 179,
    description: "An adorable blue crochet penguin with a yellow beak — a tiny friend to carry everywhere.",
    category: "keychain",
    image: "/images/penguin-keychain.jpg",
  },
];
