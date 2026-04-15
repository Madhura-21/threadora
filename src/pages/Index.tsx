import { useState } from "react"; 
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

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
    <div className="min-h-screen bg-background relative">
      {/* Watermark background */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.08]"
        style={{
          backgroundImage: 'url(/images/threadora-logo.png)',
          backgroundSize: '200px',
          backgroundRepeat: 'repeat',
        }}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/60 via-background to-secondary/40" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-primary/5 rounded-full blur-2xl" />
        <div className="relative container mx-auto px-6 py-24 md:py-36 text-center">
          <h1 className="font-display text-4xl md:text-5xl italic text-primary mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Threadora
          </h1>
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold mb-6 inline-flex items-center gap-2">
            <span className="w-8 h-px bg-primary/50" />
            Handcrafted Crochet Collection
            <span className="w-8 h-px bg-primary/50" />
          </p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.05] mb-6">
            Flowers That
            <br />
            <span className="text-primary">Never Wilt</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-base leading-relaxed mb-10">
            Each piece is carefully handcrafted with love — eternal blooms, timeless gifts, made just for you.
          </p>
          <a
            href="#products"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* Filter Bar */}
      <section id="categories" className="border-b border-t">
        <div className="container mx-auto px-6 py-5">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`text-xs uppercase tracking-[0.15em] font-semibold px-6 py-2.5 rounded-full transition-all duration-300 ${
                  activeCategory === cat.key
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-transparent text-muted-foreground hover:text-primary hover:bg-accent border border-border"
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
      <footer className="bg-foreground text-primary-foreground">
        <div className="container mx-auto px-6 py-14 text-center">
          <img src="/images/threadora-logo.png" alt="Threadora" className="h-14 mx-auto mb-4 invert brightness-200" />
          <p className="text-sm opacity-70">
            © 2026 Threadora. All pieces handmade with ❤️
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
