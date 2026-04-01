import logo from "@/assets/logo.png";

const SiteFooter = () => (
  <footer className="py-12 px-6 border-t border-border">
    <div className="max-w-5xl mx-auto text-center">
      <img src={logo} alt="BSYA" width={60} height={60} className="mx-auto mb-4" loading="lazy" />
      <h3 className="text-xl font-bold mb-2">Bhagath Singh Youth Association</h3>
      <p className="text-sm text-muted-foreground mb-6">Hyderabad, Telangana</p>
      <div className="flex justify-center gap-6 mb-6 text-sm text-muted-foreground">
        <a href="#celebrations" className="hover:text-foreground transition-colors">Celebrations</a>
        <a href="#members" className="hover:text-foreground transition-colors">Members</a>
        <a href="#location" className="hover:text-foreground transition-colors">Location</a>
      </div>
      <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Bhagath Singh Youth Association. All rights reserved.</p>
    </div>
  </footer>
);

export default SiteFooter;
