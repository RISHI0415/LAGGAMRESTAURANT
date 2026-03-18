import { Phone, UtensilsCrossed, MapPin } from "lucide-react";

const MobileNav = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-t border-gold/20 md:hidden">
    <div className="flex items-center justify-around py-3">
      <a href="tel:+91XXXXXXXXXX" className="flex flex-col items-center gap-1 text-primary-foreground/80">
        <Phone className="w-5 h-5" />
        <span className="text-xs">Call</span>
      </a>
      <a href="#menu" className="flex flex-col items-center gap-1 text-primary-foreground/80">
        <UtensilsCrossed className="w-5 h-5" />
        <span className="text-xs">Menu</span>
      </a>
      <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-primary-foreground/80">
        <MapPin className="w-5 h-5" />
        <span className="text-xs">Directions</span>
      </a>
    </div>
  </div>
);

export default MobileNav;
