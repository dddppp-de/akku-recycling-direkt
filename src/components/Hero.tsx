import { ArrowRight, Shield, Truck, Recycle } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient opacity-[0.03]" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in">
            <Shield className="w-4 h-4" />
            <span>Zertifizierte Akku-Entsorgung deutschlandweit</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Sichere Abholung &<br />
            <span className="text-gradient">Entsorgung von Akkus</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Wir holen Ihre defekten, aufgeblähten oder funktionsfähigen Akkus deutschlandweit ab und entsorgen sie fachgerecht – für Privatpersonen, Unternehmen und Behörden.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="default" size="lg" asChild>
              <a href="#angebot" className="flex items-center gap-2">
                Kostenloses Angebot
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#leistungen">Mehr erfahren</a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card shadow-soft">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-bold text-foreground">Deutschlandweit</p>
                <p className="text-sm text-muted-foreground">Kostenlose Abholung</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card shadow-soft">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-bold text-foreground">TÜV-Zertifiziert</p>
                <p className="text-sm text-muted-foreground">Sichere Entsorgung</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card shadow-soft">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Recycle className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-bold text-foreground">100% Recycling</p>
                <p className="text-sm text-muted-foreground">Umweltgerecht</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
