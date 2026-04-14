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

      {/* Hero Section */}
      <section className="border-b">
        <div className="container mx-auto px-6 py-20 md:py-28 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-6">
            Handcrafted Crochet Collection
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-foreground leading-[1.1] mb-6">
            Crochet Flower
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
            This is our collection of handcrafted crochet flowers. Each piece is carefully made with love — flowers that never wilt, gifts that last forever.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section id="categories" className="border-b">
        <div className="container mx-auto px-6 py-5">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`text-xs uppercase tracking-[0.15em] font-semibold px-5 py-2.5 rounded-full transition-all duration-200 ${
                  activeCategory === cat.key
                    ? "bg-foreground text-background"
                    : "bg-transparent text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-6 py-12 text-center">
          <h3 className="font-display text-2xl font-bold text-foreground mb-2">Crochet Bloom</h3>
          <p className="text-sm text-muted-foreground">
            © 2026 Crochet Bloom. All pieces handmade with ❤️
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
