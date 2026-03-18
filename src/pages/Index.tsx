import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import LocationSection from "@/components/LocationSection";
import FinalCTA from "@/components/FinalCTA";
import SiteFooter from "@/components/SiteFooter";
import MobileNav from "@/components/MobileNav";

const Index = () => (
  <div className="min-h-screen">
    <HeroSection />
    <AboutSection />
    <MenuSection />
    <WhyChooseUs />
    <GallerySection />
    <ReviewsSection />
    <LocationSection />
    <FinalCTA />
    <SiteFooter />
    <MobileNav />
  </div>
);

export default Index;
