import { Check, Clock, Zap } from "lucide-react";

const Pricing = () => {
  const pricingTiers = [
    {
      name: "Standard (geplant)",
      timeframe: "Unverbindlicher Richtwert",
      pricePerWh: "0,20",
      features: [
        "Voraussichtliche Abholung nach Termin",
        "Geplanter Entsorgungsnachweis",
        "Unverbindliche Bedarfserfassung",
        "Geeignet für typische Mengen"
      ],
      popular: false,
      icon: Clock
    },
    {
      name: "Express (geplant)",
      timeframe: "Unverbindlicher Richtwert",
      pricePerWh: "0,80",
      features: [
        "Priorisierte Abholung (geplant)",
        "Geplanter Entsorgungsnachweis",
        "Status‑Updates vorgesehen",
        "Konzept für Gefahrgut‑Handling in Arbeit",
        "Für dringende Fälle vorgesehen"
      ],
      popular: true,
      icon: Zap
    }
  ];

  return (
    <section id="preise" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Vorläufige Preisindikationen
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Geplante Preisstruktur (unverbindlich)
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Akku Abholung befindet sich im Aufbau. Die folgenden Werte dienen ausschließlich als
