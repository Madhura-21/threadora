export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: "keychain" | "flower-pot" | "bouquet";
  image: string;
}

export const products: Product[] = [
  {
    id: "rose-keychain",
    name: "Rose Keychain",
    price: 149,
    description: "A delicate hand-crocheted rose keychain, perfect for adding charm to your keys or bag.",
    category: "keychain",
    image: "/images/rose-keychain.jpg",
  },
  {
    id: "sunflower-keychain",
    name: "Sunflower Keychain",
    price: 149,
    description: "Bright and cheerful sunflower keychain, handmade with love and care.",
    category: "keychain",
    image: "/images/sunflower-keychain.jpg",
  },
  {
    id: "daisy-keychain",
    name: "Daisy Keychain",
    price: 129,
    description: "Sweet little daisy keychain that brings a smile every time you reach for your keys.",
    category: "keychain",
    image: "/images/daisy-keychain.jpg",
  },
  {
    id: "tulip-keychain",
    name: "Tulip Keychain",
    price: 139,
    description: "Elegant tulip keychain in soft pastel colors, a perfect gift.",
    category: "keychain",
    image: "/images/tulip-keychain.jpg",
  },
  {
    id: "lavender-pot",
    name: "Lavender Flower Pot",
    price: 399,
    description: "A charming crocheted lavender arrangement in a mini pot. Never needs watering!",
    category: "flower-pot",
    image: "/images/lavender-pot.jpg",
  },
  {
    id: "succulent-pot",
    name: "Succulent Pot",
    price: 349,
    description: "Adorable crocheted succulents in a tiny pot — the perfect desk companion.",
    category: "flower-pot",
    image: "/images/succulent-pot.jpg",
  },
  {
    id: "rose-pot",
    name: "Rose Flower Pot",
    price: 449,
    description: "Beautiful crocheted roses arranged in a decorative pot. A timeless gift.",
    category: "flower-pot",
    image: "/images/rose-pot.jpg",
  },
  {
    id: "mixed-bouquet",
    name: "Mixed Flower Bouquet",
    price: 599,
    description: "A stunning bouquet of assorted crocheted flowers. Lasts forever!",
    category: "bouquet",
    image: "/images/mixed-bouquet.jpg",
  },
];
