import { Linkedin, Mail, Award, BookOpen, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const achievements = [
  {
    icon: Award,
    title: "15+ Years Experience",
    description: "In corporate law and IPO advisory",
  },
  {
    icon: BookOpen,
    title: "Company Secretary",
    description: "ICSI qualified professional",
  },
  {
    icon: Users,
    title: "50+ IPOs Managed",
    description: "Across SME, Mainboard platforms",
  },
];

const FounderSection = () => {
  return (
    <section id="founder" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10">
              {/* Placeholder for founder image */}
              <div className="aspect-[4/5] bg-gradient-to-br from-navy to-navy-light rounded-2xl overflow-hidden border border-gold/20 shadow-elevated">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-40 h-40 bg-gold/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <span className="font-display text-6xl font-bold text-gold">SA</span>
                    </div>
                    <p className="text-muted-foreground text-sm">Professional Photo</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gold/5 rounded-full blur-3xl" />
          </div>

          {/* Content Side */}
          <div>
            <span className="text-gold font-medium text-sm uppercase tracking-wider">Meet the Founder</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-4 mb-2">
              Mr. Saurabh Agarwal
            </h2>
            <p className="text-gold font-medium text-lg mb-6">CS, LLB, MBA</p>

            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
              A seasoned Company Secretary with over 15 years of experience in corporate compliance, 
              capital markets, and IPO advisory. Mr. Agarwal has been instrumental in guiding 
              numerous SMEs through their successful public listings.
            </p>

            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              His expertise spans across SEBI regulations, stock exchange compliances, corporate 
              restructuring, and investor relations. A member of the Institute of Company 
              Secretaries of India (ICSI), he brings a unique blend of legal acumen and 
              business strategy to every engagement.
            </p>

            {/* Achievements */}
            <div className="grid gap-4 mb-8">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-card border border-border rounded-xl p-4 hover:border-gold/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Links */}
            <div className="flex gap-4">
              <Button variant="navyOutline" size="lg">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </Button>
              <Button variant="gold" size="lg">
                <Mail className="w-5 h-5" />
                Contact
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
