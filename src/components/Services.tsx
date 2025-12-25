import { User, Building2, Landmark, Battery, BatteryWarning, Zap } from "lucide-react";

const Services = () => {
  const customerTypes = [
    {
      icon: User,
      title: "Privatpersonen",
      description: "Ob E-Bike, Laptop oder Werkzeugakkus – wir holen Ihre Akkus bequem von zu Hause ab.",
      features: ["Flexible Abholtermine", "Keine Mindestmenge", "Schnelle Abwicklung"]
    },
    {
      icon: Building2,
      title: "Unternehmen",
      description: "Regelmäßige Abholung für Werkstätten, Händler und Produktionsbetriebe.",
      features: ["Rahmenverträge", "Regelmäßige Abholung", "Dokumentation"]
    },
    {
      icon: Landmark,
      title: "Behörden",
      description: "Zuverlässiger Partner für öffentliche Einrichtungen mit höchsten Sicherheitsstandards.",
      features: ["Zertifizierte Entsorgung", "Lückenlose Dokumentation", "Festpreise"]
    }
  ];

  const batteryTypes = [
    {
      icon: BatteryWarning,
      title: "Aufgeblähte Akkus",
      description: "Besonders gefährliche Akkus mit erhöhtem Brandrisiko – sichere Abholung mit Spezialverpackung.",
      highlight: true
    },
    {
      icon: Battery,
      title: "Defekte Akkus",
      description: "Akkus die nicht mehr laden oder ihre Kapazität verloren haben.",
      highlight: false
    },
    {
      icon: Zap,
      title: "Funktionstüchtige Akkus",
      description: "Alte aber funktionierende Akkus zur umweltgerechten Verwertung.",
      highlight: false
    }
  ];

  return (
    <section id="leistungen" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Unsere Leistungen</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Akku-Entsorgung für alle
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Egal ob Sie Privatperson, Unternehmen oder Behörde sind – wir bieten maßgeschneiderte Lösungen für Ihre Akku-Entsorgung.
          </p>
        </div>

        {/* Customer Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {customerTypes.map((type, index) => (
            <div
              key={type.title}
              className="group p-8 rounded-2xl bg-card shadow-soft hover:shadow-elevated transition-all duration-300 border border-border hover:border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <type.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{type.title}</h3>
              <p className="text-muted-foreground mb-6">{type.description}</p>
              <ul className="space-y-2">
                {type.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Battery Types */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-foreground">Wir nehmen alle Akku-Arten an</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {batteryTypes.map((battery, index) => (
            <div
              key={battery.title}
              className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                battery.highlight
                  ? "border-accent bg-accent/5 shadow-elevated"
                  : "border-border bg-card hover:border-primary/20"
              }`}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                battery.highlight ? "bg-accent/20" : "bg-primary/10"
              }`}>
                <battery.icon className={`w-6 h-6 ${battery.highlight ? "text-accent-foreground" : "text-primary"}`} />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">{battery.title}</h4>
              <p className="text-sm text-muted-foreground">{battery.description}</p>
              {battery.highlight && (
                <span className="inline-block mt-4 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                  Gefahrgut-Handling
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
