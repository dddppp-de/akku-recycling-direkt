import { Battery, Phone, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-hero-gradient flex items-center justify-center">
              <Battery className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg md:text-xl text-foreground">
              AkkuAbholung<span className="text-primary">.de</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#leistungen"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Geplanter Service
            </a>
            <a
              href="#preise"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Vorläufige Infos
            </a>
            <a
              href="#angebot"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Bedarf anmelden
            </a>
            <a
              href="#kontakt"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Kontakt
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+4915678197496"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">+4915678197496</span>
            </a>
            <Button variant="default" size="sm" asChild>
              <a href="#angebot">Bedarf anmelden</a>
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menü öffnen"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              <a
                href="#leistungen"
                className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
              >
                Geplanter Service
              </a>
              <a
                href="#preise"
                className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
              >
                Vorläufige Infos
              </a>
              <a
                href="#angebot"
                className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
              >
                Bedarf anmelden
              </a>
              <a
                href="#kontakt"
                className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
              >
                Kontakt
              </a>
              <Button variant="default" className="w-full mt-2" asChild>
                <a href="#angebot">Bedarf anmelden</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
