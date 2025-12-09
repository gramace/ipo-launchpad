import { ExternalLink, TrendingUp, Calendar, Building2 } from "lucide-react";

const companies = [
  {
    name: "TechVentures Ltd",
    sector: "Technology",
    listingDate: "March 2024",
    exchange: "NSE SME",
    raised: "₹45 Cr",
    growth: "+142%",
  },
  {
    name: "GreenEnergy Solutions",
    sector: "Renewable Energy",
    listingDate: "January 2024",
    exchange: "BSE SME",
    raised: "₹78 Cr",
    growth: "+89%",
  },
  {
    name: "HealthFirst Pharma",
    sector: "Healthcare",
    listingDate: "November 2023",
    exchange: "NSE SME",
    raised: "₹52 Cr",
    growth: "+167%",
  },
  {
    name: "AgriGrow Industries",
    sector: "Agriculture",
    listingDate: "September 2023",
    exchange: "BSE SME",
    raised: "₹35 Cr",
    growth: "+98%",
  },
  {
    name: "FinServ Capital",
    sector: "Financial Services",
    listingDate: "July 2023",
    exchange: "NSE SME",
    raised: "₹120 Cr",
    growth: "+203%",
  },
  {
    name: "BuildRight Infra",
    sector: "Infrastructure",
    listingDate: "May 2023",
    exchange: "BSE SME",
    raised: "₹88 Cr",
    growth: "+156%",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 bg-navy">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold font-medium text-sm uppercase tracking-wider">Our Track Record</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-background mt-4 mb-6">
            Successfully Listed Companies
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            A proud portfolio of SMEs we've helped transition from private to publicly listed companies.
          </p>
        </div>

        {/* Companies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company, index) => (
            <div
              key={index}
              className="group bg-navy-light border border-gold/10 rounded-2xl p-6 hover:border-gold/30 transition-all duration-500"
            >
              {/* Company Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-gold" />
                </div>
                <span className="flex items-center gap-1 text-emerald-400 text-sm font-semibold">
                  <TrendingUp className="w-4 h-4" />
                  {company.growth}
                </span>
              </div>

              {/* Company Info */}
              <h3 className="font-display text-xl font-semibold text-background mb-2">
                {company.name}
              </h3>
              <p className="text-gold text-sm font-medium mb-4">{company.sector}</p>

              {/* Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Exchange</span>
                  <span className="text-background font-medium">{company.exchange}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Amount Raised</span>
                  <span className="text-background font-medium">{company.raised}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> Listed
                  </span>
                  <span className="text-background font-medium">{company.listingDate}</span>
                </div>
              </div>

              {/* View Link */}
              <a
                href="#"
                className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors duration-300 text-sm font-medium"
              >
                View Case Study
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
