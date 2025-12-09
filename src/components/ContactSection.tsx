import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: "+91 98XXX XXXXX",
    subtext: "Mon-Sat, 9AM-6PM IST",
  },
  {
    icon: Mail,
    title: "Email",
    details: "info@listmysme.com",
    subtext: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    title: "Office",
    details: "Mumbai, Maharashtra",
    subtext: "Financial District",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: "Mon - Sat",
    subtext: "9:00 AM - 6:00 PM",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-navy">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Info */}
          <div>
            <span className="text-gold font-medium text-sm uppercase tracking-wider">Get In Touch</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-background mt-4 mb-6">
              Ready to Start Your IPO Journey?
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-10">
              Whether you're just exploring the possibility of going public or ready to begin 
              the process, we're here to guide you every step of the way. Schedule a free 
              consultation to discuss your goals.
            </p>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-navy-light border border-gold/10 rounded-xl p-5 hover:border-gold/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h4 className="text-background font-semibold mb-1">{item.title}</h4>
                  <p className="text-gold font-medium">{item.details}</p>
                  <p className="text-muted-foreground text-sm">{item.subtext}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-elevated">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Schedule a Consultation
            </h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Full Name</label>
                  <Input
                    placeholder="Your name"
                    className="bg-muted/50 border-border focus:border-gold"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Company</label>
                  <Input
                    placeholder="Company name"
                    className="bg-muted/50 border-border focus:border-gold"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input
                    type="email"
                    placeholder="you@company.com"
                    className="bg-muted/50 border-border focus:border-gold"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
                  <Input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="bg-muted/50 border-border focus:border-gold"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">IPO Category</label>
                <select className="w-full h-10 px-3 py-2 bg-muted/50 border border-border rounded-md text-sm focus:outline-none focus:border-gold">
                  <option value="">Select category</option>
                  <option value="sme">SME IPO</option>
                  <option value="mainboard">Mainboard IPO</option>
                  <option value="ncd">NCD</option>
                  <option value="reit">REIT</option>
                  <option value="invit">InvIT</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                <Textarea
                  placeholder="Tell us about your company and IPO goals..."
                  rows={4}
                  className="bg-muted/50 border-border focus:border-gold resize-none"
                />
              </div>
              <Button variant="gold" size="lg" className="w-full">
                <Send className="w-5 h-5" />
                Send Inquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
