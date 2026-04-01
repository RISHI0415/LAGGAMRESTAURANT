import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MembersSection from "@/components/MembersSection";
import CelebrationsSection from "@/components/CelebrationsSection";
import YearlyTimeline from "@/components/YearlyTimeline";
import LocationSection from "@/components/LocationSection";
import FinalCTA from "@/components/FinalCTA";
import SiteFooter from "@/components/SiteFooter";
import MobileNav from "@/components/MobileNav";

const Index = () => (
  <div className="min-h-screen">
    <HeroSection />
    <AboutSection />
    <MembersSection />
    <CelebrationsSection />
    <YearlyTimeline />
    <LocationSection />
    <FinalCTA />
    <SiteFooter />
    <MobileNav />
  </div>
);

export default Index;
