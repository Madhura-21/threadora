import CartSheet from "./CartSheet";

const Header = () => {
  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-primary text-primary-foreground text-xs tracking-widest uppercase text-center py-2.5 font-medium">
        Free Shipping Over ₹500 · Handmade with Love by Threadora 🧶
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a href="/" className="flex items-center gap-2.5">
            <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-primary/20 flex-shrink-0">
              <img src="/images/threadora-logo.png" alt="Threadora" className="w-full h-full object-cover scale-125" />
            </div>
          </a>

          {/* Nav Links Center */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider">
              Shop
            </a>
            <a href="#categories" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider">
              Categories
            </a>
          </nav>

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
