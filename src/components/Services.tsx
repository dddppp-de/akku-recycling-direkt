import { User, Building2, Landmark, Battery, BatteryWarning, Zap } from "lucide-react";

const Services = () => {
  const customerTypes = [
    {
      icon: User,
      title: "Privatpersonen (geplant)",
      description:
        "Für private Haushalte ist ein komfortabler Abholservice in Vorbereitung. Aktuell erfassen wir den Bedarf in verschiedenen Regionen.",
      features: [
        "Flexible Terminoptionen vorgesehen",
        "Keine Mindestmenge geplant",
        "Einfache Abwicklung angestrebt"
      ]
    },
    {
      icon: Building2,
      title: "Unternehmen (geplant)",
      description:
        "Für Werkstätten, Händler und Betriebe entwickeln wir ein Konzept für regelmäßige Abholungen und sichere Entsorgung.",
      features: [
        "Option für Rahmenvereinbarungen",
        "Regelmäßige Abholintervalle geplant",
        "Dokumentation vorgesehen"
      ]
    },
    {
      icon: Landmark,
      title: "Behörden (geplant)",
      description:
        "Ein Service für öffentliche Einrichtungen befindet sich in der Planung – mit Fokus auf Sicherheit und Nachvollziehbarkeit.",
      features: [
        "Fachgerechte Entsorgung vorgesehen",
        "Dokumentationskonzept in Arbeit",
        "Transparente Preisstruktur geplant"
      ]
    }
  ];

  const batteryTypes =
