import { useState } from "react";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
import { Button } from "@/components/ui/button";

const categories = [
  { key: "all", label: "All" },
  { key: "keychain", label: "Keychains" },
  { key: "flower-pot", label: "Flower Pots" },
  { key: "bouquet", label: "Bouquets" },
] as const;

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="container mx-auto px-4 py-16 text-center space-y-4">
        <p className="text-sm uppercase tracking-widest text-primary font-semibold">
          Handmade with love
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
          Beautiful Crochet<br />Flowers & Gifts
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Each piece is carefully handcrafted — flowers that never wilt, gifts that last forever.
        </p>
      </section>

      {/* Filters */}
      <section className="container mx-auto px-4 pb-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <Button
              key={cat.key}
              variant={activeCategory === cat.key ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(cat.key)}
            >
              {cat.label}
            </Button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        <p>© 2026 Crochet Bloom. All pieces handmade with ❤️</p>
      </footer>
    </div>
  );
};

export default Index;
