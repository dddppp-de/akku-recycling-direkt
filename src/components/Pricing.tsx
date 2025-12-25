import { Check, Clock, Zap } from "lucide-react";

const Pricing = () => {
  const pricingTiers = [
    {
      name: "Standard",
      timeframe: "Innerhalb von 2 Monaten",
      pricePerWh: "0,02",
      features: [
        "Abholung nach Terminvereinbarung",
        "Entsorgungsnachweis",
        "E-Mail-Benachrichtigung",
        "Geeignet für größere Mengen"
      ],
      popular: false,
      icon: Clock
    },
    {
      name: "Express",
      timeframe: "Innerhalb von 14 Tagen",
      pricePerWh: "0,04",
      features: [
        "Priorisierte Abholung",
        "Entsorgungsnachweis",
        "SMS & E-Mail Updates",
        "Gefahrgut-Handling inklusive",
        "Ideal für aufgeblähte Akkus"
      ],
      popular: true,
      icon: Zap
    }
  ];

  return (
    <section id="preise" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Transparente Preise</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Faire Preise nach Kapazität
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Unsere Preise richten sich nach der Akku-Kapazität in Wattstunden (Wh) und dem gewünschten Abholzeitraum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative p-8 rounded-2xl border-2 transition-all duration-300 ${
                tier.popular
                  ? "border-primary bg-primary/5 shadow-elevated"
                  : "border-border bg-card hover:border-primary/30 shadow-soft"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    Beliebteste Wahl
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  tier.popular ? "bg-primary" : "bg-primary/10"
                }`}>
                  <tier.icon className={`w-6 h-6 ${tier.popular ? "text-primary-foreground" : "text-primary"}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground">{tier.timeframe}</p>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-foreground">{tier.pricePerWh}€</span>
                  <span className="text-muted-foreground">/ Wh</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Beispiel: 500 Wh Akku = {(parseFloat(tier.pricePerWh.replace(",", ".")) * 500).toFixed(0)}€
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-xl bg-muted/50 max-w-4xl mx-auto">
          <p className="text-center text-muted-foreground">
            <strong className="text-foreground">Mindestbestellwert:</strong> 20€ | 
            <strong className="text-foreground ml-4">Maximale Kapazität pro Abholung:</strong> 10.000 Wh |
            <strong className="text-foreground ml-4">Abholung:</strong> Kostenlos
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
