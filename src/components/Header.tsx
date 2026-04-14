import CartSheet from "./CartSheet";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🧶</span>
          <h1 className="font-display text-xl font-bold text-foreground">
            Crochet Bloom
          </h1>
        </div>
        <CartSheet />
      </div>
    </header>
  );
};

export default Header;
