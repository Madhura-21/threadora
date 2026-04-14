import CartSheet from "./CartSheet";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-foreground text-background text-xs tracking-widest uppercase text-center py-2.5 font-medium">
        Free Shipping Over ₹500 · Handmade with Love 🧶
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-background border-b">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          {/* Nav Links Left */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider">
              Shop
            </a>
            <a href="#categories" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider">
              Categories
            </a>
          </nav>

          {/* Logo Center */}
          <div className="flex flex-col items-center">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-wide">
              Crochet Bloom
            </h1>
          </div>

          {/* Actions Right */}
          <div className="flex items-center gap-3">
            <CartSheet />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
