import { Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy border-t border-gold/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
                <span className="font-display font-bold text-navy text-xl">A</span>
              </div>
              <span className="font-display text-xl font-semibold text-gold">Agarwal & Co.</span>
            </div>
            <p className="text-muted-foreground font-body max-w-md mb-4">
              Your trusted partner for SME IPO advisory services. We guide ambitious businesses 
              from private to publicly listed with expertise and integrity.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center hover:bg-gold/20 transition-colors">
                <Linkedin className="w-5 h-5 text-gold" />
              </a>
              <a href="#" className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center hover:bg-gold/20 transition-colors">
                <Twitter className="w-5 h-5 text-gold" />
              </a>
              <a href="#" className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center hover:bg-gold/20 transition-colors">
                <Mail className="w-5 h-5 text-gold" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-background mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Services", "Portfolio", "About", "IPO Data", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(" ", "-")}`} className="text-muted-foreground hover:text-gold transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-background mb-4">Services</h4>
            <ul className="space-y-3">
              {["SME IPO", "Mainboard IPO", "NCD Issuance", "REIT Advisory", "Compliance"].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-muted-foreground hover:text-gold transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Agarwal & Co. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-gold transition-colors">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-gold transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
