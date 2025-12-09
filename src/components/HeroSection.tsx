import { ArrowRight, TrendingUp, Users, Shield, Banknote } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const stats = [
    { number: "50+", label: "Successful IPOs" },
    { number: "₹2000Cr+", label: "Funds Raised" },
    { number: "15+", label: "Years Experience" },
    { number: "100%", label: "Compliance Rate" },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gold/3 rounded-full blur-2xl animate-float" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-8 animate-fade-up">
            <TrendingUp className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-medium">Trusted by 50+ SMEs for their IPO journey</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-background mb-6 animate-fade-up delay-100">
            Your Partner from{" "}
            <span className="text-gradient-gold">Startup to Stock Exchange</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up delay-200 font-body">
            We guide ambitious SMEs through every step of their IPO journey — 
            compliance, funding, networking, and beyond. Your success is our mission.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-up delay-300">
            <Button variant="hero" size="xl">
              Schedule Consultation
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              View Our Portfolio
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-up delay-400">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-navy-light/50 backdrop-blur-sm border border-gold/10 rounded-xl p-6 hover:border-gold/30 transition-all duration-300"
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-gold mb-1">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm font-body">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Pills */}
        <div className="flex flex-wrap justify-center gap-4 mt-16 animate-fade-up delay-500">
          {[
            { icon: Shield, label: "Compliance" },
            { icon: Banknote, label: "Funding" },
            { icon: Users, label: "Networking" },
            { icon: TrendingUp, label: "Growth Strategy" },
          ].map((service, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-navy-light/30 border border-gold/10 rounded-full px-5 py-2.5 hover:border-gold/30 transition-all duration-300"
            >
              <service.icon className="w-4 h-4 text-gold" />
              <span className="text-background/80 text-sm font-medium">{service.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
