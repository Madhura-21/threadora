import { Product } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Check } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ProductCardProps {
  product: Product;
}

const categoryLabels: Record<string, string> = {
  keychain: "KEYCHAIN",
  "flower-pot": "FLOWER POT",
  bouquet: "BOUQUET",
  flower: "FLOWER",
  scrunchie: "SCRUNCHIE",
};

const PER_PIECE_CATEGORIES = new Set(["flower", "keychain", "scrunchie"]);

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const [open, setOpen] = useState(false);

  const isPerPiece = PER_PIECE_CATEGORIES.has(product.category);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <>
      <div className="group">
        {/* Image - clickable */}
        <button
          onClick={() => setOpen(true)}
          className="block w-full text-left aspect-[3/4] overflow-hidden rounded-lg bg-accent mb-4 shadow-sm group-hover:shadow-md transition-shadow duration-300 cursor-pointer"
          aria-label={`View details for ${product.name}`}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
        </button>

        {/* Category Badge */}
        <span className="inline-block text-[10px] font-bold tracking-[0.15em] uppercase text-primary mb-2">
          {categoryLabels[product.category] || product.category}
        </span>

        {/* Title - clickable */}
        <h3
          onClick={() => setOpen(true)}
          className="font-display text-xl font-semibold text-foreground leading-tight mb-1 cursor-pointer hover:text-primary transition-colors"
        >
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Price + Add */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-baseline gap-1.5">
            <span className="font-display text-lg font-bold text-foreground">
              ₹{product.price}
            </span>
            {isPerPiece && (
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                / piece
              </span>
            )}
          </div>
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
                <ShoppingBag className="w-3.5 h-3.5" /> Add
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Detail Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden gap-0">
          <div className="grid md:grid-cols-2">
            <div className="aspect-square md:aspect-auto bg-accent">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col">
              <span className="inline-block text-[10px] font-bold tracking-[0.15em] uppercase text-primary mb-2">
                {categoryLabels[product.category] || product.category}
              </span>
              <DialogHeader className="space-y-2 text-left">
                <DialogTitle className="font-display text-2xl md:text-3xl font-semibold leading-tight">
                  {product.name}
                </DialogTitle>
                <DialogDescription className="text-sm text-muted-foreground leading-relaxed">
                  {product.description}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-3xl font-bold text-foreground">
                  ₹{product.price}
                </span>
                {isPerPiece && (
                  <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                    / piece
                  </span>
                )}
              </div>

              <div className="mt-auto pt-6">
                <Button
                  onClick={handleAdd}
                  size="lg"
                  variant={added ? "secondary" : "default"}
                  className={`w-full text-xs uppercase tracking-wider rounded-full ${!added ? "bg-primary hover:bg-primary/90" : ""}`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" /> Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" /> Add to Cart
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductCard;
