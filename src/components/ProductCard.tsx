import { Product } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Check } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

const categoryLabels: Record<string, string> = {
  keychain: "KEYCHAIN",
  "flower-pot": "FLOWER POT",
  bouquet: "BOUQUET",
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="group cursor-pointer">
      {/* Image */}
      <div className="aspect-[3/4] overflow-hidden rounded-lg bg-accent mb-4 shadow-sm group-hover:shadow-md transition-shadow duration-300">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
      </div>

      {/* Category Badge */}
      <span className="inline-block text-[10px] font-bold tracking-[0.15em] uppercase text-primary mb-2">
        {categoryLabels[product.category] || product.category}
      </span>

      {/* Title */}
      <h3 className="font-display text-xl font-semibold text-foreground leading-tight mb-1">
        {product.name}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2">
        {product.description}
      </p>

      {/* Price + Add */}
      <div className="flex items-center justify-between">
        <span className="font-display text-lg font-bold text-foreground">
          ₹{product.price}
        </span>
        <Button
          onClick={handleAdd}
          size="sm"
          variant={added ? "secondary" : "default"}
          className={`text-xs uppercase tracking-wider rounded-full ${!added ? "bg-primary hover:bg-primary/90" : ""}`}
        >
          {added ? (
            <>
              <Check className="w-3.5 h-3.5" /> Added
            </>
          ) : (
            <>
              <ShoppingBag className="w-3.5 h-3.5" /> Add to Cart
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
