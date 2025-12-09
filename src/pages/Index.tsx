import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import FounderSection from "@/components/FounderSection";
import IPODataSection from "@/components/IPODataSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <FounderSection />
      <IPODataSection />
      <BlogPreviewSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
