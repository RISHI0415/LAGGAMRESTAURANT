import { Phone, PartyPopper, MapPin, Users } from "lucide-react";

const MobileNav = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-t border-saffron/20 md:hidden">
    <div className="flex items-center justify-around py-3">
      <a href="tel:+91XXXXXXXXXX" className="flex flex-col items-center gap-1 text-white/80">
        <Phone className="w-5 h-5" />
        <span className="text-xs">Call</span>
      </a>
      <a href="#members" className="flex flex-col items-center gap-1 text-white/80">
        <Users className="w-5 h-5" />
        <span className="text-xs">Members</span>
      </a>
      <a href="#celebrations" className="flex flex-col items-center gap-1 text-white/80">
        <PartyPopper className="w-5 h-5" />
        <span className="text-xs">Events</span>
      </a>
      <a href="#location" className="flex flex-col items-center gap-1 text-white/80">
        <MapPin className="w-5 h-5" />
        <span className="text-xs">Location</span>
      </a>
    </div>
  </div>
);

export default MobileNav;
