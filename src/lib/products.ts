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
    id: "sunflower-stems",
    name: "Sunflower Stems",
    price: 399,
    description: "A pair of crochet sunflower stems with leaves — perfect for placing in a vase.",
    category: "flower-pot",
    image: "/images/sunflower-stems.jpg",
  },
  {
    id: "bunny-flower",
    name: "Bunny Flower",
    price: 249,
    description: "An adorable crochet flower with a cute bunny face and carrot crown. A perfect gift for kids!",
    category: "keychain",
    image: "/images/bunny-flower.jpg",
  },
  {
    id: "rose-bouquet",
    name: "Rose & Tulip Bouquet",
    price: 699,
    description: "A stunning bouquet of handmade red roses, pink tulips, and a white rose. A gift that lasts forever.",
    category: "bouquet",
    image: "/images/rose-bouquet.jpg",
  },
  {
    id: "red-tulips",
    name: "Red Tulips",
    price: 399,
    description: "Vibrant red crochet tulips with green leaves — bold, beautiful, and everlasting.",
    category: "bouquet",
    image: "/images/red-tulips.jpg",
  },
  {
    id: "pink-tulips",
    name: "Pink Tulips",
    price: 399,
    description: "Soft pink crochet tulips with green stems — a delicate and charming bouquet.",
    category: "bouquet",
    image: "/images/pink-tulips.jpg",
  },
  {
    id: "calla-lily",
    name: "Calla Lily Stems",
    price: 449,
    description: "Elegant white crochet calla lilies with bright orange stamens — timeless and graceful.",
    category: "flower-pot",
    image: "/images/calla-lily.jpg",
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
  {
    id: "heart-keychain",
    name: "Heart Keychain",
    price: 149,
    description: "Adorable crochet heart keychain in red and pink — a sweet everyday accessory or gift.",
    category: "keychain",
    image: "/images/heart-keychain.png",
  },
];
