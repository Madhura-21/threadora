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
];
