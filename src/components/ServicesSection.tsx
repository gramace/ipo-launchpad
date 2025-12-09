import { FileCheck, Wallet, Network, Briefcase, Scale, FileText } from "lucide-react";

const services = [
  {
    icon: FileCheck,
    title: "Regulatory Compliance",
    description: "End-to-end compliance management with SEBI, stock exchanges, and other regulatory bodies. We ensure your IPO journey is legally sound.",
  },
  {
    icon: Wallet,
    title: "Funding Strategy",
    description: "Pre-IPO funding, anchor investor identification, and roadshow management. We connect you with the right investors at the right time.",
  },
  {
    icon: Network,
    title: "Network & Relations",
    description: "Access to our extensive network of merchant bankers, legal advisors, auditors, and institutional investors for comprehensive support.",
  },
  {
    icon: Briefcase,
    title: "Due Diligence",
    description: "Thorough financial, legal, and operational due diligence to prepare your company for scrutiny and build investor confidence.",
  },
  {
    icon: Scale,
    title: "Corporate Restructuring",
    description: "Strategic restructuring to optimize your corporate structure for IPO readiness and maximize valuation potential.",
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "Draft Red Herring Prospectus (DRHP), Red Herring Prospectus (RHP), and all required filings prepared with precision.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold font-medium text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Comprehensive IPO Support
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            From initial assessment to listing ceremony, we provide complete end-to-end support for your IPO journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl p-8 hover:border-gold/30 hover:shadow-elevated transition-all duration-500"
            >
              <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
