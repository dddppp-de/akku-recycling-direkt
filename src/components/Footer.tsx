import { Battery, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="kontakt" className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary-foreground flex items-center justify-center">
                <Battery className="w-5 h-5 text-foreground" />
              </div>
              <span className="font-bold text-xl">
                AkkuRecycling<span className="text-accent">.de</span>
              </span>
            </a>
            <p className="text-primary-foreground/70 max-w-md">
              Ihr zuverlässiger Partner für die sichere Abholung und fachgerechte Entsorgung von Akkus aller Art – deutschlandweit.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+4930123456789" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  <Phone className="w-4 h-4" />
                  030 123 456 789
                </a>
              </li>
              <li>
                <a href="mailto:info@akkurecycling.de" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  <Mail className="w-4 h-4" />
                  info@akkurecycling.de
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-primary-foreground/70">
                  <MapPin className="w-4 h-4" />
                  Berlin, Deutschland
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Rechtliches</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  AGB
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20">
          <p className="text-center text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} AkkuRecycling.de – Alle Rechte vorbehalten. Zertifiziert nach ElektroG.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
