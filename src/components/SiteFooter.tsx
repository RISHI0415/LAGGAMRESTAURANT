const SiteFooter = () => (
  <footer className="py-12 px-6 border-t border-border">
    <div className="max-w-5xl mx-auto text-center">
      <h3 className="text-2xl font-serif font-bold mb-2">Laggam Restaurant</h3>
      <p className="text-sm text-muted-foreground mb-6">Nagarjuna Sagar Rd, Hastinapuram, Hyderabad</p>
      <div className="flex justify-center gap-6 mb-6 text-sm text-muted-foreground">
        <a href="#menu" className="hover:text-foreground transition-colors">Menu</a>
        <a href="#" className="hover:text-foreground transition-colors">About</a>
        <a href="#" className="hover:text-foreground transition-colors">Contact</a>
      </div>
      <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Laggam Restaurant. All rights reserved.</p>
    </div>
  </footer>
);

export default SiteFooter;
